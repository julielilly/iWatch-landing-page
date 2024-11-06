"use client";
import { useState } from "react";

import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="col-start-1 my-10">
      <h1 className="text-2xl mb-2">FAQs</h1>
      <AccordionItem index={1} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <AccordionItem index={2} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <AccordionItem index={3} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </section>
  );
};

export default Accordion;
