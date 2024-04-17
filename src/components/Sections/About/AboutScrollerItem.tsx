import Text from "@/components/Text/Text";

interface Props {
  title: string;
  descripton: string;
}

export default function AboutScrollerItem({ title, descripton }: Props) {
  return (
    <div className="w-[500px] h-full flex items-center flex-col gap-4 text-center p-10">
      <Text
        as="h3"
        type="expandedBold"
        className="text-4xl text-primaryDark uppercase"
      >
        {title}
      </Text>
      <Text className="text-2xl text-primaryLight">{descripton}</Text>
    </div>
  );
}
