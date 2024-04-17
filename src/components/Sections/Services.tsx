"use client";

import { useState } from "react";
import Accordion from "../Accordion/Accordion";
import { IconName } from "../Icon/Icon";
import { useScopedI18n } from "@/locales/client";

interface ServiceItems {
  id: number;
  text: string;
  icon: IconName;
  description: string[];
}

export default function Services() {
  const [selected, setSelected] = useState<number | boolean>(false);

  const scopedServicesT = useScopedI18n("services");
  const scopedServicesContentT = useScopedI18n("servicesContent");

  const items: ServiceItems[] = [
    {
      id: 1,
      text: scopedServicesT("design"),
      icon: "design",
      description: [
        scopedServicesContentT("design1"),
        scopedServicesContentT("design2"),
      ],
    },
    {
      id: 2,
      text: scopedServicesT("frontend"),
      icon: "page",
      description: [
        scopedServicesContentT("frontend1"),
        scopedServicesContentT("frontend2"),
      ],
    },
    {
      id: 3,
      text: scopedServicesT("backend"),
      icon: "data",
      description: [
        scopedServicesContentT("backend1"),
        scopedServicesContentT("backend2"),
      ],
    },
    {
      id: 4,
      text: scopedServicesT("maintanance"),
      icon: "message",
      description: [scopedServicesContentT("maintanance")],
    },
  ];

  return (
    <>
      {items.map((item) => (
        <Accordion
          key={item.id}
          text={item.text}
          id={item.id}
          icon={item.icon}
          selected={selected}
          setSelected={setSelected}
        >
          {item.description.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </Accordion>
      ))}
    </>
  );
}
