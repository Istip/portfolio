import Text from "../Text/Text";

export default function Unauthorized() {
  return (
    <Text
      type="expandedLight"
      className="text-5xl text-center h-[calc(100vh-75px)] w-screen center"
    >
      Sorry, you are not authorized to view this page!
    </Text>
  );
}
