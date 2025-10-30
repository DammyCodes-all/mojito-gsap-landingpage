"use client";
import { allCocktails } from "@/constants";
import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { dm_serif_text } from "@/lib/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Carousel = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeCocktailIndex, setActiveCockTailIndex] = useState<number>(0);

  useGSAP(() => {
    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".cocktail-image",
      { opacity: 0, xPercent: -100 },
      {
        opacity: 1,
        xPercent: 0,
        duration: 1,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      ".title-cocktail",
      { opacity: 0, yPercent: 100 },
      { yPercent: 0, opacity: 100, ease: "power1.inOut" }
    );
    gsap.fromTo(
      ".details-cocktail",
      { opacity: 0, yPercent: 100 },
      { yPercent: 0, opacity: 100, ease: "power1.inOut" }
    );
  }, [activeCocktailIndex]);

  const goToSlide = (index: number) => {
    const newIndex = (index + allCocktails.length) % allCocktails.length;
    setActiveCockTailIndex(newIndex);
  };
  const currentCocktail = allCocktails[activeCocktailIndex];
  return (
    <section
      id="menu"
      className=" relative w-full md:mt-30 mt-0 2xl:px-0 px-5 py-10 radial-gradient"
      aria-labelledby="menu-heading"
    >
      <Image
        src={"/images/slider-left-leaf.png"}
        alt="slider-left-leaf"
        className="object-contain absolute -bottom-50 left-0 md:w-fit w-1/3"
        id="left-leaf"
        width={300}
        height={300}
      />
      <Image
        src={"/images/slider-right-leaf.png"}
        alt="slider-right-leaf"
        className="object-contain absolute -top-40 right-0 md:w-fit w-1/4"
        id="right-leaf"
        width={300}
        height={300}
      />
      <h2 id="menu-heading" className="sr-only">
        Cocktail menu
      </h2>
      <nav
        className="grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-10 sm:mb-32 mb-20 relative z-10 md:max-w-6xl md:mx-auto"
        aria-label="CockTail Navigation"
      >
        {allCocktails.map((cocktail, index) => {
          const isActive = index === activeCocktailIndex;
          return (
            <button
              onClick={() => {
                goToSlide(index);
              }}
              key={cocktail.id}
              className={`md:text-3xl text-xl pb-2 cursor-pointer hover:text-yellow hover:border-yellow border-b transition-colors font-modern-negra
                ${
                  isActive
                    ? "text-white border-white"
                    : "text-white/50 border-white/50"
                }`}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>
      <section className="flex flex-col justify-between items-center container mx-auto relative">
        <div className="flex items-center justify-between w-full absolute ">
          <button
            className="text-left text-white hover:text-yellow cursor-pointer transition-colors max-w-36 flex gap-2 justify-start items-center"
            onClick={() => goToSlide(activeCocktailIndex - 1)}
          >
            <ArrowLeft />
            <span className=" gap-2 justify-center items-center text-3xl font-modern-negra leading-none hidden md:flex">
              {allCocktails?.[activeCocktailIndex - 1]?.name ??
                allCocktails?.[allCocktails.length - 1]?.name}
            </span>
          </button>
          <button
            className="text-right text-white hover:text-yellow cursor-pointer transition-colors max-w-36 flex gap-2 justify-end items-center"
            onClick={() => goToSlide(activeCocktailIndex - 1)}
          >
            <span className="gap-2 justify-center items-center text-3xl font-modern-negra leading-none hidden md:flex">
              {allCocktails?.[activeCocktailIndex + 1]?.name ??
                allCocktails?.[0]?.name}
            </span>
            <ArrowRight />
          </button>
        </div>
        <div className="flex justify-center items-center relative ">
          <Image
            src={currentCocktail.image}
            className="object-contain h-auto cocktail-image"
            alt="current-cocktail"
            height={800}
            width={300}
          />
        </div>
        <div className="flex max-md:flex-col gap-10 md:items-center justify-between w-full lg:absolute bottom-5">
          <div ref={contentRef} className="space-y-4 lg:translate-y-10">
            <p>Recipe For:</p>
            <p
              id="title"
              className="font-modern-negra md:text-6xl text-3xl text-yellow max-w-40"
            >
              {currentCocktail.name}
            </p>
          </div>

          <div className="space-y-5 md:max-w-md text-left">
            <h2
              className={`md:text-4xl text-2xl ${dm_serif_text.className} title-cocktail`}
            >
              {currentCocktail.title}
            </h2>
            <p className="md:text-md pe-5 details-cocktail">
              {currentCocktail.description}
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Carousel;
