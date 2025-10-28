import { Hero } from "@/components/Hero";
import { About } from "@/components/about";
import { Cocktails } from "@/components/cocktails";

const Page = () => {
  return (
    <div className="overflow-x-hidden w-full ">
      <Hero />
      <Cocktails />
      <About />
      <div className="h-dvh"></div>
    </div>
  );
};

export default Page;
