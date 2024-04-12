"use client";

import { useState } from "react";
import Accordion from "../Accordion/Accordion";
import Icon, { IconName } from "../Icon/Icon";

interface ServiceItems {
  id: number;
  text: string;
  icon: IconName;
  content: string;
  description: string;
}

export default function Services() {
  const [selected, setSelected] = useState<number | boolean>(false);

  const items: ServiceItems[] = [
    {
      id: 1,
      text: "design",
      icon: "design",
      content: "arrowDown",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, quos, illum eaque, voluptatem molestiae aperiam dolores ipsa officiis ullam harum saepe cumque ipsam. Dignissimos incidunt reprehenderit, culpa veniam at nemo!",
    },
    {
      id: 2,
      text: "frontend",
      icon: "page",
      content: "arrowDown",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, quos, illum eaque, voluptatem molestiae aperiam dolores ipsa officiis ullam harum saepe cumque ipsam. Dignissimos incidunt reprehenderit, culpa veniam at nemo!",
    },
    {
      id: 3,
      text: "backend",
      icon: "data",
      content: "arrowDown",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, quos, illum eaque, voluptatem molestiae aperiam dolores ipsa officiis ullam harum saepe cumque ipsam. Dignissimos incidunt reprehenderit, culpa veniam at nemo!",
    },
    {
      id: 4,
      text: "maintanance",
      icon: "message",
      content: "arrowDown",
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
          icon={item.icon}
          selected={selected}
          setSelected={setSelected}
        >
          {item.description}
        </Accordion>
      ))}
    </>
  );
}
