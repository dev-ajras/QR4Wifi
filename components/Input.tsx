import { InputProps } from "@/types";

export function Input({
  placeholder,
  type,
  componentStyle,
  value,
}: InputProps) {
  return (
    <input
      onChange={(e: any) => {
        value(e.target.value);
      }}
      type={type}
      placeholder={placeholder}
      className={`custom-input ${componentStyle} `}
    />
  );
}
