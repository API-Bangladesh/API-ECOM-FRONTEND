import { useRef, Fragment } from "react";
import { AiOutlineBars } from "react-icons/ai";
import Link from "next/link";
import NavDropdown from "react-bootstrap/NavDropdown";

function Overlay() {
  const overlayRef = useRef();

  const openSearch = () => {
    overlayRef.current.style.width = "100%";
  };

  const closeSearch = () => {
    overlayRef.current.style.width = "0%";
  };

  return (
    <Fragment>
      <div className="main">
        <button onClick={openSearch} className="open-button">
          <AiOutlineBars className="font-30 overlay-icon me-4" />
        </button>
      </div>

      <div ref={overlayRef} className="overlay">
        <button className="close-button" onClick={closeSearch}>
          &times;
        </button>
        <div className="overlay-content text-uppercase font-24 fw-semibold">
          <ul className="lh-lg font-20">
            <li>
              <Link
                href="/"
                onClick={closeSearch}
                className="overlay-content-itema"
              >
                home
              </Link>
            </li>

            <li>
              <Link
                href="/company-profile"
                onClick={closeSearch}
                className="overlay-content-itema"
              >
                about us
              </Link>
            </li>
            <li>
              <Link
                href="/delivery-information"
                onClick={closeSearch}
                className="overlay-content-itema"
              >
                delivery information
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={closeSearch}
                className="overlay-content-itema"
              >
                contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default Overlay;
