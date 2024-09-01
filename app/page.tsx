import Image from "next/image";
import { FloatingNavDemo } from "./nav";
import { GlobeDemo } from "./Globe";
import { TextGenerateEffectDemo } from "./TextGeneration";
import Button from "../components/ui/Button";
import { TracingBeam } from "../components/ui/TracingBeam";
import { CourseCard } from "@/components/CourseCard";
import { InfiniteMovingCardsDemo } from "./MovingCards";
import ceo from "../public/ceo.jpg";
import Secceo from "../public/ceo1.jpg";
import Accordions from "@/components/Accordion";
import Link from "next/link";

export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-black h-auto relative w-full">
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
      <h1 className="text-center pb-20 text-4xl font-bold text-white">
        Connect with our stack
      </h1>
      <div className="flex flex-row justify-evenly items-center">
        <div className="text-center">
          <Image
            src={ceo}
            alt="CEO Pics"
            className="rounded-full"
            width={200}
            height={200}
          />
          <h1 className="font-extrabold text-2xl text-white">Ibrahim Muiz</h1>
          <p className="text-sm text-white">Co-founder of WiDa</p>
          <Button>Connect</Button>
        </div>
        <div className="text-center">
          <Image
            src={Secceo}
            alt="CEO Pics"
            className="rounded-full"
            width={200}
            height={200}
          />
          <h1 className="font-extrabold text-2xl text-white">Yusuf Mustapha</h1>
          <p className="sm text-white">Founder of WiDa</p>
          <Button>Connect</Button>
        </div>
      </div>
      <div className="flex flex-row mx-20">
        <div className="text-center m-auto">
          {/* <h1 className="text-4xl text-white text-center py-20">FREQUENTLY ASK QUESTION (F.A.Q)</h1> */}
        </div>
        <div>
          {/* <Accordions /> */}
        </div>
      </div>
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto flex justify-between">
          <div>
            <h2 className="text-lg font-bold">LearnWithWiDa</h2>
            <ul>
              <li>
                <Link href="/about" className="text-sm hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold">Follow Us</h2>
            <div className="flex space-x-4">
              <Link href="#">
                <Image
                  src="/icons/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="hover:opacity-75"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/icons/twitter.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                  className="hover:opacity-75"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="hover:opacity-75"
                />
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold">Newsletter</h2>
            <p className="text-sm">
              Subscribe to our newsletter for the latest updates.
            </p>
            <input
              type="email"
              placeholder="Your email"
              className="mt-2 p-2 rounded text-black"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
        <div className="container mx-auto text-center mt-10">
          <p className="text-sm">&copy; {currentYear} WiDa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
