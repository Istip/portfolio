export default function Logo({ className }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <svg
        width="34"
        height="24"
        viewBox="0 0 34 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 12C0 0.8 0 0 12 0C24 0 24 0 24 12C24 24 24 24 12 24C0 24 0 24 0 12Z"
          fill="currentColor"
        />
        <path
          d="M26 12C26 2 27 0 30 0C33 0 34 2 34 12C34 22 33 24 30 24C27 24 26 22 26 12Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
