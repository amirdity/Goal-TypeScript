import { type ReactNode } from "react";

interface Image {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
}

export default function Header({ image,children }: Image) {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
}
