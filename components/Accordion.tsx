import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const MyAccordion = () => (
  <Accordion type="single" collapsible className="max-w-xl mx-auto">
    <AccordionItem value="item-1" className="w-[200%]">
      <AccordionTrigger className="border w-full border-slate-500 rounded-lg text-white p-4 rounded-t-lg flex items-center justify-between">
        Is it accessible?
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </AccordionTrigger>
      <AccordionContent className="bg-gray-700 text-white p-4 w-full">
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2" className="w-[200%]">
      <AccordionTrigger className="border border-slate-500 rounded-lg text-white p-4 flex items-center justify-between">
        How to style it?
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </AccordionTrigger>
      <AccordionContent className="bg-gray-700 text-white p-4">
        You can style it using Tailwind CSS classes.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3" className="w-[200%]">
      <AccordionTrigger className="border border-slate-500 rounded-lg text-white p-4 rounded-b-lg flex items-center justify-between">
        Is it customizable?
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </AccordionTrigger>
      <AccordionContent className="bg-gray-700 text-white p-4">
        Yes, it is fully customizable.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export default MyAccordion;
