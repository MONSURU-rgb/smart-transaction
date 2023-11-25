import { useTheme } from "next-themes";

export function ActivityCharts() {
  const { theme } = useTheme();
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill={theme === "light" ? "none" : undefined}
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.33334 15V5M16.6667 5V15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M16.6667 10C16.6667 11.8417 13.6817 13.3333 10 13.3333C6.31834 13.3333 3.33334 11.8417 3.33334 10M16.6667 15C16.6667 16.8417 13.6817 18.3333 10 18.3333C6.31834 18.3333 3.33334 16.8417 3.33334 15M10 8.33333C13.6817 8.33333 16.6667 6.84166 16.6667 5C16.6667 3.15833 13.6817 1.66666 10 1.66666C6.31834 1.66666 3.33334 3.15833 3.33334 5C3.33334 6.84166 6.31834 8.33333 10 8.33333Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
