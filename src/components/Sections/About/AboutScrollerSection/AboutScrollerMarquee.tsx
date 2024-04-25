import Text from "@/components/Text/Text";
import Marquee from "react-fast-marquee";

interface Props {
  children?: React.ReactNode;
  sections: {
    title: string;
    descripton: string;
  }[];
  direction?: "left" | "right" | "up" | "down";
  speed?: number;
  first?: boolean;
}

const AboutScrollerMarquee = ({
  sections,
  direction = "left",
  speed = 30,
  children,
  first,
}: Props) => {
  return (
    <Marquee autoFill direction={direction} speed={speed} loop={0}>
      <div className="flex">
        {children && first && (
          <div className="mr-10 rounded-2xl w-[240px] flex flex-col h-fill center bg-primaryDark/10 m-5">
            <Text className="text-xs sm:text-2xl text-dark">{children}</Text>
          </div>
        )}
        {sections.map(({ title, descripton }, index) => (
          <div
            key={index}
            className="p-10 mr-10 rounded-2xl flex flex-col h-full max-w-72 sm:max-w-96"
          >
            <Text
              as="h3"
              type="expandedBold"
              className="text-sm sm:text-4xl text-dark uppercase pb-2 rounded-2xl w-full text-left"
            >
              {title}
            </Text>
            <Text className="text-xs sm:text-2xl text-dark">{descripton}</Text>
          </div>
        ))}
        {children && !first && (
          <div className="mr-10 rounded-2xl w-[240px] flex flex-col h-fill center bg-primaryDark/10 m-5">
            <Text className="text-xs sm:text-2xl text-dark">{children}</Text>
          </div>
        )}
      </div>
    </Marquee>
  );
};

export default AboutScrollerMarquee;
