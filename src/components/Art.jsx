"use client";

import { featureLists, goodLists } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { CheckCircle2 } from "lucide-react";
const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    const start = isMobile ? "top 20%" : "11% top";
    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start: start,
        end: "bottom center",
        scrub: 2,
        pin: true,
      },
    });
    maskTimeline
      .to(".will-fade", {
        opacity: 0,
        stagger: 0.3,
        ease: "power2.inOut",
      })
      .to(".masked-img", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "400%",
        duration: 1,
        ease: "power3.inOut",
      })
      .to("#masked-content", {
        opacity: 1,
        duration: 1,
        yPercent: -20,
        ease: "power3.inOut",
      });
  });
  return (
    <section
      id="art"
      className="flex-center flex-col min-h-dvh p-5 mt-20 relative radial-gradient"
    >
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade relative md:text-[20vw] text-8xl text-nowrap leading-none font-modern-negra text-center text-[#505050] mb-8">
          The ART
        </h2>
        <div className="flex md:flex-row flex-col mb-10 justify-between md:mb-10 md:mt-0 mt-40 gap-10">
          <ul className="space-y-3 will-fade">
            {goodLists.map((feature, index) => (
              <li key={index} className="flex gap-2 flex-center w-full">
                <CheckCircle2 />
                <p>{feature}</p>
              </li>
            ))}
          </ul>
          <div className="md:w-[60vw] w-full h-[50vh] md:h-[70vh] rounded-4xl overflow-hidden absolute top-0 md:top-1/2 md:-translate-y-1/2 left-1/2 -translate-x-1/2">
            <Image
              loading="lazy"
              src={"/images/under-img.jpg"}
              width={700}
              height={500}
              alt="masked-art"
              className="abs-center masked-img size-full object-contain"
            />
          </div>
          <ul className="space-y-3 will-fade">
            {featureLists.map((good, index) => (
              <li key={index} className="flex gap-2 flex-center w-full">
                <CheckCircle2 />
                <p className="md:w-fit w-50">{good}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className=" hidden md:block text-4xl md:text-5xl font-modern-negra text-center mb-10 text-white  will-fade">
            Sip worthy perfection
          </h2>
          <div
            className="opacity-0 md:px-0 px-5 space-y-5 absolute sm:-bottom-14 bottom-69 left-1/2 -translate-x-1/2"
            id="masked-content"
          >
            <h3 className=" md:text-4xl text-xl text-center font-serif md:w-full w-80 text-white">
              Made with Craft, Poured with Passion
            </h3>
            <p className="text-center text-md">
              This isn&apos;t just a drink, it&apos;s a carefully crafted moment
              just for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Art;
