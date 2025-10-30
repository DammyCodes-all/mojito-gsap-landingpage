import { Hero } from "@/components/Hero";
import { About } from "@/components/about";
import Carousel from "@/components/Carousel";
import { Cocktails } from "@/components/cocktails";
import Art from "@/components/Art";

const Page = () => {
  return (
    <div className="overflow-x-hidden w-full overflow-y-hidden">
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Carousel />
    </div>
  );
};

export default Page;
