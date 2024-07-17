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
    <div>
      <p>{image.src}</p>
      <p>{image.alt}</p>
      <p>{children}</p>
    </div>
  );
}

Header.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.element,
};

export default Header;
