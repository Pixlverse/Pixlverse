import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { IS_PRERENDER } from "../../utils/prerender";
import "./heronetwork.css";

/* Brand ends of the node palette, plus the near-white core every node burns at
   its centre. Kept as arrays so we can interpolate without a colour library. */
const VIOLET = [123, 63, 228];
const PLUM = [180, 63, 143];
const CORE = [216, 194, 255];

/* Distinct glow sprites pre-rendered along the violet -> plum ramp. Building a
   radial gradient per node per frame is the obvious way to do this and also the
   slowest; six sprites blitted with drawImage costs almost nothing. */
const TONES = 6;

const mix = (a, b, t) => [
  a[0] + (b[0] - a[0]) * t,
  a[1] + (b[1] - a[1]) * t,
  a[2] + (b[2] - a[2]) * t,
];
const rgba = (c, a) => `rgba(${c[0] | 0}, ${c[1] | 0}, ${c[2] | 0}, ${a})`;
const CORE_RGB = `${CORE[0]}, ${CORE[1]}, ${CORE[2]}`;

/**
 * HeroNetwork — the hero backdrop: small glowing nodes drifting through the
 * dark, wired to their neighbours by lines that fade in as two nodes approach
 * and out as they part. Pulses run along the links, and the cursor pulls in a
 * constellation of its own, so the network reads as something being connected
 * rather than a static pattern.
 *
 * Plain canvas: this is a particle field, not UI. Framer only supplies the
 * reduced-motion signal, and on that setting we paint a single still frame.
 */
