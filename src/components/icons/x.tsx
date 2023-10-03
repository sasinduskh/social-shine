export default function XIcon({ className }: { className?: string }) {
  return (
    <svg
      data-testid="geist-icon"
      height="16"
      stroke-linecap="round"
      stroke-linejoin="round"
      viewBox="0 0 16 16"
      width="16"
      aria-label=""
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
