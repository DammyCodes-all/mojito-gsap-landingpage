import { Hero } from "@/components/Hero";
import { Cocktails } from "@/components/cocktails";

const Page = () => {
  return (
    <div className="overflow-x-hidden w-full ">
      <Hero />
      <Cocktails />
      <div className="h-dvh"></div>
    </div>
  );
};

export default Page;
