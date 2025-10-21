import { navLinks } from "@/constants";
import { dm_serif_text, monaSans } from "@/lib/fonts";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="flex justify-between w-full md:px-17 sm:px-8  px-2 py-4 gap-3 md:py-5 flex-col md:flex-row items-center">
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
