import { ReactNode } from "react";

type HeaderProps = { children: ReactNode; image: { src: string; alt: string } };

function Header({ children, image }: HeaderProps) {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
}

export default Header;
