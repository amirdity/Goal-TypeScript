import { ReactNode } from "react";
import PropTypes from "prop-types";
interface Head {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
}
function Header({ image, children }: Head) {
  return (
    <header>
      <img
        // src={image.src} alt={image.alt}
        {...image}
      />
      <p>{image.alt}</p>
      <p>{children}</p>
    </header>
  );
}

Header.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.element,
};

export default Header;
