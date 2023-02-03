import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="navigation">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light px-0">
          <Link className="navbar-brand order-1 py-0" href="/">
            <Image
              loading="lazy"
              decoding="async"
              className="logo-img"
              src="/images/logo.png"
              alt="Reporter Hugo"
              width={500}
              height={500}
            />
          </Link>
          <div className="navbar-actions order-3 ml-0 ml-md-4">
            <button
              aria-label="navbar toggler"
              className="navbar-toggler border-0"
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
            >
              {" "}
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <form
            action="#!"
            className="search order-lg-3 order-md-2 order-3 ml-auto"
          >
            <input
              id="search-query"
              name="s"
              type="search"
              placeholder="Search..."
              autoComplete="off"
            />
          </form>
          <div
            className="collapse navbar-collapse text-center order-lg-2 order-4"
            id="navigation"
          >
            <ul className="navbar-nav mx-auto mt-3 mt-lg-0">
              <li className="nav-item">
                {" "}
                <Link className="nav-link" href="/about">
                  About Me
                </Link>
              </li>
              <li className="nav-item dropdown">
                {" "}
                <Link
                  className="nav-link dropdown-toggle"
                  href="/article"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Articles
                </Link>
                <div className="dropdown-menu">
                  {" "}
                  <Link className="dropdown-item" href="/article/travel">
                    Travel
                  </Link>
                  <Link className="dropdown-item" href="/article/lifestyle">
                    Lifestyle
                  </Link>
                  <Link className="dropdown-item" href="/article/cruises">
                    Cruises
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                {" "}
                <Link className="nav-link" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
