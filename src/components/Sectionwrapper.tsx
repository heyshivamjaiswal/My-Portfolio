import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  size?: "normal" | "narrow";
};

export default function SectionWrapper({
  children,
  className = "",
  id,
  size = "normal",
}: Props) {
  return (
    <section
      id={id}
      className={`py-24 md:py-32 ${className}`}
    >
      <div
        className={`mx-auto px-6 ${
          size === "narrow" ? "max-w-3xl" : "max-w-7xl"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
