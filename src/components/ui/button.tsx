"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "link";
}

export function Button({
  className,
  variant = "default",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none";

  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-[#00AFA6]",
    outline:
      "border border-current bg-transparent hover:bg-white hover:text-[#0E1A2B]",
    link: "bg-transparent p-0 text-primary hover:underline",
  };

  return (
    <button
      className={cn(base, variants[variant], className)}
      {...props}
    />
  );
}
