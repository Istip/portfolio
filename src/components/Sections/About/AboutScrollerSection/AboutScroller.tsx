import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AboutScrollerItem from "./AboutScrollerItem";
import FreeTime from "./FreeTime";
import Text from "@/components/Text/Text";

interface Props {
  sections: { title: string; descripton: string }[];
}

const AboutScroller = ({ sections }: Props) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["40%", "-80%"]);

  return (
    <div ref={targetRef} className="relative h-[300vh] rounded-2xl">
      <FreeTime />
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute z-10 top-1/2 left-1/2 bottom-1/2 my-auto">
          <Text
            as="div"
            className="p-0.5 center ml-2 rounded-full text-red-500 text-5xl"
          >
            +
          </Text>
        </div>
        <motion.div className="center gap-40 mb-20" style={{ x }}>
          {sections.map(({ title, descripton }, i) => (
            <AboutScrollerItem key={i} title={title} descripton={descripton} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default AboutScroller;
