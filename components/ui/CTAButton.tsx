import Link from "next/link";
import { ReactNode } from "react";

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

export function CTAButton({ href, onClick, children, className = "" }: CTAButtonProps) {
  const baseClass = `inline-flex h-[52px] w-[250px] items-center justify-center rounded-full bg-sreda-red text-body-medium-16 text-sreda-white shadow-[0_12px_24px_rgba(228,2,16,0.18)] ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClass}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClass}>
      {children}
    </button>
  );
}
