// components/Section.tsx
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`px-6 md:px-16 py-16 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
}
