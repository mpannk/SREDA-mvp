import Link from "next/link";
import { CSSProperties, ReactNode } from "react";

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function CTAButton({
  href,
  onClick,
  type = "button",
  children,
  className = "",
  style,
}: CTAButtonProps) {
  const baseClass = `inline-flex h-[52px] w-[232px] items-center justify-center rounded-full bg-sreda-red text-center text-body-medium-16 text-sreda-white shadow-[0_12px_24px_rgba(0,0,0,0.18)] ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClass} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClass} style={style}>
      {children}
    </button>
  );
}
