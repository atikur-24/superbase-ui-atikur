"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "border-border min-h-25 rounded-lg border bg-white p-6 shadow-[0_4px_16px_0_rgba(7,0,18,0.08)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
