"use client";

import { cocktailLists } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
export const Cocktails = () => {
  useGSAP(() => {
    const parralaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: "true",
      },
    });
    parralaxTimeline
      .from("#c-left-leaf", {
        x: -100,
        y: 100,
      })
      .from("#c-right-leaf", {
        x: 100,
        y: 100,
      });
  }, []);

  return (
    <section
      id="cocktails"
      className="relative min-h-dvh w-full overflow-hidden"
    >
      <Image
        src={"/images/noise.png"}
        className="absolute inset-0 size-ful"
        fill
        loading="lazy"
        alt="bg-noise-image"
      />
      <Image
        className="absolute left-0 md:bottom-0 md:top-auto -top-20 md:w-fit w-1/3"
        src={"/images/cocktail-left-leaf.png"}
        alt="cocktail-left-leaf"
        width={300}
        id="c-left-leaf"
        height={300}
      />
      <Image
        className="absolute right-0 md:bottom-0 md:top-auto -top-20 md:w-fit w-1/3"
        src={"/images/cocktail-right-leaf.png"}
        alt="cocktail-right-leaf"
        width={300}
        id="c-right-leaf"
        height={300}
      />
      <div className="container mx-auto relative z-10 flex md:flex-row flex-col justify-between items-start gap-20 pt-40 2xl:px-0 px-5">
        <div className="space-y-5 w-full md:w-fit">
          <h2 className="text-xl font-medium">Most popular cocktails:</h2>
          <ul className="space-y-5">
            {cocktailLists.map((cocktail) => (
              <li
                key={cocktail.name}
                className="flex justify-between items-start"
              >
                <div className="md:me-28">
                  <h3 className="font-modern-negra 2xl:text-3xl text-xl text-yellow">
                    {cocktail.name}
                  </h3>
                  <p className="text-sm">
                    {cocktail.country} | {cocktail.detail}
                  </p>
                </div>
                <span className="text-xl font-medium"> - {cocktail.price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-5 w-full md:w-fit pb-20 md:pb-0">
          <h2 className="text-xl font-medium">Most loved mocktails:</h2>
          <ul className="space-y-5">
            {cocktailLists.map((cocktail) => (
              <li
                key={cocktail.name}
                className="flex justify-between items-start"
              >
                <div className="md:me-28">
                  <h3 className="font-modern-negra 2xl:text-3xl text-xl text-yellow">
                    {cocktail.name}
                  </h3>
                  <p className="text-sm">
                    {cocktail.country} | {cocktail.detail}
                  </p>
                </div>
                <span className="text-xl font-medium"> - {cocktail.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
