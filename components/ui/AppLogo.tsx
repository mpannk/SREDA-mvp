interface AppLogoProps {
  variant?: "black" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { width: 72, height: 18, fontSize: 14 },
  md: { width: 96, height: 24, fontSize: 18 },
  lg: { width: 120, height: 30, fontSize: 22 },
};

export function AppLogo({
  variant = "black",
  size = "md",
  className = "",
}: AppLogoProps) {
  const { width, height, fontSize } = sizeMap[size];
  const fill = variant === "white" ? "#FFFFFF" : "#000000";

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="SREDA"
      role="img"
    >
      <text
        x="0"
        y="24"
        fill={fill}
        style={{
          fontFamily: "var(--font-heading)",
          fontSize,
          fontWeight: 900,
          letterSpacing: "0.02em",
        }}
      >
        SREDA
      </text>
    </svg>
  );
}
