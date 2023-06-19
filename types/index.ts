import { Url } from "next/dist/shared/lib/router/router";

export interface InputProps {
  placeholder?: string;
  type: "text" | "number";
  componentStyle?: string;
}

export interface FormProps {
  componentStyle?: string;
}

export interface ButtonProps {
  value: string;
  to: Url;
  componentStyle?: string;
}
