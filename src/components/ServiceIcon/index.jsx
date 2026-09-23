import React from "react";
import {
  FaPaintBrush,
  FaCode,
  FaChartLine,
  FaTools,
  FaFlask,
  FaCloud,
  FaCheckCircle,
  FaBolt,
  FaComments,
  FaBrain,
  FaLifeRing,
  FaMapMarkerAlt,
  FaTag,
  FaWrench,
  FaSyncAlt,
  FaGlobeAsia,
  FaRegComments,
  FaGem,
  FaHandshake,
} from "react-icons/fa";

const MAP = {
  // services
  design: FaPaintBrush,
  code: FaCode,
  seo: FaChartLine,
  tools: FaTools,
  revamp: FaFlask,
  hosting: FaCloud,
  // "why Pixlverse" differentiators
  details: FaCheckCircle,
  found: FaBolt,
  plain: FaComments,
  roof: FaBrain,
  stay: FaLifeRing,
  // FAQ
  location: FaMapMarkerAlt,
  price: FaTag,
  ranking: FaChartLine,
  upkeep: FaWrench,
  rebuild: FaSyncAlt,
  worldwide: FaGlobeAsia,
  // "values" on the About page
  clarity: FaRegComments,
  craft: FaGem,
  partnership: FaHandshake,
};

export default function ServiceIcon({ name, className }) {
  const Icon = MAP[name] || FaCode;
  return <Icon className={className} aria-hidden="true" />;
}
