import { Url } from "next/dist/shared/lib/router/router";

export interface InputProps {
  placeholder?: string;
  type: "text" | "number";
  componentStyle?: string;
  value: any;
}

export interface FormProps {
  componentStyle?: string;
}

export interface ButtonProps {
  work: any;
  value: string;
  componentStyle?: string;
}
