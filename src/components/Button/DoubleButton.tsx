import Icon, { IconName } from "../Icon/Icon";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactElement;
  left?: boolean;
  icon?: IconName;
}

const DoubleButton: React.FC<Props> = ({
  className,
  children,
  left,
  icon = "chevronRight",
  ...props
}) => {
  return (
    <button
      className={`flex items-center justify-center group rounded-2xl w-full
        `}
      {...props}
    >
      {left && (
        <div
          className={`rounded-2xl px-4 py-3 transition-all opacity-100 flex
          group-hover:p-0 group-hover:opacity-0 duration-500 ${
            className ?? ""
          }`}
        >
          <Icon name={icon} />
        </div>
      )}
      <div
        className={`rounded-2xl px-4 mx-[1px] py-3 flex items-center transition-all duration-500 w-full ${
          className ?? ""
        }`}
      >
        {children}
      </div>
      {left && (
        <div
          className={`rounded-2xl group-hover:px-4 group-hover:py-3 transition-all group-hover:opacity-100 flex
          p-0 opacity-0 duration-500 text-[2px] ${className ?? ""}`}
        >
          <Icon name={icon} />
        </div>
      )}
    </button>
  );
};

export default DoubleButton;
