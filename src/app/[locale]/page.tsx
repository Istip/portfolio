import { Fragment } from "react";
import Hero from "@/components/Hero/Hero";
import Section from "@/components/Sections/Section";
import Text from "@/components/Text/Text";

export default function Home() {
  return (
    <>
      <div className="md:px-[50px] px-5 py-9">
        <Hero />
      </div>
      <Section
        number="01"
        title="About me"
        colors={["text-primaryDark", "text-dark"]}
        bg="bg-primary"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <Fragment key={i}>
            <Text as="h1" className="text-2xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              non ab consequuntur, reiciendis saepe magni hic asperiores dicta
              perspiciatis placeat voluptatum quisquam doloremque delectus
              repudiandae, pariatur dolorem ducimus tempora distinctio!
            </Text>
            <br />
          </Fragment>
        ))}
      </Section>
    </>
  );
}