export default function HeroNetwork() {
  const canvasRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let linkDist = 150;
    let nodes = [];
    let pulses = [];
    let raf = 0;
    let running = false;
    let last = 0;

    const pointer = { x: 0, y: 0, active: false };
    const sprites = [];

    const buildSprites = () => {
      sprites.length = 0;
      const size = 64;
      for (let i = 0; i < TONES; i++) {
        const c = mix(VIOLET, PLUM, i / (TONES - 1));
        const s = document.createElement("canvas");
        s.width = size;
        s.height = size;
        const g = s.getContext("2d");
        const grad = g.createRadialGradient(
          size / 2, size / 2, 0,
          size / 2, size / 2, size / 2
        );
        grad.addColorStop(0, rgba(CORE, 0.95));
        grad.addColorStop(0.16, rgba(c, 0.6));
        grad.addColorStop(0.45, rgba(c, 0.16));
        grad.addColorStop(1, rgba(c, 0));
        g.fillStyle = grad;
        g.fillRect(0, 0, size, size);
        sprites.push(s);
      }
    };

    const seed = () => {
      // density by area, so a phone gets a readable constellation rather than
      // a desktop field crammed into 390px
      // The stage is the hero plus the Services band, so it is roughly twice
      // the height the cap was set for — raise it or the field reads sparse
      // over the lower half.
      const count = Math.round(
        Math.min(115, Math.max(16, (w * h) / 13000))
      );
      linkDist = Math.min(190, Math.max(104, Math.hypot(w, h) * 0.115));

      nodes = Array.from({ length: count }, () => {
        const tone = Math.floor(Math.random() * TONES);
        const c = mix(VIOLET, PLUM, tone / (TONES - 1));
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.17,
          vy: (Math.random() - 0.5) * 0.17,
          r: 1.1 + Math.random() * 1.9,
          tone,
          // the node's link colour, pre-baked to "r, g, b" so the draw loop
          // only has to append an alpha instead of re-mixing every frame
          rgb: `${c[0] | 0}, ${c[1] | 0}, ${c[2] | 0}`,
          // uneven twinkle periods so the field never breathes in unison
          phase: Math.random() * Math.PI * 2,
          rate: 0.6 + Math.random() * 1.1,
        };
      });

      pulses = Array.from({ length: Math.max(3, Math.round(count / 12)) }, () => ({
        a: 0,
        b: 0,
        t: 1,
        speed: 0,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = host.getBoundingClientRect();
      w = Math.max(1, Math.round(rect.width));
      h = Math.max(1, Math.round(rect.height));
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    /** Sends a pulse down a link that actually exists right now. */
    const respawn = (p) => {
      if (nodes.length < 2) return;
      const a = (Math.random() * nodes.length) | 0;
      const candidates = [];
      for (let i = 0; i < nodes.length; i++) {
        if (i === a) continue;
        const dx = nodes[i].x - nodes[a].x;
        const dy = nodes[i].y - nodes[a].y;
        if (dx * dx + dy * dy < linkDist * linkDist) candidates.push(i);
      }
      if (!candidates.length) return;
      p.a = a;
      p.b = candidates[(Math.random() * candidates.length) | 0];
      p.t = 0;
      p.speed = 0.28 + Math.random() * 0.36;
    };

    const draw = (dt) => {
      ctx.clearRect(0, 0, w, h);

      const margin = 60;
      for (const n of nodes) {
        n.x += n.vx * dt;
        n.y += n.vy * dt;
        // wrap rather than bounce: bounced nodes pile up along the edges
        if (n.x < -margin) n.x = w + margin;
        else if (n.x > w + margin) n.x = -margin;
        if (n.y < -margin) n.y = h + margin;
        else if (n.y > h + margin) n.y = -margin;

        if (pointer.active) {
          // a gentle lean toward the cursor, never a capture
          const dx = pointer.x - n.x;
          const dy = pointer.y - n.y;
          const d2 = dx * dx + dy * dy;
          const reach = 190;
          if (d2 < reach * reach && d2 > 1) {
            const f = (1 - Math.sqrt(d2) / reach) * 0.016 * dt;
            n.x += dx * f;
            n.y += dy * f;
          }
        }
      }

      // ---- links ----
      ctx.lineWidth = 1;
      const link2 = linkDist * linkDist;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > link2) continue;
          const t = 1 - Math.sqrt(d2) / linkDist;
          ctx.strokeStyle = `rgba(${a.rgb}, ${t * 0.3})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // ---- the cursor's own constellation ----
      if (pointer.active) {
        const reach = 210;
        for (const n of nodes) {
          const dx = pointer.x - n.x;
          const dy = pointer.y - n.y;
          const d = Math.hypot(dx, dy);
          if (d > reach) continue;
          const t = 1 - d / reach;
          ctx.strokeStyle = `rgba(${CORE_RGB}, ${t * 0.42})`;
          ctx.beginPath();
          ctx.moveTo(pointer.x, pointer.y);
          ctx.lineTo(n.x, n.y);
          ctx.stroke();
        }
      }

      // ---- pulses travelling the links ----
      ctx.globalCompositeOperation = "lighter";
      for (const p of pulses) {
        if (p.t >= 1) {
          respawn(p);
          continue;
        }
        const a = nodes[p.a];
        const b = nodes[p.b];
        if (!a || !b) {
          p.t = 1;
          continue;
        }
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        // the link broke while the pulse was in flight
        if (dx * dx + dy * dy > link2) {
          p.t = 1;
          continue;
        }
        p.t += (p.speed / linkDist) * dt * 1.6;
        const e = Math.min(p.t, 1);
        const x = a.x + dx * e;
        const y = a.y + dy * e;
        // fade in and out so pulses don't pop at either end
        const alpha = Math.sin(e * Math.PI) * 0.9;
        const s = 13;
        ctx.globalAlpha = alpha;
        ctx.drawImage(sprites[0], x - s / 2, y - s / 2, s, s);
        ctx.globalAlpha = 1;
      }

      // ---- nodes ----
      for (const n of nodes) {
        n.phase += 0.0012 * n.rate * dt;
        const twinkle = 0.72 + Math.sin(n.phase) * 0.28;
        const s = n.r * 9 * twinkle;
        ctx.drawImage(sprites[n.tone], n.x - s / 2, n.y - s / 2, s, s);
      }
      ctx.globalCompositeOperation = "source-over";

      // crisp cores on top of the glow, so the nodes read as points not smudges
      ctx.fillStyle = rgba(CORE, 0.9);
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 0.55, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const frame = (now) => {
      // clamp so a backgrounded tab doesn't resume with one enormous step
      const dt = Math.min(2.5, (now - last) / 16.667) || 1;
      last = now;
      draw(dt);
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      /* an endless rAF loop means the prerenderer never sees the page go idle */
      if (running || reduceMotion || IS_PRERENDER) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    buildSprites();
    resize();

    if (reduceMotion || IS_PRERENDER) {
      draw(0);
      return () => {};
    }

    const onPointerMove = (e) => {
      if (e.pointerType !== "mouse") return;
      const rect = host.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };
    const onPointerLeave = () => {
      pointer.active = false;
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    const ro = new ResizeObserver(resize);
    ro.observe(host);

    // no reason to burn frames on a hero that has scrolled away
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 }
    );
    io.observe(host);

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);
    start();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduceMotion]);

  return <canvas ref={canvasRef} className="hero-network" aria-hidden="true" />;
}
