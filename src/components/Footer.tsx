import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark mt-5">
        <div className="container section">
          <div className="row">
            <div className="col-lg-10 mx-auto text-center">
              <a className="d-inline-block mb-4 pb-2" href="index.html">
                <Image
                  decoding="async"
                  className="img-fluid"
                  src="/images/logo.png"
                  width={200}
                  height={200}
                  alt="HASU-FARM"
                />
              </a>
              <ul className="p-0 d-flex navbar-footer mb-0 list-unstyled">
                <li className="nav-item my-0">
                  {" "}
                  <a className="nav-link" href="about.html">
                    About
                  </a>
                </li>
                <li className="nav-item my-0">
                  {" "}
                  <a className="nav-link" href="article.html">
                    Elements
                  </a>
                </li>
                <li className="nav-item my-0">
                  {" "}
                  <a className="nav-link" href="privacy-policy.html">
                    Privacy Policy
                  </a>
                </li>
                <li className="nav-item my-0">
                  {" "}
                  <a className="nav-link" href="terms-conditions.html">
                    Terms Conditions
                  </a>
                </li>
                <li className="nav-item my-0">
                  {" "}
                  <a className="nav-link" href="404.html">
                    404 Page
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
