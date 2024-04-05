import Text from "../Text/Text";
import Marquee from "react-fast-marquee";

const Showcase = () => {
  const TestContent = () => {
    return [1200, 500, 800, 700, 500].map((width: number, index: number) => {
      const widthStyle = `w-[${width}px]`;

      return (
        <Text
          key={index}
          as="div"
          type="expanded"
          className={`text-white flex flex-col center text-5xl mr-5 bg-primaryDark/20 p-10 text-center h-screen ${widthStyle}`}
        >
          <p>IMAGE</p>
          <p className="text-sm">{widthStyle}</p>
        </Text>
      );
    });
  };

  return (
    <aside className="sticky top-0 bottom-0 w-full h-screen bg-dark grid grid-cols-1 py-[70px] px-10 gap-5 select-none">
      <Marquee
        autoFill
        direction="left"
        speed={20}
        loop={0}
        className="w-full overflow-y-hidden"
      >
        <TestContent />
      </Marquee>

      <Marquee
        autoFill
        direction="right"
        speed={20}
        loop={0}
        className="w-full overflow-y-hidden"
      >
        <TestContent />
      </Marquee>
    </aside>
  );
};

export default Showcase;
