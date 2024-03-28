import Icon, { IconName } from "../Icon/Icon";
import Text from "../Text/Text";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactElement | string;
  withIcon?: boolean;
  icon?: IconName;
}

const DoubleButton: React.FC<Props> = ({
  className,
  children,
  withIcon,
  icon = "chevronRight",
  ...props
}) => {
  return (
    <button className="center w-full group" {...props}>
      {withIcon && (
        <div
          className={`rounded-2xl px-4 py-3 transition-all opacity-100 w-12 aspect-square group-hover:w-0
          group-hover:p-0 group-hover:opacity-0 duration-500 ${
            className ?? ""
          }`}
        >
          <Icon name={icon} />
        </div>
      )}
      <div
        className={`rounded-2xl px-4 mx-[1px] py-3 center transition-all duration-500 w-full ${
          className ?? ""
        }`}
      >
        <Text type="expandedBold" className="uppercase">
          {children}
        </Text>
      </div>
      {withIcon && (
        <div
          className={`rounded-2xl group-hover:px-4 group-hover:py-3 transition-all group-hover:opacity-100
          w-0 aspect-square group-hover:w-12 p-0 opacity-0 duration-500 text-[2px] ${
            className ?? ""
          }`}
        >
          <Icon name={icon} />
        </div>
      )}
    </button>
  );
};

export default DoubleButton;
