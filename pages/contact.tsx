import Link from "next/link";
import React from "react";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";

const contact = () => {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumbs mb-4">
                  {" "}
                  <Link href="/">Home</Link>
                  <span className="mx-1">/</span> <a href="#!">Contact</a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="pr-0 pr-lg-4">
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labor.
                    <div className="mt-5">
                      <p className="h3 mb-3 font-weight-normal">
                        <Link
                          className="text-dark"
                          href="mailto:hello@reporter.com"
                        >
                          hello@reporter.com
                        </Link>
                      </p>
                      <p className="mb-3">
                        <Link className="text-dark" href="tel:+211234565523">
                          +211234565523
                        </Link>
                      </p>
                      <p className="mb-2">9567 Turner Trace Apt. BC C3G8A4</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-4 mt-lg-0">
                <form method="POST" action="#!" className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control mb-4"
                      placeholder="Name"
                      name="name"
                      id="name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control mb-4"
                      placeholder="Email"
                      name="email"
                      id="email"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control mb-4"
                      placeholder="Subject"
                      name="subject"
                      id="subject"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control mb-4"
                      placeholder="Type You Message Here"
                      rows={5}
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-12">
                    <button className="btn btn-outline-primary" type="submit">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default contact;
