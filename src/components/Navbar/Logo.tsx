import Text from "../Text/Text";

const Logo = () => (
  <div className="center gap-2 text-dark">
    <div className="relative">
      <div className="w-4 aspect-square rounded-full bg-primary animate-ping" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3 aspect-square rounded-full bg-primary" />
      </div>
    </div>
    <Text type="expanded">isti</Text>
  </div>
);

export default Logo;
