import type { ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export function Container({ className = "", children }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 md:px-8 xl:px-12 ${className}`.trim()}>
      {children}
    </div>
  );
}
