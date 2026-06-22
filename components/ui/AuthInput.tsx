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
        className={`w-full rounded-xl border border-black/10 bg-sreda-white px-4 py-3 text-body-medium-16 text-sreda-black outline-none placeholder:text-sreda-gray-light focus:border-sreda-red ${className}`}
        {...props}
      />
    </div>
  );
}
