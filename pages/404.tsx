import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";

const ErrorPage = () => {
  return (
    <>
    <Header/>
      <main>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto text-center">
                <Image
                  loading="lazy"
                  decoding="async"
                  src="/images/404.png"
                  alt="404"
                  className="img-fluid mb-4"
                  width={500}
                  height={500}
                />
                <h1 className="mb-4">Page Not Found!</h1>
                <Link href="/" className="btn btn-outline-primary">
                  Back To Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
};

export default ErrorPage;
