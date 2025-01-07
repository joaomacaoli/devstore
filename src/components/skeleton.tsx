import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export default function Skeleton({ className, ...props }: ComponentProps<'section'>) {
  return (
    <section
      className={twMerge("bg-zinc-50/10 animate-pulse rounded-md", className)}
      {...props}
    />
  )
}
