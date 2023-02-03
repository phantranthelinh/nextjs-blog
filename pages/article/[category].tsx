import React from 'react'
import Image from "next/image";
import Footer from "../../src/components/Footer";
import Header from "../../src/components/Header";
import Sidebar from "../../src/components/Sidebar";
import Link from 'next/link';
import { useRouter } from 'next/router';
const Article = () => {
  const router = useRouter()
  const {category } = router.query
  return (
    <>
    <Header/>
    <main>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumbs mb-4"> <Link href="index.html">Home</Link>
                  <span className="mx-1">/</span>  <Link href="/article">Articles</Link>
                  <span className="mx-1">/</span>  <Link href={`/${category}`}>{category}</Link>
                </div>
                <h1 className="mb-4 border-bottom border-primary d-inline-block">{category}</h1>
              </div>
              <div className="col-lg-8 mb-5 mb-lg-0">
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <article className="card article-card article-card-sm h-100">
                      <a href="article.html">
                        <div className="card-image">
                          <div className="post-info"> <span className="text-uppercase">04 Jun 2021</span>
                            <span className="text-uppercase">3 minutes read</span>
                          </div>
                          <Image loading="lazy" decoding="async" src="/images/post/post-1.jpg" alt="Post Thumbnail" className="w-100" width={420} height={280} />
                        </div>
                      </a>
                      <div className="card-body px-0 pb-0">
                        <ul className="post-meta mb-2">
                          <li> <a href="#!">travel</a>
                            <a href="#!">news</a>
                          </li>
                        </ul>
                        <h2><a className="post-title" href="article.html">Is It Ethical to Travel Now? With That Freedom Comes Responsibility.</a></h2>
                        <p className="card-text">Heading Here is example of hedings. You can use this heading by following markdownify rules. For example: use # for …</p>
                        <div className="content"> <a className="read-more-btn" href="/articles/travel/post-1/">Read Full Article</a>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="col-md-6 mb-4">
                    <article className="card article-card article-card-sm h-100">
                      <a href="article.html">
                        <div className="card-image">
                          <div className="post-info"> <span className="text-uppercase">03 Jun 2021</span>
                            <span className="text-uppercase">2 minutes read</span>
                          </div>
                          <Image loading="lazy" decoding="async" src="/package-lock.jsonimages/post/post-2.jpg" alt="Post Thumbnail" className="w-100" width={420} height={280} />
                        </div>
                      </a>
                      <div className="card-body px-0 pb-0">
                        <ul className="post-meta mb-2">
                          <li> <a href="#!">travel</a>
                          </li>
                        </ul>
                        <h2><Link className="post-title" href="/article">An
                            Experiential Guide to Explore This Kingdom</Link></h2>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna …</p>
                        <div className="content"> <a className="read-more-btn" href="/articles/travel/post-2/">Read Full Article</a>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="col-md-6 mb-4">
                    <article className="card article-card article-card-sm h-100">
                      <a href="article.html">
                        <div className="card-image">
                          <div className="post-info"> <span className="text-uppercase">01 Jan 2021</span>
                            <span className="text-uppercase">2 minutes read</span>
                          </div>
                          <Image loading="lazy" decoding="async" src="/images/post/post-6.jpg" alt="Post Thumbnail" className="w-100" width={420} height={280} />
                        </div>
                      </a>
                      <div className="card-body px-0 pb-0">
                        <ul className="post-meta mb-2">
                          <li> <a href="#!">travel</a>
                            <a href="#!">news</a>
                          </li>
                        </ul>
                        <h2><a className="post-title" href="article.html">Eight
                            Awesome Places to Visit in Montana This Summer</a></h2>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna …</p>
                        <div className="content"> <a className="read-more-btn" href="/articles/travel/post-3/">Read Full Article</a>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="col-md-6 mb-4">
                    <article className="card article-card article-card-sm h-100">
                      <a href="article.html">
                        <div className="card-image">
                          <div className="post-info"> <span className="text-uppercase">01 Jun 2020</span>
                            <span className="text-uppercase">2 minutes read</span>
                          </div>
                          <Image loading="lazy" decoding="async" src="/images/post/post-8.jpg" alt="Post Thumbnail" className="w-100" width={420} height={280} />
                        </div>
                      </a>
                      <div className="card-body px-0 pb-0">
                        <ul className="post-meta mb-2">
                          <li> <a href="#!">website</a>
                            <a href="#!">website</a>
                            <a href="#!">hugo</a>
                          </li>
                        </ul>
                        <h2><a className="post-title" href="article.html">Portugal and France Now Allow Unvaccinated Tourists</a></h2>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna …</p>
                        <div className="content"> <a className="read-more-btn" href="/articles/travel/post-4/">Read Full Article</a>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              <Sidebar/>
            </div>
          </div>
        </section>
      </main>

    <Footer/>
    
    </>
  )
}

export default Article