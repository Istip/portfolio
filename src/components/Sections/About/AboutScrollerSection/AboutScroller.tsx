import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AboutScrollerItem from "./AboutScrollerItem";
import Icon from "@/components/Icon/Icon";
import FreeTime from "./FreeTime";

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
        <div className="absolute top-1/2 left-0 bottom-1/2 my-auto">
          <div className="p-0.5 center ml-2 rounded-full bg-light text-dark border border-dark opacity-50">
            <Icon name="arrowDown" />
          </div>
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
