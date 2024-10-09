import Image from "next/image";
import { FloatingNavDemo } from "./nav";
// import { GlobeDemo } from "./Globe";
import { TextGenerateEffectDemo } from "./TextGeneration";
import Button from "../components/ui/Button";
import { TracingBeam } from "../components/ui/TracingBeam";
import { CourseCard } from "@/components/CourseCard";
import { InfiniteMovingCardsDemo } from "./MovingCards";
import ceo from "../public/ceo.jpg";
import Secceo from "../public/ceo1.jpg";
import Link from "next/link";
import Facebook from "../public/facebook.svg";
import Twitter from "../public/x.svg";
import Insta from "../public/instagram.svg";

  const currentYear = new Date().getFullYear();
  function Home(){
  return (
    <div className="bg-black h-auto relative w-full">
      <TracingBeam />
      <nav>
        <FloatingNavDemo />
      </nav>
      <div className="flex md:flex-row flex-col md:justify-between md:mx-20 mx-5 md:mt-0 pt-[150px] items-center">
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Data is the future and the future is NOW!
          </h1>
          <TextGenerateEffectDemo />
          <Button>Contact Us</Button>
        </div>
        <div className="hidden  md:flex-1 md:flex justify-center md:mt-[-50px] mt-5 w-full h-full">
          <div className="w-full h-full">
          {/* <GlobeDemo /> */}
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
        Connect with Us
      </h1>
      <div className="flex flex-col-reverse md:flex-row-reverse justify-evenly items-center">
        <div className="text-center mb-5">
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
        <div className="text-center mb-10">
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
        <div>{/* <Accordions /> */}</div>
      </div>
      <footer className="bg-gray-900 text-white py-10 mt-10">
        <div className="container mx-auto px-5 md:flex md:justify-between">
          {/* About Section */}
          <div className="mb-5 md:mb-0">
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

          {/* Social Media Section */}
          <div className="mb-5 md:mb-0">
            <h2 className="text-lg font-bold">Follow Us</h2>
            <div className="flex space-x-4 mt-2">
              <Link href="#">
                <Image
                  src={Facebook}
                  alt="Facebook"
                  width={40}
                  height={40}
                  className="hover:opacity-75 transition duration-300"
                />
              </Link>
              <Link href="#">
                <Image
                  src={Insta}
                  alt="Instagram"
                  width={40}
                  height={40}
                  className="hover:opacity-75 transition duration-300"
                />
              </Link>
              <Link href="#">
                <Image
                  src={Twitter}
                  alt="Twitter"
                  width={40}
                  height={40}
                  className="hover:opacity-75 transition duration-300"
                />
              </Link>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h2 className="text-lg font-bold">Newsletter</h2>
            <p className="text-sm mt-2">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex flex-col mt-4">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 text-black outline-none rounded-md"
                aria-label="Email for newsletter"
              />
              <Button className="mt-2">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="container mx-auto text-center mt-10">
          <p className="text-sm">
            &copy; {currentYear} WiDa. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home