import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "../src/components/Footer";
import Sidebar from "../src/components/Sidebar";
import Header from "../src/components/Header";

const About = () => {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 ">
                <div className="breadcrumbs mb-4">
                  {" "}
                  <Link href="/">Home</Link>
                  <span className="mx-1">/</span> <Link href="/about">About</Link>
                </div>
              </div>
              <div className="col-lg-8 mx-auto mb-5 mb-lg-0">
                <Image
                  loading="lazy"
                  decoding="async"
                  src="/images/author.jpg"
                  className="img-fluid w-100 mb-4"
                  alt="Author Image"
                  width={200}
                  height={200}
                />
                <h1 className="mb-4">Hootan Safiyari</h1>
                <div className="content">
                  <p>
                    Hello, I&rsquo;m Hootan Safiyari. A Content writter,
                    Developer and Story teller. Working as a Content writter at
                    CoolTech Agency. Quam nihil enim maxime corporis cumque
                    totam aliquid nam sint inventore optio modi neque laborum
                    officiis necessitatibus, facilis placeat pariatur!
                    Voluptatem, sed harum pariatur adipisci voluptates
                    voluptatum cumque, porro sint minima similique magni
                    perferendis fuga! Optio vel ipsum excepturi tempore
                    reiciendis id quidem? Vel in, doloribus debitis nesciunt
                    fugit sequi magnam accusantium modi neque quis, vitae velit,
                    pariatur harum autem a! Velit impedit atque maiores animi
                    possimus asperiores natus repellendus excepturi sint
                    architecto eligendi non, omnis nihil. Facilis, doloremque
                    illum. Fugit optio laborum minus debitis natus illo
                    perspiciatis corporis voluptatum rerum laboriosam.
                  </p>
                  <blockquote>
                    <p>
                      Facilis, doloremque illum. Fugit optio laborum minus
                      debitis natus illo perspiciatis corporis voluptatum rerum
                      laboriosam.
                    </p>
                  </blockquote>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam nihil enim maxime corporis cumque totam aliquid nam
                    sint inventore optio modi neque laborum officiis
                    necessitatibus, facilis placeat pariatur! Voluptatem, sed
                    harum pariatur adipisci voluptates voluptatum cumque, porro
                    sint minima similique magni perferendis fuga! Optio vel
                    ipsum excepturi tempore reiciendis id quidem.
                  </p>
                </div>
              </div>
              <Sidebar />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
