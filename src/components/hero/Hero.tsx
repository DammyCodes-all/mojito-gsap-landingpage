import Image from "next/image";

export const Hero = () => {
  return (
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
      <h1 className="font-modern-negra text-8xl  md:mt-32 mt-40 md:text-[20vw] leading-none text-center">
        MOJITO
      </h1>
      <Image
        src={"/images/hero-left-leaf.png"}
        width={300}
        height={300}
        alt="hero-left-leaf"
        className="absolute left-0 md:top-20 xl:top-36 2xl:top-52 md:bottom-auto -bottom-20 md:w-fit w-1/3"
      />
      <Image
        src={"/images/hero-right-leaf.png"}
        width={300}
        height={300}
        alt="hero-right-leaf"
        className="absolute right-0 md:bottom-0 xl:top-0 2xl:top-12 top-1/2 md:w-fit w-24"
      />
    </section>
  );
};
