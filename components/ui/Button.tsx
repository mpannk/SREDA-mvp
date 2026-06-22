import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "default" | "ghost";
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = "default",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full transition-opacity disabled:opacity-50";

  const variants = {
    default: "bg-sreda-red text-sreda-white text-body-medium-16 px-6 py-4",
    ghost: "bg-transparent text-sreda-black text-body-medium-16 px-4 py-2",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
