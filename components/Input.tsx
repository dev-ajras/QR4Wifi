import { InputProps } from "@/types";

export function Input({ placeholder, type, componentStyle }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`custom-input ${componentStyle} `}
    />
  );
}
