type Props = { size?: number; color?: string };

const WebsiteIcon: React.FC<Props> = ({ size, color }) => {
  return (
    <>
      <svg
        width={size ?? 24}
        height={size ?? 24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.5071 21.0083C19.8878 21.0083 21.0071 19.889 21.0071 18.5083V5.5C21.0071 4.11929 19.8878 3 18.5071 3H5.5C4.11929 3 3 4.11929 3 5.5V18.5083C3 19.889 4.11929 21.0083 5.5 21.0083H18.5071ZM20.0071 5.5V7H4V5.5C4 4.67157 4.67157 4 5.5 4H18.5071C19.3355 4 20.0071 4.67157 20.0071 5.5ZM20.0071 8H4V18.5083C4 19.3368 4.67157 20.0083 5.5 20.0083H18.5071C19.3355 20.0083 20.0071 19.3368 20.0071 18.5083V8ZM7 5H8V6H7V5ZM10 5H9V6H10V5ZM6 5H5V6H6V5Z"
          fill={color ?? "currentColor"}
        />
      </svg>
    </>
  );
};

export default WebsiteIcon;
