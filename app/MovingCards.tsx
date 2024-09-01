"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Before enrolling in the data analytics program, I was stuck in a job with no growth. This course was a game-changer! The hands-on projects and real-world applications gave me the confidence and skills to switch careers. I'm now working as a Data Analyst at a top tech company, all thanks to the excellent training and support I received.",
    name: "Charles Dickens",
    title: "Data Analyst",
  },
  {
    quote:
      "I started the program with zero knowledge of data analytics and finished with the ability to analyze complex datasets and present my findings confidently. The structured learning path, combined with the practical assignments, accelerated my learning. The school truly transformed me into a data professional, ready to make data-driven decisions in my organization.",
    name: "William Shakespeare",
    title: "Business Analyst",
  },
  {
    quote: "The curriculum is incredibly thorough, covering everything from the basics of Excel to advanced Python programming. The instructors are industry professionals who bring practical insights into the classroom. I appreciated the balance of theory and practice, which prepared me to tackle real-world data challenges effectively.",
    name: "John D.",
    title: "Senior Data Scientist",
  },
  {
    quote:
      "What I loved most about this school was the community. The instructors were always available for guidance, and the small class sizes meant I received personalized attention. The peer support was also amazing—we were all in it together, helping each other grow. I completed the course with a strong network and a portfolio that landed me my first job in analytics.",
    name: "Linda M.",
    title: "Junior Data Analyst",
  },
];
