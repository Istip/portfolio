import React from "react";
import Text from "../Text/Text";

const Showcase = () => {
  return (
    <aside className="sticky top-0 bottom-0 w-full h-screen bg-dark">
      <Text
        as="h1"
        type="expanded"
        className="text-white center h-full text-5xl"
      >
        SHOWCASE
      </Text>
    </aside>
  );
};

export default Showcase;
