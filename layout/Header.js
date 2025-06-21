"use client";

import Link from "next/link";
import { useEffect } from "react";
import Nav from "./Nav";

const Header = ({ header }) => {
  switch (header) {
    case 1:
      return <Header1 />;

    case 2:
      return <Header2 />;

    default:
      return <DefaultHeader />;
  }
};
export default Header;

const DefaultHeader = () => {
  return (
    <div className="mil-top-panel mil-tp-2 mil-tp-inner">
      <div className="mil-tp-frame">
        <Link legacyBehavior href="/">
          {/* <a className="mil-logo">
            <img src="/img/logo.png" alt="logo" />
          </a> */}
          <h3 className="mil-logo">SB</h3>
        </Link>
        <Nav />
      </div>
      <div className="mil-social">
      <ul>
          {/* <li>
            <a
              href="https://facebook.com"
              target="_blank"
              className="social-icon"
            >
              <i className="fab fa-facebook" />
            </a>
          </li> */}
          {/* <li>
            <a
              href="https://instagram.com"
              target="_blank"
              className="social-icon"
            >
              <i className="fab fa-instagram" />
            </a>
          </li> */}
          <li>
            <a
              href="https://linkedin.com/in/shubham-bhatt-06a137203/"
              target="_blank"
              className="social-icon"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Shubhambhatt22"
              target="_blank"
              className="social-icon"
            >
              <i className="fab fa-github" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
const Header1 = () => {
  return (
    <div className="mil-top-panel mil-tp-2">
      <div className="mil-tp-frame">
        <Link legacyBehavior href="/">
          {/* <a className="mil-logo">
            <img src="/img/logo.png" alt="logo" />
          </a> */}

          <h3 className="mil-logo">SB</h3>
        </Link>
        <Nav />
      </div>
      <div className="mil-social">
        <ul>
          {/* <li>
            <a
              href="https://facebook.com"
              target="_blank"
              className="social-icon"
            >
              <i className="fab fa-facebook" />
            </a>
          </li> */}
          {/* <li>
            <a
              href="https://instagram.com"
              target="_blank"
              className="social-icon"
            >
              <i className="fab fa-instagram" />
            </a>
          </li> */}
          <li>
            <a
              href="https://linkedin.com/in/shubham-bhatt-06a137203/"
              target="_blank"
              className="social-icon"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Shubhambhatt22"
              target="_blank"
              className="social-icon"
            >
              <i className="fab fa-github" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
const Header2 = () => {
  return (
    <div className="mil-top-panel">
      <Link legacyBehavior href="/">
        {/* <a className="mil-logo">
          <img src="/img/logo.png" alt="logo" />
        </a> */}
        <h3 className="mil-logo">SB</h3>
      </Link>
      <Nav />
    </div>
  );
};
