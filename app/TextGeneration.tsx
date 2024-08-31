"use client";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const words = `  Dive into our comprehensive suite of tools designed to help you
  uncover valuable insights,
   visualize trends, and make informed decisions. Whether
  you're a novice or an expert, our platform provides intuitive features and robust
  functionality to support your data exploration journey. Join our community of data enthusiasts today and
  embark on a voyage of discovery with us!
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect duration={2} filter={false} words={words} className="text-xm font-medium" />;
}

