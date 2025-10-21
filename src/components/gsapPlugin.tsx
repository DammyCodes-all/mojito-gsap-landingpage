"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
const GsapPlugin = ({ children }: { children: React.ReactNode }) => {
  gsap.registerPlugin(ScrollTrigger);
  return <div>{children}</div>;
};

export default GsapPlugin;
