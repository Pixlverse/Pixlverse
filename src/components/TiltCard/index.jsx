import React, { useCallback, useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

const EASE = [0.16, 0.84, 0.24, 1];

const DIRECTIONS = {
  up: { y: 32, x: 0 },
  down: { y: -32, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * TiltCard — drop-in replacement for <Reveal> on anything card-shaped. Keeps
 * Reveal's fade-and-slide on scroll, and adds a pointer-driven 3D tilt plus a
 * lift on hover.
 *
 * The tilt lives in `style` (rotateX/rotateY) while the reveal animates
 * opacity/x/y, so the two never write the same transform key and Framer can
 * compose them into a single transform.
 */
export default function TiltCard({
  children,
  as = "div",
  className,
  direction = "up",
  delay = 0,
  duration = 0.6,
  amount = 0.2,
  max = 7,
  lift = -8,
  style,
  ...rest
}) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const M = motion[as] || motion.div;
  const offset = DIRECTIONS[direction] || DIRECTIONS.up;

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const spring = { stiffness: 200, damping: 20, mass: 0.6 };
  const rotateX = useSpring(rx, spring);
  const rotateY = useSpring(ry, spring);

  const handleMove = useCallback(
    (e) => {
      if (reduceMotion || e.pointerType !== "mouse" || !ref.current) return;
      const r = ref.current.getBoundingClientRect();
      // -0.5 .. 0.5 from the card's centre
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      // pointer below centre should tip the card's top edge away from us
      rx.set(-py * max * 2);
      ry.set(px * max * 2);
    },
    [reduceMotion, max, rx, ry]
  );

  const reset = useCallback(() => {
    rx.set(0);
    ry.set(0);
  }, [rx, ry]);

  return (
    <M
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      whileHover={reduceMotion ? undefined : { y: lift }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: EASE }}
      /* the caller's style is merged, not spread over the top: `...rest` lands
         after this, so an incoming `style` prop would otherwise replace the
         tilt transform outright */
      style={{ ...style, rotateX, rotateY, transformPerspective: 1000 }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
      {...rest}
    >
      {children}
    </M>
  );
}
