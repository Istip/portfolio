import Image from "next/image";
import Text from "../Text/Text";

const Hero = () => {
  return (
    <div className="flex flex-col gap-10">
      <Text as="h1" type="expanded" className="text-8xl">
        istvan <br /> pasztor
      </Text>

      <div className="w-full">
        <Image
          src="/images/cover.png"
          width={1600}
          height={800}
          alt="Cover image"
        />
      </div>

      <Text as="h1" type="expanded" className="text-8xl text-right">
        creative <br /> developer
      </Text>
    </div>
  );
};

export default Hero;
