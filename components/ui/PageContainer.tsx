import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export function PageContainer({ children, className = "" }: PageContainerProps) {
  return (
    <div className="flex min-h-screen w-full justify-center bg-[#f5f5f5]">
      <div
        className={`relative mx-auto flex min-h-screen w-full max-w-[430px] flex-col overflow-hidden bg-sreda-white ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
