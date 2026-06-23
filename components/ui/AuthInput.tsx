import { InputHTMLAttributes } from "react";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function AuthInput({ label, className = "", ...props }: AuthInputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-body-medium-16 text-sreda-black">{label}</label>
      )}
      <input
        className={`h-[45px] w-full rounded-[17px] border-0 bg-sreda-white px-[18px] text-[13px] font-light text-sreda-black outline-none placeholder:text-sreda-gray-caption ${className}`}
        {...props}
      />
    </div>
  );
}
