import {
  expandedExtraLight,
  expandedLight,
  expandedRegular,
  expandedBold,
  expandedBlack,
  mona,
} from "@/utils/fonts";

interface Props {
  title?: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode | string;
  type?:
    | "expandedExtraLight"
    | "expandedLight"
    | "expandedBold"
    | "expandedBlack"
    | "expanded"
    | "mona";
}

interface Font {
  className: string;
  style: {
    fontFamily: string;
    fontWeight?: number;
    fontStyle?: string;
  };
}

const Text: React.FC<Props> = ({ as, children, className, type, ...props }) => {
  const Wrapper = as || ("p" as any);
  let selectedFont: Font;

  switch (type) {
    case "mona":
      selectedFont = mona;
      break;
    case "expandedExtraLight":
      selectedFont = expandedExtraLight;
      break;
    case "expandedLight":
      selectedFont = expandedLight;
      break;
    case "expanded":
      selectedFont = expandedRegular;
      break;
    case "expandedBold":
      selectedFont = expandedBold;
      break;
    case "expandedBlack":
      selectedFont = expandedBlack;
      break;
    default:
      selectedFont = mona;
  }

  return (
    <Wrapper
      className={`${className ? className : ""} ${selectedFont.className}`}
      title={props.title}
      {...props}
    >
      {children}
    </Wrapper>
  );
};

export default Text;
