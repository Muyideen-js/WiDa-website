import Image from "next/image";
import { FloatingNavDemo } from "./nav";
import { GlobeDemo } from "./Globe";
import { TextGenerateEffectDemo } from "./TextGeneration";
import Button from "../components/ui/Button";
import { TracingBeam } from "../components/ui/TracingBeam";
import { CourseCard } from "@/components/CourseCard";
import { InfiniteMovingCardsDemo } from "./MovingCards";

export default function Home() {
  return (
    <div className="bg-black h-auto mx-5 relative">
      <TracingBeam />
      <nav>
        <FloatingNavDemo />
      </nav>
      <div className="flex flex-row justify-between mx-20 mt-0 items-center">
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Data is the future and the future is NOW!
          </h1>
          <TextGenerateEffectDemo />
          <Button>Contact Us</Button>
        </div>
        <div className="flex-1 flex justify-center mt-[-50px] w-full h-full">
          <div className="w-full h-full">
            <GlobeDemo />
          </div>
        </div>
      </div>

      {/* Register Course */}
      <div>
          <CourseCard />
      </div>
      <div className="mt-10">
            <InfiniteMovingCardsDemo />
      </div>
    </div>
  );
}
