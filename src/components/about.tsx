"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { SplitText } from "gsap/all";
export const About = () => {
  useGSAP(() => {
    // const ratingText = new SplitText(".rating", { type: "chars" });
    // gsap.from(ratingText.chars, {
    //   x: -10,
    //   y: 20,
    //   opacity: 0,
    //   ease: "expo.out",
    //   stagger: {
    //     each: 0.01,
    //   },
    //   duration: 0.5,
    //   scrollTrigger: {
    //     trigger: ".rating",
    //   },
    // });
    const titleSplit = new SplitText(".title-text", { type: "words" });
    const aboutTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 40%",
      },
    });

    aboutTimeline.from(
      titleSplit.words,
      {
        yPercent: 100,
        duration: 1,
        opacity: 0,
        ease: "expo.out",
        stagger: 0.05,
      },
      "0"
    );
    aboutTimeline.from(
      ".grid-top div , .grid-bottom div",
      {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.04,
      },
      "-=0.5"
    );
  }, []);
  return (
    <section
      id="about"
      className="min-h-screen py-28 2xl:px-0 px-5 container mx-auto"
    >
      <div className="mb-16 md:px-0 px-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="md:col-span-8">
            <p className="inline-block rounded-full bg-white text-black px-4 py-2 text-sm font-medium mb-8">
              Best Cocktails
            </p>
            <h2 className="text-5xl md:text-6xl font-modern-negra max-w-lg title-text">
              Where every details matters <span className="text-white">-</span>
              from muddle to garnish
            </h2>
          </div>
          <div className="md:col-span-4 space-y-5 flex flex-col justify-between">
            <p className="text-lg">
              Every cocktail we serve is a reflection of our obsession with
              detail -- from the first muddle to the final garnish. The care is
              what turns a single drink into something truly memorable.
            </p>
            <div className="flex flex-col justify-between md:gap-2 gap-5">
              <p className="text-xl md:text-3xl font-bold rating">
                <span className="text-yellow text-5xl font-bold">4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                More than +12000 customers
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-5 md:px-0 px-5 grid-top">
        <div className="md:col-span-3  rounded-3xl overflow-hidden h-72 relative">
          <Image
            src={"/images/noise.png"}
            className="absolute inset-0 z-1 size-full"
            fill
            loading="lazy"
            alt="bg-noise-image"
          />
          <Image
            src={"/images/abt1.png"}
            alt="grid-img-1"
            loading="lazy"
            className="object-cover w-auto h-auto"
            fill
          />
        </div>
        <div className="md:col-span-6 rounded-3xl overflow-hidden h-72 relative">
          <Image
            src={"/images/noise.png"}
            className="absolute inset-0 size-full z-1"
            fill
            loading="lazy"
            alt="bg-noise-image"
          />
          <Image
            src={"/images/abt2.png"}
            alt="grid-img-2"
            loading="lazy"
            fill
            className="object-cover w-auto h-auto"
          />
        </div>
        <div className="md:col-span-3 rounded-3xl overflow-hidden h-72 relative">
          <Image
            src={"/images/noise.png"}
            className="absolute inset-0 size-full z-1"
            fill
            loading="lazy"
            alt="bg-noise-image"
          />
          <Image
            src={"/images/abt5.png"}
            alt="grid-img-5"
            loading="lazy"
            fill
            className="object-cover w-auto h-auto"
          />
        </div>
      </div>
      <div className="grid-bottom grid grid-cols-1 md:grid-cols-12 gap-5 md:px-0 px-5">
        <div className="md:col-span-8 rounded-3xl overflow-hidden h-72 relative">
          <Image
            src={"/images/noise.png"}
            className="absolute inset-0 size-full z-1"
            fill
            loading="lazy"
            alt="bg-noise-image"
          />
          <Image
            src={"/images/abt3.png"}
            alt="grid-img-3"
            loading="lazy"
            fill
            className="object-cover size-full"
          />
        </div>
        <div className="md:col-span-4 rounded-3xl overflow-hidden h-72 relative">
          <Image
            src={"/images/noise.png"}
            className="absolute inset-0 size-full z-1"
            fill
            loading="lazy"
            alt="bg-noise-image"
          />
          <Image
            src={"/images/abt4.png"}
            alt="grid-img-4"
            loading="lazy"
            fill
            className="object-cover size-full"
          />
        </div>
      </div>
    </section>
  );
};
