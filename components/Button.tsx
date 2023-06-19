"use client";
import Link from "next/link";
import { ButtonProps } from "@/types";

export function Button({ value, componentStyle, to }: ButtonProps) {
  return (
    <Link href={to} className={componentStyle}>
      {value}
    </Link>
  );
}
