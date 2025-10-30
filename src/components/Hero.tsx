"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    const heroSplit = new SplitText(titleRef.current, { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });
    heroSplit.chars.forEach((char) => (char.className += "text-gradient"));
    gsap.from(heroSplit.chars, {
      yPercent: 60,
      opacity: 0,
      duration: 1.8,
      stagger: {
        each: 0.06,
      },
      ease: "expo.out",
    });
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      ease: "expo.out",
      stagger: {
        each: 0.06,
      },
      delay: 1,
      yPercent: 70,
      duration: 1.8,
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(
        "#right-leaf",
        {
          y: 200,
        },
        0
      )
      .to(
        "#left-leaf",
        {
          y: -200,
        },
        0
      );
  }, []);
  useGSAP(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }
    video.load();
    const vidTweenStartValue = isMobile ? "20% 30%" : "center 69.5%";
    const vidTweenEndValue = isMobile ? "120% top" : "108% top";

    video.onloadedmetadata = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: video,
          start: vidTweenStartValue,
          end: vidTweenEndValue,
          scrub: true,
          pin: true,
        },
      });
      tl.fromTo(
        video,
        {
          scale: 1.3,
        },
        {
          currentTime: video?.duration,
          scale: 1,
          ease: "none",
        }
      );
    };
  }, [isMobile]);

  return (
    <>
      <section
        className="relative z-10 min-h-dvh w-full border border-transparent"
        id="hero"
      >
        <Image
          src={"/images/noise.png"}
          className="absolute inset-0 size-full -z-50"
          fill
          loading="eager"
          priority
          alt="bg-noise-image"
        />
        <h1
          className="font-modern-negra text-8xl  md:mt-32 mt-40 md:text-[20vw] leading-none text-center"
          ref={titleRef}
        >
          MOJITO
        </h1>
        <Image
          src={"/images/hero-left-leaf.png"}
          width={300}
          height={300}
          id="left-leaf"
          alt="hero-left-leaf"
          className="absolute left-0 md:top-20 xl:top-36 2xl:top-52 md:bottom-auto -bottom-20 md:w-fit w-1/3"
        />
        <Image
          src={"/images/hero-right-leaf.png"}
          width={300}
          height={300}
          alt="hero-right-leaf"
          id="right-leaf"
          className="absolute right-0 md:bottom-0 xl:top-0 2xl:top-12 top-1/2 md:w-fit w-24"
        />
        <div className="container mx-auto absolute left-1/2 -translate-x-1/2 lg:bottom-20 top-auto md:top-[45vh] flex justify-between items-end px-5">
          <div className="flex lg:flex-row flex-col w-full gap-10 justify-center lg:justify-between items-center lg:items-end mx-auto">
            <section className="space-y-2 hidden md:block">
              <p className="text-md">Cool. Crisp. Classic</p>
              <p className="font-modern-negra text-6xl  text-yellow subtitle max-w-xl ">
                Sip the spirit <br />
                of summer
              </p>
            </section>
            <section className="space-y-5 text-lg lg:max-w-2xs md:max-w-xs w-full md:block flex flex-col items-center lg:items-end text-center">
              <p className="lg:text-left text-center subtitle max-w-xl 2xl:text-start">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
              <a
                href="#cocktails"
                className="font-semibold opacity-80 2xl:text-start text-center hover:text-yellow"
              >
                View cocktails
              </a>
            </section>
          </div>
        </div>
      </section>
      <div className="w-full md:h-[80%] h-1/2 absolute bottom-0 left-0 md:object-contain object-bottom object-cover inset-0 flex justify-center items-center">
        <video
          src={"/videos/output.mp4"}
          muted
          playsInline
          autoPlay
          preload="metadata"
          ref={videoRef}
        />
      </div>
    </>
  );
};
