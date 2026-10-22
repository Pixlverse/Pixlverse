import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { SITE } from "../../data/site";
import "./whatsappbutton.css";

/**
 * A floating WhatsApp chat link, pinned bottom-right on every page. It is a
 * plain link rather than a widget, so it costs nothing until it's tapped.
 * BackToTop stacks above it.
 */
export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-fab"
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with Pixlverse on WhatsApp (${SITE.phone})`}
    >
      <FaWhatsapp aria-hidden="true" />
    </a>
  );
}
