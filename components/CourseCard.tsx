import React from "react";
import ImageOne from "../public/Img1.jpeg";
import ImageTwo from "../public/Img2.jpeg";
import ImageThree from "../public/Img3.jpeg";
import Image from "next/image";
import Button from "./ui/Button";

export const CourseCard = () => {
  return (
    <div className="mx-5 md:mx-20 my-10 pt-10">
      <h1 className="text-center font-extrabold text-2xl md:text-3xl mb-10 text-white">
        Courses
      </h1>

      {/* First Course Section */}
      <div className="flex flex-col md:flex-row gap-y-5 md:gap-x-[70px]">
        <div className="w-full md:w-1/2 h-64 md:h-80 rounded-md overflow-hidden flex items-center justify-center">
          <Image src={ImageOne} alt="Lesson Image" className="object-cover w-full h-full" />
        </div>
        <div className="w-full md:w-1/2 mt-5 md:mt-0 text-white">
          <h3 className="text-lg md:text-xl font-bold">Data Science</h3>
          <h4 className="text-base md:text-lg font-semibold mb-2">Beginners - Intermediate</h4>
          <ul className="mb-2">
            <li>Virtual - ₦100,000 | ₦80,000</li>
            <li>Physical - ₦150,000 | ₦100,000</li>
          </ul>
          <p className="mb-2">The course covers a wide range of topics, including:</p>
          <ul className="mb-2 list-disc list-inside">
            <li>Data Analysis with Microsoft Excel and SQL</li>
            <li>Data Science with Python</li>
            <li>Data Presentation with PowerPoint</li>
            <li>Introduction to Python libraries</li>
            <li>Statistical Analysis</li>
          </ul>
          <a href="https://docs.google.com/forms/u/0/d/e/1FAIpQLSf17poTgjlydSQanMkfp619vNpK7Fwb7cKdfdg5899Izdl3Ag/viewform?pli=1">
            <Button>REGISTER | READ MORE</Button>
          </a>
        </div>
      </div>

      {/* Second Course Section */}
      <div className="flex mt-10 md:mt-20 flex-col  gap-y-5 md:flex-row-reverse md:gap-x-[70px]">
        <div className="w-full md:w-1/2 h-64 md:h-80 rounded-md overflow-hidden flex items-center justify-center">
          <Image src={ImageTwo} alt="Lesson Image" className="object-cover w-full h-full" />
        </div>
        <div className="w-full md:w-1/2 mt-5 md:mt-0 text-white">
          <h3 className="text-lg md:text-xl font-bold">Research Analysis</h3>
          <ul className="mb-2">
            <li>Virtual - ₦80,000 | ₦50,000</li>
            <li>Physical - ₦100,000 | ₦80,000</li>
          </ul>
          <p className="mb-2">This course helps to gain practical understanding of Data Analytics topics, including:</p>
          <ul className="mb-2 list-disc list-inside">
            <li>Introduction to SPSS</li>
            <li>Introduction to R</li>
            <li>Statistical analysis with Excel</li>
          </ul>
          <a href="https://docs.google.com/forms/u/0/d/e/1FAIpQLSf17poTgjlydSQanMkfp619vNpK7Fwb7cKdfdg5899Izdl3Ag/viewform?pli=1">
            <Button>REGISTER | READ MORE</Button>
          </a>
        </div>
      </div>

      {/* Third Course Section */}
      <div className="flex mt-10 md:mt-20 flex-col md:flex-row gap-y-5 md:gap-x-[70px]">
        <div className="w-full md:w-1/2 h-64 md:h-80 rounded-md overflow-hidden flex items-center justify-center">
          <Image src={ImageThree} alt="Lesson Image" className="object-cover w-full h-full" />
        </div>
        <div className="w-full md:w-1/2 mt-5 md:mt-0 text-white">
          <h3 className="text-lg md:text-xl font-bold">Data Analytics</h3>
          <ul className="mb-2">
            <li>Virtual - ₦80,000 | ₦50,000</li>
            <li>Physical - ₦100,000 | ₦80,000</li>
          </ul>
          <p className="mb-2">This course helps to gain practical understanding of Data Analytics topics, including:</p>
          <ul className="mb-2 list-disc list-inside">
            <li>Data Analytics with Microsoft Excel</li>
            <li>Data Analytics with SQL</li>
            <li>Data Analytics with PowerBI</li>
            <li>ETL and resume building</li>
          </ul>
          <a href="https://docs.google.com/forms/u/0/d/e/1FAIpQLSf17poTgjlydSQanMkfp619vNpK7Fwb7cKdfdg5899Izdl3Ag/viewform?pli=1">
            <Button>REGISTER | READ MORE</Button>
          </a>
        </div>
      </div>
    </div>
  );
};
