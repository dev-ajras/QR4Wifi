"use client";
import Link from "next/link";
import { ButtonProps } from "@/types";

export function Button({ value, componentStyle, work }: ButtonProps) {
  return (
    <button className={componentStyle} onClick={work}>
      {value}
    </button>
  );
}
