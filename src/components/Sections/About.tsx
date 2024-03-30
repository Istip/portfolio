import Text from "../Text/Text";
import AboutScroller from "./AboutScroller";

export default function About() {
  return (
    <div>
      <Text className="text-2xl">
        I am a creative developer with years of experience in building products
        and appealing web experiences. I have collaborated with individuals and
        teams to build experiences for SMEs and large enterprises including
        Wise, Google, Interswitch and Intelia.
      </Text>

      <Text type="expanded" className="text-5xl my-5">
        i develop
      </Text>

      <div className="grid grid-cols-2 gap-10">
        <div className="w-full h-64 bg-primaryDark rounded-2xl" />
        <div className="w-full h-64 bg-primaryDark rounded-2xl" />
      </div>

      <AboutScroller />
    </div>
  );
}
