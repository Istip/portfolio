import React from "react";
import Text from "../Text/Text";
import Marquee from "react-fast-marquee";

const Showcase = () => {
  // random number between 400 and 800
  const randomNumber = () => Math.floor(Math.random() * (800 - 400) + 400);
  const randomWidth = `w-[${randomNumber()}px]`;

  console.log("✅  randomWidth:", randomWidth);

  return (
    <aside className="sticky top-0 bottom-0 w-full h-screen bg-dark grid grid-cols-1 py-[70px] px-10 gap-10 select-none">
      <Marquee
        autoFill
        direction="left"
        speed={20}
        loop={0}
        className="w-full overflow-y-hidden"
      >
        <Text
          as="div"
          type="expanded"
          className="text-white center text-5xl mr-5 bg-primaryDark/20 p-10 h-screen"
        >
          IMAGE
        </Text>
      </Marquee>

      <Marquee
        autoFill
        direction="right"
        speed={20}
        loop={0}
        className="w-full overflow-y-hidden"
      >
        <Text
          as="div"
          type="expanded"
          className="text-white center text-5xl mr-5 bg-primaryDark/20 p-10 h-screen"
        >
          IMAGE
        </Text>
      </Marquee>
    </aside>
  );
};

export default Showcase;
