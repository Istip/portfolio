"use client";

import { useState } from "react";
import Accordion from "../Accordion/Accordion";

export default function Services() {
  const [selected, setSelected] = useState<number | boolean>(false);

  const items = [
    {
      id: 1,
      text: "design",
      content: "Lorem, ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, quos, illum eaque, voluptatem molestiae aperiam dolores ipsa officiis ullam harum saepe cumque ipsam. Dignissimos incidunt reprehenderit, culpa veniam at nemo!",
    },
    {
      id: 2,
      text: "frontend",
      content: "Lorem, ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, quos, illum eaque, voluptatem molestiae aperiam dolores ipsa officiis ullam harum saepe cumque ipsam. Dignissimos incidunt reprehenderit, culpa veniam at nemo!",
    },
    {
      id: 3,
      text: "backend",
      content: "Lorem, ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, quos, illum eaque, voluptatem molestiae aperiam dolores ipsa officiis ullam harum saepe cumque ipsam. Dignissimos incidunt reprehenderit, culpa veniam at nemo!",
    },
    {
      id: 4,
      text: "maintain",
      content: "Lorem, ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, quos, illum eaque, voluptatem molestiae aperiam dolores ipsa officiis ullam harum saepe cumque ipsam. Dignissimos incidunt reprehenderit, culpa veniam at nemo!",
    },
  ];

  return (
    <>
      {items.map((item) => (
        <Accordion
          key={item.id}
          text={item.text}
          content={item.content}
          id={item.id}
          selected={selected}
          setSelected={setSelected}
        >
          {item.description}
        </Accordion>
      ))}
    </>
  );
}
