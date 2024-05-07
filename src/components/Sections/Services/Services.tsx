"use client";

import { useState } from "react";
import { useScopedI18n } from "@/locales/client";
import Image from "next/image";
import Icon, { IconName } from "../../Icon/Icon";
import Accordion from "../../Accordion/Accordion";
import useWindowSize from "@/hooks/useWindowSize";
import design from "/public/images/accordion/design.jpg";
import frontend from "/public/images/accordion/frontend.jpg";
import backend from "/public/images/accordion/backend.jpg";
import maintanance from "/public/images/accordion/maintanance.jpg";

interface ServiceItems {
  id: number;
  text: string;
  icon: IconName;
  description: string[];
  extra?: React.ReactNode;
}

export default function Services({
  showExtra = false,
}: {
  showExtra?: boolean;
}) {
  const [selected, setSelected] = useState<number>(0);

  const { width } = useWindowSize();
  const largeScreen = width && width > 1024;

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
      extra: (
        <Image
          className="w-full h-full object-cover"
          src={design}
          alt="design"
          placeholder="blur"
        />
      ),
    },
    {
      id: 2,
      text: scopedServicesT("frontend"),
      icon: "page",
      description: [
        scopedServicesContentT("frontend1"),
        scopedServicesContentT("frontend2"),
      ],
      extra: (
        <Image
          className="w-full h-full object-cover"
          src={frontend}
          alt="frontend"
          placeholder="blur"
        />
      ),
    },
    {
      id: 3,
      text: scopedServicesT("backend"),
      icon: "data",
      description: [
        scopedServicesContentT("backend1"),
        scopedServicesContentT("backend2"),
      ],
      extra: (
        <Image
          className="w-full h-full object-cover"
          src={backend}
          alt="backend"
          placeholder="blur"
        />
      ),
    },
    {
      id: 4,
      text: scopedServicesT("maintanance"),
      icon: "message",
      description: [scopedServicesContentT("maintanance")],
      extra: (
        <Image
          className="w-full h-full object-cover"
          src={maintanance}
          alt="maintanance"
          placeholder="blur"
        />
      ),
    },
  ];

  return (
    <div className={`${showExtra && largeScreen ? "grid grid-cols-2" : ""}`}>
      <div>
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
      </div>
      {showExtra && largeScreen && (
        <div className="bg-dark text-light center select-none">
          {selected ? (
            <div className="relative w-full h-full">
              {items[selected - 1].extra}
              <div className="absolute top-0 left-0 w-full h-full bg-primary/50" />
            </div>
          ) : (
            <Icon name="chevronLeft" />
          )}
        </div>
      )}
    </div>
  );
}
