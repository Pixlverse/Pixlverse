import React from "react";
import {
  FaPaintBrush,
  FaCode,
  FaChartLine,
  FaTools,
  FaFlask,
  FaCloud,
} from "react-icons/fa";

const MAP = {
  design: FaPaintBrush,
  code: FaCode,
  seo: FaChartLine,
  tools: FaTools,
  revamp: FaFlask,
  hosting: FaCloud,
};

export default function ServiceIcon({ name, className }) {
  const Icon = MAP[name] || FaCode;
  return <Icon className={className} aria-hidden="true" />;
}
