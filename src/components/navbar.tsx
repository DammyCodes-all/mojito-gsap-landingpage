"use client";
import { navLinks } from "@/constants";
import { dm_serif_text, monaSans } from "@/lib/fonts";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import gsap from "gsap";
import { useRef } from "react";
const Navbar = () => {
  const navref = useRef<HTMLElement | null>(null);
  useGSAP(() => {
    if (navref.current) {
      const navTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: navref.current,
          start: "bottom top",
          scrub: true,
        },
      });
      navTimeline.fromTo(
        navref.current,
        {
          backgroundColor: "transparent",
        },
        {
          backgroundColor: "#00000050",
          // position: "fixed",
          backgroundFilter: "blur(10px)",
          duration: 1,
          ease: "power1.inOut",
        }
      );
    }
  }, []);
  return (
    <nav
      className="flex justify-between w-full md:px-17 sm:px-8  px-2 fixed py-4 gap-3 md:py-5 flex-col md:flex-row items-center z-50"
      ref={navref}
    >
      <section
        className={`${dm_serif_text.className} antialiased flex justify-center items-center gap-1 `}
      >
        <Image
          src={"/images/logo.png"}
          alt="Velvet Pour Logo"
          width={32}
          height={32}
        />
        Velvet Pour
      </section>
      <section
        className={`${monaSans.className} antialiased flex gap-8 justify-center items-center md:gap-13 list-none text-xs sm:text-[13.5px]`}
      >
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </section>
    </nav>
  );
};

export default Navbar;
