"use client";

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
const GsapPlugin = ({ children }: { children: React.ReactNode }) => {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  return <div>{children}</div>;
};

export default GsapPlugin;
