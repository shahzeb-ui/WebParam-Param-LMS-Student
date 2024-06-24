"use client";
import styles from "./page.module.css";
import Image from "next/image";


export default function Home() {
  return <main className="rbt-main-wrapper">
  <div className="rbt-banner-area rbt-banner-1">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 pb--120 pt--70 space-responsive-xxl">
          <div className="content">
            <div className="inner">
              <div className="rbt-new-badge rbt-new-badge-one">
                <span className="rbt-new-badge-icon">🏆</span> The Leader in
                Online Learning
              </div>
              <h1 className="title">
                Build The Skills <br /> To Drive Your Career.
              </h1>
              <p className="description">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.<strong> Velit officia consequat.</strong>
              </p>
              <div className="slider-btn">
                <a
                  className="rbt-btn btn-gradient hover-icon-reverse"
                  href="/01-main-demo#"
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">View Course</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right" />
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right" />
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="shape-wrapper" id="scene">
              <Image
                alt="Hero Image"
                loading="lazy"
                width={1200}
                height={1400}
                decoding="async"
                data-nimg={1}
                // //"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner-01.3af456fc.png&w=1200&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner-01.3af456fc.png&w=3840&q=75 2x"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner-01.3af456fc.png&w=3840&q=75"
                style={{ color: "transparent" }}
              />
              <div className="hero-bg-shape-1 layer" data-depth="0.4">
                <Image
                  alt="Hero Image Background Shape"
                  loading="lazy"
                  width={428}
                  height={377}
                  decoding="async"
                  data-nimg={1}
                  // //"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshape-01.c64f84b3.png&w=640&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshape-01.c64f84b3.png&w=1080&q=75 2x"
                  src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshape-01.c64f84b3.png&w=1080&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="hero-bg-shape-2 layer" data-depth="0.4">
                <Image
                  alt="Hero Image Background Shape"
                  loading="lazy"
                  width={372}
                  height={396}
                  decoding="async"
                  data-nimg={1}
                  // //"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshape-02.df6bfea7.png&w=384&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshape-02.df6bfea7.png&w=750&q=75 2x"
                  src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshape-02.df6bfea7.png&w=750&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
            <div className="banner-card pb--60 swiper rbt-dot-bottom-center banner-swiper-active">
              <div className="swiper swiper-wrapper swiper-cards swiper-3d swiper-initialized swiper-horizontal swiper-watch-progress">
                <div className="swiper-wrapper" style={{ cursor: "grab" }}>
                  <div
                    className="swiper-slide swiper-slide-visible swiper-slide-fully-visible swiper-slide-active"
                    style={{
                      width: 390,
                      zIndex: 3,
                      transform:
                        "translate3d(0px, 0px, 0px) rotateZ(0deg) scale(1)"
                    }}
                  >
                    <div className="rbt-card variation-01 rbt-hover">
                      <div className="rbt-card-img">
                        <a href="/course-details/1">
                          <Image
                            alt="Card image"
                            loading="lazy"
                            width={710}
                            height={488}
                            decoding="async"
                            data-nimg={1}
                            //"/_next/image?url=%2Fimages%2Fcourse%2Fcourse-01.jpg&w=750&q=75 1x, /_next/image?url=%2Fimages%2Fcourse%2Fcourse-01.jpg&w=1920&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fcourse%2Fcourse-01.jpg&w=1920&q=75"
                            style={{ color: "transparent" }}
                          />
                          <div className="rbt-badge-3 bg-white">
                            <span>-40%</span>
                            <span>Off</span>
                          </div>
                        </a>
                      </div>
                      <div className="rbt-card-body">
                        <ul className="rbt-meta">
                          <li>
                            <i className="feather-book" />
                            12 Lessons
                          </li>
                          <li>
                            <i className="feather-users" />
                            50 Students
                          </li>
                        </ul>
                        <h4 className="rbt-card-title">
                          <a href="/course-details/1">
                            The Complete Histudy 2024: From Zero to Expert!
                          </a>
                        </h4>
                        <p className="rbt-card-text">
                          Master Python by building 100 projects in 100 days.
                          Learn data science, automation, build websites,{" "}
                        </p>
                        <div className="rbt-review">
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <span className="rating-count">(15 Reviews)</span>
                        </div>
                        <div className="rbt-card-bottom">
                          <div className="rbt-price">
                            <span className="current-price">$70</span>
                            <span className="off-price">$20</span>
                          </div>
                          <a className="rbt-btn-link" href="/course-details/1">
                            Learn More
                            <i className="feather-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-slide-shadow swiper-slide-shadow-cards"
                      style={{ opacity: 0 }}
                    />
                  </div>
                  <div
                    className="swiper-slide swiper-slide-next"
                    style={{
                      width: 390,
                      zIndex: 2,
                      transform:
                        "translate3d(calc(7.25% - 390px), 0px, -100px) rotateZ(2deg) scale(1)"
                    }}
                  >
                    <div className="rbt-card variation-01 rbt-hover">
                      <div className="rbt-card-img">
                        <a href="/course-details/2">
                          <Image
                            alt="Card image"
                            loading="lazy"
                            width={710}
                            height={488}
                            decoding="async"
                            data-nimg={1}
                            //"/_next/image?url=%2Fimages%2Fcourse%2Fclassic-lms-01.jpg&w=750&q=75 1x, /_next/image?url=%2Fimages%2Fcourse%2Fclassic-lms-01.jpg&w=1920&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fcourse%2Fclassic-lms-01.jpg&w=1920&q=75"
                            style={{ color: "transparent" }}
                          />
                          <div className="rbt-badge-3 bg-white">
                            <span>-40%</span>
                            <span>Off</span>
                          </div>
                        </a>
                      </div>
                      <div className="rbt-card-body">
                        <ul className="rbt-meta">
                          <li>
                            <i className="feather-book" />
                            12 Lessons
                          </li>
                          <li>
                            <i className="feather-users" />
                            30 Students
                          </li>
                        </ul>
                        <h4 className="rbt-card-title">
                          <a href="/course-details/2">
                            Difficult Things About Education.
                          </a>
                        </h4>
                        <p className="rbt-card-text">
                          Master Python by building 100 projects in 100 days.
                          Learn data science, automation, build websites,{" "}
                        </p>
                        <div className="rbt-review">
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <span className="rating-count">(15 Reviews)</span>
                        </div>
                        <div className="rbt-card-bottom">
                          <div className="rbt-price">
                            <span className="current-price">$75</span>
                            <span className="off-price">$10</span>
                          </div>
                          <a className="rbt-btn-link" href="/course-details/2">
                            Learn More
                            <i className="feather-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-slide-shadow swiper-slide-shadow-cards"
                      style={{ opacity: 1 }}
                    />
                  </div>
                  <div
                    className="swiper-slide"
                    style={{
                      width: 390,
                      zIndex: 1,
                      transform:
                        "translate3d(calc(13% - 780px), 0px, -200px) rotateZ(4deg) scale(1)"
                    }}
                  >
                    <div className="rbt-card variation-01 rbt-hover">
                      <div className="rbt-card-img">
                        <a href="/course-details/3">
                          <Image
                            alt="Card image"
                            loading="lazy"
                            width={710}
                            height={488}
                            decoding="async"
                            data-nimg={1}
                            //"/_next/image?url=%2Fimages%2Fcourse%2Fcourse-online-02.jpg&w=750&q=75 1x, /_next/image?url=%2Fimages%2Fcourse%2Fcourse-online-02.jpg&w=1920&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fcourse%2Fcourse-online-02.jpg&w=1920&q=75"
                            style={{ color: "transparent" }}
                          />
                          <div className="rbt-badge-3 bg-white">
                            <span>-40%</span>
                            <span>Off</span>
                          </div>
                        </a>
                      </div>
                      <div className="rbt-card-body">
                        <ul className="rbt-meta">
                          <li>
                            <i className="feather-book" />
                            12 Lessons
                          </li>
                          <li>
                            <i className="feather-users" />
                            50 Students
                          </li>
                        </ul>
                        <h4 className="rbt-card-title">
                          <a href="/course-details/3">
                            Five Things You Should Do In Education.
                          </a>
                        </h4>
                        <p className="rbt-card-text">
                          Master Python by building 100 projects in 100 days.
                          Learn data science, automation, build websites,{" "}
                        </p>
                        <div className="rbt-review">
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <span className="rating-count">(15 Reviews)</span>
                        </div>
                        <div className="rbt-card-bottom">
                          <div className="rbt-price">
                            <span className="current-price">$90</span>
                            <span className="off-price">$40</span>
                          </div>
                          <a className="rbt-btn-link" href="/course-details/3">
                            Learn More
                            <i className="feather-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-slide-shadow swiper-slide-shadow-cards"
                      style={{ opacity: 1 }}
                    />
                  </div>
                </div>
                <div className="rbt-swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                  <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
                  <span className="swiper-pagination-bullet" />
                  <span className="swiper-pagination-bullet" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="rbt-categories-area bg-color-white rbt-section-gapBottom">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title text-center">
            <span className="subtitle bg-primary-opacity">CATEGORIES</span>
            <h2 className="title">
              Explore Top Courses Caterories <br /> That Change Yourself
            </h2>
          </div>
        </div>
      </div>
      <div className="row g-5 mt--20">
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <a
            className="rbt-cat-box rbt-cat-box-1 text-center"
            href="/course-filter-one-toggle/Web%20Design"
          >
            <div className="inner">
              <div className="icons">
                <Image
                  alt="Icons Images"
         
                  width={80}
                  height={80}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2Fimages%2Fcategory%2Fweb-design.png&w=96&q=75 1x, /_next/image?url=%2Fimages%2Fcategory%2Fweb-design.png&w=256&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Fcategory%2Fweb-design.png&w=256&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="content">
                <h5 className="title">Web Design</h5>
                <div className="read-more-btn">
                  <span className="rbt-btn-link">
                    1 Course
                    <i className="feather-arrow-right" />
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <a
            className="rbt-cat-box rbt-cat-box-1 text-center"
            href="/course-filter-one-toggle/Backend"
          >
            <div className="inner">
              <div className="icons">
                <Image
                  alt="Icons Images"
                  width={80}
                  height={80}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2Fimages%2Fcategory%2Fdesign.png&w=96&q=75 1x, /_next/image?url=%2Fimages%2Fcategory%2Fdesign.png&w=256&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Fcategory%2Fdesign.png&w=256&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="content">
                <h5 className="title">Backend</h5>
                <div className="read-more-btn">
                  <span className="rbt-btn-link">
                    2 Courses
                    <i className="feather-arrow-right" />
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <a
            className="rbt-cat-box rbt-cat-box-1 text-center"
            href="/course-filter-one-toggle/Full%20Stack"
          >
            <div className="inner">
              <div className="icons">
                <Image
                  alt="Icons Images"
              
                  width={80}
                  height={80}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2Fimages%2Fcategory%2Fpersonal.png&w=96&q=75 1x, /_next/image?url=%2Fimages%2Fcategory%2Fpersonal.png&w=256&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Fcategory%2Fpersonal.png&w=256&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="content">
                <h5 className="title">Full Stack</h5>
                <div className="read-more-btn">
                  <span className="rbt-btn-link">
                    1 Course
                    <i className="feather-arrow-right" />
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <a
            className="rbt-cat-box rbt-cat-box-1 text-center"
            href="/course-filter-one-toggle/Mobile%20Application"
          >
            <div className="inner">
              <div className="icons">
                <Image
                  alt="Icons Images"
             
                  width={80}
                  height={80}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2Fimages%2Fcategory%2Fserver.png&w=96&q=75 1x, /_next/image?url=%2Fimages%2Fcategory%2Fserver.png&w=256&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Fcategory%2Fserver.png&w=256&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="content">
                <h5 className="title">Mobile Application</h5>
                <div className="read-more-btn">
                  <span className="rbt-btn-link">
                    1 Course
                    <i className="feather-arrow-right" />
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <a
            className="rbt-cat-box rbt-cat-box-1 text-center"
            href="/course-filter-one-toggle/Backend"
          >
            <div className="inner">
              <div className="icons">
                <Image
                  alt="Icons Images"
              
                  width={80}
                  height={80}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2Fimages%2Fcategory%2Fpantone.png&w=96&q=75 1x, /_next/image?url=%2Fimages%2Fcategory%2Fpantone.png&w=256&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Fcategory%2Fpantone.png&w=256&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="content">
                <h5 className="title">Backend</h5>
                <div className="read-more-btn">
                  <span className="rbt-btn-link">
                    2 Courses
                    <i className="feather-arrow-right" />
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <a
            className="rbt-cat-box rbt-cat-box-1 text-center"
            href="/course-filter-one-toggle/Finance%20&%20Accounting"
          >
            <div className="inner">
              <div className="icons">
                <Image
                  alt="Icons Images"
          
                  width={80}
                  height={80}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2Fimages%2Fcategory%2Fpaint-palette.png&w=96&q=75 1x, /_next/image?url=%2Fimages%2Fcategory%2Fpaint-palette.png&w=256&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Fcategory%2Fpaint-palette.png&w=256&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="content">
                <h5 className="title">Finance &amp; Accounting</h5>
                <div className="read-more-btn">
                  <span className="rbt-btn-link">
                    1 Course
                    <i className="feather-arrow-right" />
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <a
            className="rbt-cat-box rbt-cat-box-1 text-center"
            href="/course-filter-one-toggle/Graphic%20Design"
          >
            <div className="inner">
              <div className="icons">
                <Image
                  alt="Icons Images"
            
                  width={80}
                  height={80}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2Fimages%2Fcategory%2Fsmartphone.png&w=96&q=75 1x, /_next/image?url=%2Fimages%2Fcategory%2Fsmartphone.png&w=256&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Fcategory%2Fsmartphone.png&w=256&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="content">
                <h5 className="title">Graphic Design</h5>
                <div className="read-more-btn">
                  <span className="rbt-btn-link">
                    2 Courses
                    <i className="feather-arrow-right" />
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <a
            className="rbt-cat-box rbt-cat-box-1 text-center"
            href="/course-filter-one-toggle/Graphic%20Design"
          >
            <div className="inner">
              <div className="icons">
                <Image
                  alt="Icons Images"
          
                  width={80}
                  height={80}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2Fimages%2Fcategory%2Finfographic.png&w=96&q=75 1x, /_next/image?url=%2Fimages%2Fcategory%2Finfographic.png&w=256&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Fcategory%2Finfographic.png&w=256&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="content">
                <h5 className="title">Graphic Design</h5>
                <div className="read-more-btn">
                  <span className="rbt-btn-link">
                    2 Courses
                    <i className="feather-arrow-right" />
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="rbt-course-area bg-color-extra2 rbt-section-gap">
    <div className="container">
      <div className="row mb--60">
        <div className="col-lg-12">
          <div className="section-title text-center">
            <span className="subtitle bg-secondary-opacity">
              Top Popular Course
            </span>
            <h2 className="title">
              Histudy Course student <br /> can join with us.
            </h2>
          </div>
        </div>
      </div>
      <div className="row row--15">
        <div
          className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30 sal-animate"
          data-sal-delay={150}
          data-sal="slide-up"
          data-sal-duration={800}
        >
          <div className="rbt-card variation-01 rbt-hover">
            <div className="rbt-card-img">
              <a href="/course-details/1">
                <Image
                  alt="Card image"
                  loading="lazy"
                  width={355}
                  height={244}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2Fimages%2Fcourse%2Fcourse-01.jpg&w=384&q=75 1x, /_next/image?url=%2Fimages%2Fcourse%2Fcourse-01.jpg&w=750&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Fcourse%2Fcourse-01.jpg&w=750&q=75"
                  style={{ color: "transparent" }}
                />
                <div className="rbt-badge-3 bg-white">
                  <span>-20%</span>
                  <span>Off</span>
                </div>
              </a>
            </div>
            <div className="rbt-card-body">
              <div className="rbt-card-top">
                <div className="rbt-review">
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <span className="rating-count">(15 Reviews)</span>
                </div>
                <div className="rbt-bookmark-btn">
                  <a
                    className="rbt-round-btn"
                    title="Bookmark"
                    href="/01-main-demo#"
                  >
                    <i className="feather-bookmark" />
                  </a>
                </div>
              </div>
              <h4 className="rbt-card-title">
                <a href="/course-details/1">
                  The Complete Histudy 2024: From Zero to Expert!
                </a>
              </h4>
              <ul className="rbt-meta">
                <li>
                  <i className="feather-book" />
                  12 Lessons
                </li>
                <li>
                  <i className="feather-users" />
                  50 Students
                </li>
              </ul>
              <p className="rbt-card-text">
                Master Python by building 100 projects in 100 days. Learn data
                science, automation, build websites, games and apps!
              </p>
              <div className="rbt-author-meta mb--10">
                <div className="rbt-avater">
                  <a href="/profile/1">
                    <Image
                      alt="Sophia Jaymes"
                      loading="lazy"
                      width={33}
                      height={33}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Fclient%2Favatar-02.png&w=48&q=75 1x, /_next/image?url=%2Fimages%2Fclient%2Favatar-02.png&w=96&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Fclient%2Favatar-02.png&w=96&q=75"
                      style={{ color: "transparent" }}
                    />
                  </a>
                </div>
                <div className="rbt-author-info">
                  By <a href="/profile/1">Claudia Pruitt</a> In{" "}
                  <a href="/01-main-demo#">Designing</a>
                </div>
              </div>
              <div className="rbt-card-bottom">
                <div className="rbt-price">
                  <span className="current-price">$70</span>
                  <span className="off-price">$20</span>
                </div>
                <a className="rbt-btn-link" href="/course-details/1">
                  Learn More
                  <i className="feather-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30 sal-animate"
          data-sal-delay={150}
          data-sal="slide-up"
          data-sal-duration={800}
        >
          <div className="rbt-card variation-01 rbt-hover">
            <div className="rbt-card-img">
              <a href="/course-details/2">
                <Image
                  alt="Card image"
                  loading="lazy"
                  width={355}
                  height={244}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2Fimages%2Fcourse%2Fclassic-lms-01.jpg&w=384&q=75 1x, /_next/image?url=%2Fimages%2Fcourse%2Fclassic-lms-01.jpg&w=750&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Fcourse%2Fclassic-lms-01.jpg&w=750&q=75"
                  style={{ color: "transparent" }}
                />
                <div className="rbt-badge-3 bg-white">
                  <span>-10%</span>
                  <span>Off</span>
                </div>
              </a>
            </div>
            <div className="rbt-card-body">
              <div className="rbt-card-top">
                <div className="rbt-review">
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <span className="rating-count">(15 Reviews)</span>
                </div>
                <div className="rbt-bookmark-btn">
                  <a
                    className="rbt-round-btn"
                    title="Bookmark"
                    href="/01-main-demo#"
                  >
                    <i className="feather-bookmark" />
                  </a>
                </div>
              </div>
              <h4 className="rbt-card-title">
                <a href="/course-details/2">
                  Difficult Things About Education.
                </a>
              </h4>
              <ul className="rbt-meta">
                <li>
                  <i className="feather-book" />
                  12 Lessons
                </li>
                <li>
                  <i className="feather-users" />
                  30 Students
                </li>
              </ul>
              <p className="rbt-card-text">
                Master Python by building 100 projects in 100 days. Learn data
                science, automation, build websites, games and apps!
              </p>
              <div className="rbt-author-meta mb--10">
                <div className="rbt-avater">
                  <a href="/profile/2">
                    <Image
                      alt="Sophia Jaymes"
                      loading="lazy"
                      width={33}
                      height={33}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Fclient%2Favatar-03.png&w=48&q=75 1x, /_next/image?url=%2Fimages%2Fclient%2Favatar-03.png&w=96&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Fclient%2Favatar-03.png&w=96&q=75"
                      style={{ color: "transparent" }}
                    />
                  </a>
                </div>
                <div className="rbt-author-info">
                  By <a href="/profile/2">Fred Guer</a> In{" "}
                  <a href="/01-main-demo#">Math Teacher</a>
                </div>
              </div>
              <div className="rbt-card-bottom">
                <div className="rbt-price">
                  <span className="current-price">$75</span>
                  <span className="off-price">$10</span>
                </div>
                <a className="rbt-btn-link" href="/course-details/2">
                  Learn More
                  <i className="feather-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30 sal-animate"
          data-sal-delay={150}
          data-sal="slide-up"
          data-sal-duration={800}
        >
          <div className="rbt-card variation-01 rbt-hover">
            <div className="rbt-card-img">
              <a href="/course-details/3">
                <Image
                  alt="Card image"
                  loading="lazy"
                  width={355}
                  height={244}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2Fimages%2Fcourse%2Fcourse-online-02.jpg&w=384&q=75 1x, /_next/image?url=%2Fimages%2Fcourse%2Fcourse-online-02.jpg&w=750&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Fcourse%2Fcourse-online-02.jpg&w=750&q=75"
                  style={{ color: "transparent" }}
                />
                <div className="rbt-badge-3 bg-white">
                  <span>-40%</span>
                  <span>Off</span>
                </div>
              </a>
            </div>
            <div className="rbt-card-body">
              <div className="rbt-card-top">
                <div className="rbt-review">
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <span className="rating-count">(15 Reviews)</span>
                </div>
                <div className="rbt-bookmark-btn">
                  <a
                    className="rbt-round-btn"
                    title="Bookmark"
                    href="/01-main-demo#"
                  >
                    <i className="feather-bookmark" />
                  </a>
                </div>
              </div>
              <h4 className="rbt-card-title">
                <a href="/course-details/3">
                  Five Things You Should Do In Education.
                </a>
              </h4>
              <ul className="rbt-meta">
                <li>
                  <i className="feather-book" />
                  12 Lessons
                </li>
                <li>
                  <i className="feather-users" />
                  50 Students
                </li>
              </ul>
              <p className="rbt-card-text">
                Master Python by building 100 projects in 100 days. Learn data
                science, automation, build websites, games and apps!
              </p>
              <div className="rbt-author-meta mb--10">
                <div className="rbt-avater">
                  <a href="/profile/3">
                    <Image
                      alt="Sophia Jaymes"
                      loading="lazy"
                      width={33}
                      height={33}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Fclient%2Favatar-04.png&w=48&q=75 1x, /_next/image?url=%2Fimages%2Fclient%2Favatar-04.png&w=96&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Fclient%2Favatar-04.png&w=96&q=75"
                      style={{ color: "transparent" }}
                    />
                  </a>
                </div>
                <div className="rbt-author-info">
                  By <a href="/profile/3">Levi Arm</a> In{" "}
                  <a href="/01-main-demo#">Advanced Educator</a>
                </div>
              </div>
              <div className="rbt-card-bottom">
                <div className="rbt-price">
                  <span className="current-price">$90</span>
                  <span className="off-price">$40</span>
                </div>
                <a className="rbt-btn-link" href="/course-details/3">
                  Learn More
                  <i className="feather-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="load-more-btn mt--60 text-center">
            <a
              className="rbt-btn btn-gradient btn-lg hover-icon-reverse"
              href="/01-main-demo#"
            >
              <span className="icon-reverse-wrapper">
                <span className="btn-text">Load More Course (40)</span>
                <span className="btn-icon">
                  <i className="feather-arrow-right" />
                </span>
                <span className="btn-icon">
                  <i className="feather-arrow-right" />
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="rbt-about-area bg-color-white rbt-section-gapTop pb_md--80 pb_sm--80 about-style-1">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6">
          <div className="thumbnail-wrapper">
            <div className="thumbnail-wrapper">
              <div
                className="thumbnail image-1"
                style={{ willChange: "transform", transform: "translateY(0%)" }}
              >
                <Image
                  alt="Education Images"
                  loading="lazy"
                  width={366}
                  height={490}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-01.465b82c5.png&w=384&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-01.465b82c5.png&w=750&q=75 2x"
                  src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-01.465b82c5.png&w=750&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div
                className="thumbnail image-2"
                style={{ willChange: "transform", transform: "translateY(0%)" }}
              >
                <Image
                  alt="Education Images"
                  loading="lazy"
                  width={308}
                  height={250}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-02.6a8dc485.png&w=384&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-02.6a8dc485.png&w=640&q=75 2x"
                  src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-02.6a8dc485.png&w=640&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div
                className="thumbnail image-3"
                style={{ willChange: "transform", transform: "translateY(0%)" }}
              >
                <Image
                  alt="Education Images"
                  loading="lazy"
                  width={405}
                  height={490}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-03.3028137e.png&w=640&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-03.3028137e.png&w=828&q=75 2x"
                  src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-03.3028137e.png&w=828&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="inner pl--50 pl_sm--0 pl_md--0">
            <div className="section-title text-start">
              <span className="subtitle bg-coral-opacity">KNOW ABOUT US</span>
              <h2 className="title">
                Know About Histudy <br /> Learning Platform
              </h2>
            </div>
            <p className="description mt--30">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <div className="rbt-feature-wrapper mt--20 ml_dec_20">
              <div className="rbt-feature feature-style-2 rbt-radius">
                <div className="icon bg-pink-opacity">
                  <i className="feather-heart" />
                </div>
                <div className="feature-content">
                  <h6 className="feature-title">Flexible Classes</h6>
                  <p className="feature-description">
                    It is a long established fact that a reader will be
                    distracted by this on readable content of when looking at
                    its layout.
                  </p>
                </div>
              </div>
              <div className="rbt-feature feature-style-2 rbt-radius">
                <div className="icon bg-primary-opacity">
                  <i className="feather-book" />
                </div>
                <div className="feature-content">
                  <h6 className="feature-title">Learn From Anywhere</h6>
                  <p className="feature-description">
                    Sed distinctio repudiandae eos recusandae laborum eaque non
                    eius iure suscipit laborum eaque non eius iure suscipit.
                  </p>
                </div>
              </div>
            </div>
            <div className="about-btn mt--40">
              <a
                className="rbt-btn btn-gradient hover-icon-reverse"
                href="/01-main-demo#"
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">More About Us</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right" />
                  </span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right" />
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="rbt-callto-action-area mt_dec--half">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-6">
          <div className="rbt-callto-action callto-action-default bg-color-white rbt-radius shadow-1">
            <div className="row align-items-center">
              <div className="col-lg-12 col-xl-5">
                <div className="inner">
                  <div className="rbt-category mb--20">
                    <a href="/01-main-demo#">New Collection</a>
                  </div>
                  <h4 className="title mb--15">Online Courses from Histudy</h4>
                  <p className="mb--15">
                    Top instructors from around the world
                  </p>
                </div>
              </div>
              <div className="col-lg-12 col-xl-7">
                <div className="video-popup-wrapper mt_lg--10 mt_md--20 mt_sm--20">
                  <Image
                    alt="Video Images"
                    loading="lazy"
                    width={319}
                    height={229}
                    decoding="async"
                    data-nimg={1}
                    className="w-100 rbt-radius"
                    //"/_next/image?url=%2Fimages%2Fothers%2Fvideo-01.jpg&w=384&q=75 1x, /_next/image?url=%2Fimages%2Fothers%2Fvideo-01.jpg&w=640&q=75 2x"
                    src="/_next/image?url=%2Fimages%2Fothers%2Fvideo-01.jpg&w=640&q=75"
                    style={{ color: "transparent" }}
                  />
                  <a
                    className="rbt-btn rounded-player-2 sm-size popup-video position-to-top with-animation vbox-item"
                    data-vbtype="video"
                 
                    href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
                  >
                    <span className="play-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="rbt-callto-action callto-action-default bg-color-white rbt-radius shadow-1">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="inner">
                  <div className="rbt-category mb--20">
                    <a href="/01-main-demo#">Top Teacher</a>
                  </div>
                  <h4 className="title mb--10">
                    Free Online Courses from Histudy School To Education
                  </h4>
                  <p className="mb--15">
                    Top instructors from around the world
                  </p>
                  <div className="read-more-btn">
                    <a
                      className="rbt-btn rbt-switch-btn btn-gradient btn-sm"
                      href="/01-main-demo#"
                    >
                      <span data-text="Join Now">Join Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="rbt-counterup-area bg-color-extra2 rbt-section-gapBottom default-callto-action-overlap">
    <div className="container">
      <div className="container">
        <div className="row mb--40">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="subtitle bg-primary-opacity">WHY CHOOSE US</span>
              <h2 className="title">
                Creating A Community Of <br /> Life Long Learners.
              </h2>
              <p className="description has-medium-font-size mt--20 mb--0" />
            </div>
          </div>
        </div>
        <div className="row g-5 hanger-line">
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--60 mt_sm--60">
            <div className="rbt-counterup rbt-hover-03 border-bottom-gradient">
              <div className="top-circle-shape" />
              <div className="inner">
                <div className="rbt-round-icon">
                  <Image
                    alt="Icons Images"
                    loading="lazy"
                    width={50}
                    height={50}
                    decoding="async"
                    data-nimg={1}
                    //"/_next/image?url=%2Fimages%2Ficons%2Fcounter-01.png&w=64&q=75 1x, /_next/image?url=%2Fimages%2Ficons%2Fcounter-01.png&w=128&q=75 2x"
                    src="/_next/image?url=%2Fimages%2Ficons%2Fcounter-01.png&w=128&q=75"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="content">
                  <h3 className="counter">
                    <span className="odometer">
                      <div className="odometer odometer-auto-theme">
                        <div className="odometer-inside">
                          <span className="odometer-digit">
                            <span className="odometer-digit-spacer">8</span>
                            <span className="odometer-digit-inner">
                              <span className="odometer-ribbon">
                                <span className="odometer-ribbon-inner">
                                  <span className="odometer-value">5</span>
                                </span>
                              </span>
                            </span>
                          </span>
                          <span className="odometer-digit">
                            <span className="odometer-digit-spacer">8</span>
                            <span className="odometer-digit-inner">
                              <span className="odometer-ribbon">
                                <span className="odometer-ribbon-inner">
                                  <span className="odometer-value">0</span>
                                </span>
                              </span>
                            </span>
                          </span>
                          <span className="odometer-digit">
                            <span className="odometer-digit-spacer">8</span>
                            <span className="odometer-digit-inner">
                              <span className="odometer-ribbon">
                                <span className="odometer-ribbon-inner">
                                  <span className="odometer-value">0</span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </span>
                  </h3>
                  <span className="subtitle">Learners &amp; counting</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--60 mt_md--30 mt_sm--30 mt_mobile--60">
            <div className="rbt-counterup rbt-hover-03 border-bottom-gradient">
              <div className="top-circle-shape" />
              <div className="inner">
                <div className="rbt-round-icon">
                  <Image
                    alt="Icons Images"
                    loading="lazy"
                    width={50}
                    height={50}
                    decoding="async"
                    data-nimg={1}
                    //"/_next/image?url=%2Fimages%2Ficons%2Fcounter-02.png&w=64&q=75 1x, /_next/image?url=%2Fimages%2Ficons%2Fcounter-02.png&w=128&q=75 2x"
                    src="/_next/image?url=%2Fimages%2Ficons%2Fcounter-02.png&w=128&q=75"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="content">
                  <h3 className="counter">
                    <span className="odometer">
                      <div className="odometer odometer-auto-theme">
                        <div className="odometer-inside">
                          <span className="odometer-digit">
                            <span className="odometer-digit-spacer">8</span>
                            <span className="odometer-digit-inner">
                              <span className="odometer-ribbon">
                                <span className="odometer-ribbon-inner">
                                  <span className="odometer-value">8</span>
                                </span>
                              </span>
                            </span>
                          </span>
                          <span className="odometer-digit">
                            <span className="odometer-digit-spacer">8</span>
                            <span className="odometer-digit-inner">
                              <span className="odometer-ribbon">
                                <span className="odometer-ribbon-inner">
                                  <span className="odometer-value">0</span>
                                </span>
                              </span>
                            </span>
                          </span>
                          <span className="odometer-digit">
                            <span className="odometer-digit-spacer">8</span>
                            <span className="odometer-digit-inner">
                              <span className="odometer-ribbon">
                                <span className="odometer-ribbon-inner">
                                  <span className="odometer-value">0</span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </span>
                  </h3>
                  <span className="subtitle">Courses &amp; Video</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--60 mt_sm--60">
            <div className="rbt-counterup rbt-hover-03 border-bottom-gradient">
              <div className="top-circle-shape" />
              <div className="inner">
                <div className="rbt-round-icon">
                  <Image
                    alt="Icons Images"
                    loading="lazy"
                    width={50}
                    height={50}
                    decoding="async"
                    data-nimg={1}
                    //"/_next/image?url=%2Fimages%2Ficons%2Fcounter-03.png&w=64&q=75 1x, /_next/image?url=%2Fimages%2Ficons%2Fcounter-03.png&w=128&q=75 2x"
                    src="/_next/image?url=%2Fimages%2Ficons%2Fcounter-03.png&w=128&q=75"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="content">
                  <h3 className="counter">
                    <span className="odometer">
                      <div className="odometer odometer-auto-theme">
                        <div className="odometer-inside">
                          <span className="odometer-digit">
                            <span className="odometer-digit-spacer">8</span>
                            <span className="odometer-digit-inner">
                              <span className="odometer-ribbon">
                                <span className="odometer-ribbon-inner">
                                  <span className="odometer-value">1</span>
                                </span>
                              </span>
                            </span>
                          </span>
                          <span className="odometer-formatting-mark">,</span>
                          <span className="odometer-digit">
                            <span className="odometer-digit-spacer">8</span>
                            <span className="odometer-digit-inner">
                              <span className="odometer-ribbon">
                                <span className="odometer-ribbon-inner">
                                  <span className="odometer-value">0</span>
                                </span>
                              </span>
                            </span>
                          </span>
                          <span className="odometer-digit">
                            <span className="odometer-digit-spacer">8</span>
                            <span className="odometer-digit-inner">
                              <span className="odometer-ribbon">
                                <span className="odometer-ribbon-inner">
                                  <span className="odometer-value">0</span>
                                </span>
                              </span>
                            </span>
                          </span>
                          <span className="odometer-digit">
                            <span className="odometer-digit-spacer">8</span>
                            <span className="odometer-digit-inner">
                              <span className="odometer-ribbon">
                                <span className="odometer-ribbon-inner">
                                  <span className="odometer-value">0</span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </span>
                  </h3>
                  <span className="subtitle">Certified Students</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--60 mt_md--30 mt_sm--30 mt_mobile--60">
            <div className="rbt-counterup rbt-hover-03 border-bottom-gradient">
              <div className="top-circle-shape" />
              <div className="inner">
                <div className="rbt-round-icon">
                  <Image
                    alt="Icons Images"
                    loading="lazy"
                    width={50}
                    height={50}
                    decoding="async"
                    data-nimg={1}
                    //"/_next/image?url=%2Fimages%2Ficons%2Fcounter-04.png&w=64&q=75 1x, /_next/image?url=%2Fimages%2Ficons%2Fcounter-04.png&w=128&q=75 2x"
                    src="/_next/image?url=%2Fimages%2Ficons%2Fcounter-04.png&w=128&q=75"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="content">
                  <h3 className="counter">
                    <span className="odometer">
                      <div className="odometer odometer-auto-theme">
                        <div className="odometer-inside">
                          <span className="odometer-digit">
                            <span className="odometer-digit-spacer">8</span>
                            <span className="odometer-digit-inner">
                              <span className="odometer-ribbon">
                                <span className="odometer-ribbon-inner">
                                  <span className="odometer-value">1</span>
                                </span>
                              </span>
                            </span>
                          </span>
                          <span className="odometer-digit">
                            <span className="odometer-digit-spacer">8</span>
                            <span className="odometer-digit-inner">
                              <span className="odometer-ribbon">
                                <span className="odometer-ribbon-inner">
                                  <span className="odometer-value">0</span>
                                </span>
                              </span>
                            </span>
                          </span>
                          <span className="odometer-digit">
                            <span className="odometer-digit-spacer">8</span>
                            <span className="odometer-digit-inner">
                              <span className="odometer-ribbon">
                                <span className="odometer-ribbon-inner">
                                  <span className="odometer-value">0</span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </span>
                  </h3>
                  <span className="subtitle">Registered Enrolls</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="rbt-testimonial-area bg-color-white rbt-section-gap overflow-hidden">
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb--10">
              <span className="subtitle bg-primary-opacity">
                EDUCATION FOR EVERYONE
              </span>
              <h2 className="title">
                People like histudy education. <br /> No joking - here’s the
                proof!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="scroll-animation-wrapper no-overlay mt--50">
      <div className="scroll-animation scroll-right-left">
        <div className="single-column-20 bg-theme-gradient-odd">
          <div className="rbt-testimonial-box style-2">
            <div className="inner">
              <div className="icons">
                <Image
                  alt="Clint Images"
                  loading="lazy"
                  width={50}
                  height={50}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2Fimages%2Ficons%2Ffacebook.png&w=64&q=75 1x, /_next/image?url=%2Fimages%2Ficons%2Ffacebook.png&w=128&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Ficons%2Ffacebook.png&w=128&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="description">
                <p className="subtitle-3">
                  After the launch, vulputate at sapien sit amet, auctor iaculis
                  lorem. In vel hend rerit.
                </p>
                <div className="clint-info-wrapper">
                  <div className="thumb">
                    <Image
                      alt="Clint Images"
                      loading="lazy"
                      width={494}
                      height={494}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-01.png&w=640&q=75 1x, /_next/image?url=%2Fimages%2Ftestimonial%2Fclient-01.png&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-01.png&w=1080&q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="client-info">
                    <h5 className="title">
                      Martha Maldonado <i>CEO</i>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-column-20 bg-theme-gradient-odd">
          <div className="rbt-testimonial-box style-2">
            <div className="inner">
              <div className="icons">
                <Image
                  alt="Clint Images"
                  loading="lazy"
                  width={97}
                  height={50}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2Fimages%2Ficons%2Fgoogle.png&w=128&q=75 1x, /_next/image?url=%2Fimages%2Ficons%2Fgoogle.png&w=256&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Ficons%2Fgoogle.png&w=256&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="description">
                <p className="subtitle-3">
                  Histudy education, vulputate at sapien sit amet, auctor
                  iaculis lorem. In vel hend rerit. Vestibulum eget risus velit.
                </p>
                <div className="clint-info-wrapper">
                  <div className="thumb">
                    <Image
                      alt="Clint Images"
                      loading="lazy"
                      width={494}
                      height={494}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-02.png&w=640&q=75 1x, /_next/image?url=%2Fimages%2Ftestimonial%2Fclient-02.png&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-02.png&w=1080&q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="client-info">
                    <h5 className="title">
                      Michael D. Lovelady <i>CEO</i>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-column-20 bg-theme-gradient-odd">
          <div className="rbt-testimonial-box style-2">
            <div className="inner">
              <div className="icons">
                <Image
                  alt="Clint Images"
                  loading="lazy"
                  width={97}
                  height={50}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2Fimages%2Ficons%2Fyelp.png&w=128&q=75 1x, /_next/image?url=%2Fimages%2Ficons%2Fyelp.png&w=256&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Ficons%2Fyelp.png&w=256&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="description">
                <p className="subtitle-3">
                  Our educational, vulputate at sapien sit amet, auctor iaculis
                  lorem. In vel hend rerit nisi.{" "}
                </p>
                <div className="clint-info-wrapper">
                  <div className="thumb">
                    <Image
                      alt="Clint Images"
                      loading="lazy"
                      width={494}
                      height={494}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-03.png&w=640&q=75 1x, /_next/image?url=%2Fimages%2Ftestimonial%2Fclient-03.png&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-03.png&w=1080&q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="client-info">
                    <h5 className="title">
                      Valerie J. Creasman <i>CEO</i>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-column-20 bg-theme-gradient-odd">
          <div className="rbt-testimonial-box style-2">
            <div className="inner">
              <div className="icons">
                <Image
                  alt="Clint Images"
                  loading="lazy"
                  width={50}
                  height={50}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2Fimages%2Ficons%2Ffacebook.png&w=64&q=75 1x, /_next/image?url=%2Fimages%2Ficons%2Ffacebook.png&w=128&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Ficons%2Ffacebook.png&w=128&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="description">
                <p className="subtitle-3">
                  People says about, vulputate at sapien sit amet, auctor
                  iaculis lorem. In vel hend rerit.
                </p>
                <div className="clint-info-wrapper">
                  <div className="thumb">
                    <Image
                      alt="Clint Images"
                      loading="lazy"
                      width={494}
                      height={494}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-04.png&w=640&q=75 1x, /_next/image?url=%2Fimages%2Ftestimonial%2Fclient-04.png&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-04.png&w=1080&q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="client-info">
                    <h5 className="title">
                      Hannah R. Sutton <i>CEO</i>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-column-20 bg-theme-gradient-odd">
          <div className="rbt-testimonial-box style-2">
            <div className="inner">
              <div className="icons">
                <Image
                  alt="Clint Images"
                  loading="lazy"
                  width={50}
                  height={50}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2Fimages%2Ficons%2Fbing.png&w=64&q=75 1x, /_next/image?url=%2Fimages%2Ficons%2Fbing.png&w=128&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Ficons%2Fbing.png&w=128&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="description">
                <p className="subtitle-3">
                  Like this histudy, vulputate at sapien sit amet,auctor iaculis
                  lorem. In vel hend rerit.
                </p>
                <div className="clint-info-wrapper">
                  <div className="thumb">
                    <Image
                      alt="Clint Images"
                      loading="lazy"
                      width={494}
                      height={494}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-05.png&w=640&q=75 1x, /_next/image?url=%2Fimages%2Ftestimonial%2Fclient-05.png&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-05.png&w=1080&q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="client-info">
                    <h5 className="title">
                      Pearl B. Hill <i>Marketing</i>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-column-20 bg-theme-gradient-odd">
          <div className="rbt-testimonial-box style-2">
            <div className="inner">
              <div className="icons">
                <Image
                  alt="Clint Images"
                  loading="lazy"
                  width={50}
                  height={50}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2Fimages%2Ficons%2Ffacebook.png&w=64&q=75 1x, /_next/image?url=%2Fimages%2Ficons%2Ffacebook.png&w=128&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Ficons%2Ffacebook.png&w=128&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="description">
                <p className="subtitle-3">
                  Educational template, vulputate at sapien sit amet, auctor
                  iaculis lorem. In vel hend rerit.
                </p>
                <div className="clint-info-wrapper">
                  <div className="thumb">
                    <Image
                      alt="Clint Images"
                      loading="lazy"
                      width={494}
                      height={494}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-06.png&w=640&q=75 1x, /_next/image?url=%2Fimages%2Ftestimonial%2Fclient-06.png&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-06.png&w=1080&q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="client-info">
                    <h5 className="title">
                      Mandy F. Wood <i>CEO</i>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-column-20 bg-theme-gradient-odd">
          <div className="rbt-testimonial-box style-2">
            <div className="inner">
              <div className="icons">
                <Image
                  alt="Clint Images"
                  loading="lazy"
                  width={97}
                  height={50}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2Fimages%2Ficons%2Fhubs.png&w=128&q=75 1x, /_next/image?url=%2Fimages%2Ficons%2Fhubs.png&w=256&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Ficons%2Fhubs.png&w=256&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="description">
                <p className="subtitle-3">
                  Online leaning, vulputate at sapien sit amet, auctor iaculis
                  lorem. In vel hend rerit nisi. Vestibulum eget risus velit.
                </p>
                <div className="clint-info-wrapper">
                  <div className="thumb">
                    <Image
                      alt="Clint Images"
                      loading="lazy"
                      width={494}
                      height={494}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-07.png&w=640&q=75 1x, /_next/image?url=%2Fimages%2Ftestimonial%2Fclient-07.png&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-07.png&w=1080&q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="client-info">
                    <h5 className="title">
                      Mildred W. Diaz <i>Executive</i>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-column-20 bg-theme-gradient-odd">
          <div className="rbt-testimonial-box style-2">
            <div className="inner">
              <div className="icons">
                <Image
                  alt="Clint Images"
                  loading="lazy"
                  width={50}
                  height={50}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2Fimages%2Ficons%2Fbing.png&w=64&q=75 1x, /_next/image?url=%2Fimages%2Ficons%2Fbing.png&w=128&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Ficons%2Fbing.png&w=128&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="description">
                <p className="subtitle-3">
                  Remote learning, vulputate at sapien sit amet, auctor iaculis
                  lorem. In vel hend rerit nisi. Vestibulum eget risus velit.
                </p>
                <div className="clint-info-wrapper">
                  <div className="thumb">
                    <Image
                      alt="Clint Images"
                      loading="lazy"
                      width={494}
                      height={494}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-08.png&w=640&q=75 1x, /_next/image?url=%2Fimages%2Ftestimonial%2Fclient-08.png&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-08.png&w=1080&q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="client-info">
                    <h5 className="title">
                      Christopher H. Win <i>CEO</i>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-column-20 bg-theme-gradient-odd">
          <div className="rbt-testimonial-box style-2">
            <div className="inner">
              <div className="icons">
                <Image
                  alt="Clint Images"
                  loading="lazy"
                  width={97}
                  height={50}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2Fimages%2Ficons%2Fyelp.png&w=128&q=75 1x, /_next/image?url=%2Fimages%2Ficons%2Fyelp.png&w=256&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Ficons%2Fyelp.png&w=256&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="description">
                <p className="subtitle-3">
                  University managemnet, vulputate at sapien sit amet, auctor
                  iaculis lorem. In vel hend rerit nisi.
                </p>
                <div className="clint-info-wrapper">
                  <div className="thumb">
                    <Image
                      alt="Clint Images"
                      loading="lazy"
                      width={494}
                      height={494}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-09.png&w=640&q=75 1x, /_next/image?url=%2Fimages%2Ftestimonial%2Fclient-09.png&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-09.png&w=1080&q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="client-info">
                    <h5 className="title">
                      Martha Maldonado <i>SR Designer</i>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="scroll-animation-wrapper no-overlay mt--30">
      <div className="scroll-animation scroll-left-right">
        <div className="single-column-20 bg-theme-gradient-even">
          <div className="rbt-testimonial-box style-2">
            <div className="inner">
              <div className="icons">
                <Image
                  alt="Clint Images"
                  loading="lazy"
                  width={50}
                  height={50}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2Fimages%2Ficons%2Ffacebook.png&w=64&q=75 1x, /_next/image?url=%2Fimages%2Ficons%2Ffacebook.png&w=128&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Ficons%2Ffacebook.png&w=128&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="description">
                <p className="subtitle-3">
                  After the launch, vulputate at sapien sit amet, auctor iaculis
                  lorem. In vel hend rerit.
                </p>
                <div className="clint-info-wrapper">
                  <div className="thumb">
                    <Image
                      alt="Clint Images"
                      loading="lazy"
                      width={494}
                      height={494}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-01.png&w=640&q=75 1x, /_next/image?url=%2Fimages%2Ftestimonial%2Fclient-01.png&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-01.png&w=1080&q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="client-info">
                    <h5 className="title">
                      Martha Maldonado <i>CEO</i>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-column-20 bg-theme-gradient-even">
          <div className="rbt-testimonial-box style-2">
            <div className="inner">
              <div className="icons">
                <Image
                  alt="Clint Images"
                  loading="lazy"
                  width={97}
                  height={50}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2Fimages%2Ficons%2Fgoogle.png&w=128&q=75 1x, /_next/image?url=%2Fimages%2Ficons%2Fgoogle.png&w=256&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Ficons%2Fgoogle.png&w=256&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="description">
                <p className="subtitle-3">
                  Histudy education, vulputate at sapien sit amet, auctor
                  iaculis lorem. In vel hend rerit. Vestibulum eget risus velit.
                </p>
                <div className="clint-info-wrapper">
                  <div className="thumb">
                    <Image
                      alt="Clint Images"
                      loading="lazy"
                      width={494}
                      height={494}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-02.png&w=640&q=75 1x, /_next/image?url=%2Fimages%2Ftestimonial%2Fclient-02.png&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-02.png&w=1080&q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="client-info">
                    <h5 className="title">
                      Michael D. Lovelady <i>CEO</i>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-column-20 bg-theme-gradient-even">
          <div className="rbt-testimonial-box style-2">
            <div className="inner">
              <div className="icons">
                <Image
                  alt="Clint Images"
                  loading="lazy"
                  width={97}
                  height={50}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2Fimages%2Ficons%2Fyelp.png&w=128&q=75 1x, /_next/image?url=%2Fimages%2Ficons%2Fyelp.png&w=256&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Ficons%2Fyelp.png&w=256&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="description">
                <p className="subtitle-3">
                  Our educational, vulputate at sapien sit amet, auctor iaculis
                  lorem. In vel hend rerit nisi.{" "}
                </p>
                <div className="clint-info-wrapper">
                  <div className="thumb">
                    <Image
                      alt="Clint Images"
                      loading="lazy"
                      width={494}
                      height={494}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-03.png&w=640&q=75 1x, /_next/image?url=%2Fimages%2Ftestimonial%2Fclient-03.png&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-03.png&w=1080&q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="client-info">
                    <h5 className="title">
                      Valerie J. Creasman <i>CEO</i>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-column-20 bg-theme-gradient-even">
          <div className="rbt-testimonial-box style-2">
            <div className="inner">
              <div className="icons">
                <Image
                  alt="Clint Images"
                  loading="lazy"
                  width={50}
                  height={50}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2Fimages%2Ficons%2Ffacebook.png&w=64&q=75 1x, /_next/image?url=%2Fimages%2Ficons%2Ffacebook.png&w=128&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Ficons%2Ffacebook.png&w=128&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="description">
                <p className="subtitle-3">
                  People says about, vulputate at sapien sit amet, auctor
                  iaculis lorem. In vel hend rerit.
                </p>
                <div className="clint-info-wrapper">
                  <div className="thumb">
                    <Image
                      alt="Clint Images"
                      loading="lazy"
                      width={494}
                      height={494}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-04.png&w=640&q=75 1x, /_next/image?url=%2Fimages%2Ftestimonial%2Fclient-04.png&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-04.png&w=1080&q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="client-info">
                    <h5 className="title">
                      Hannah R. Sutton <i>CEO</i>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-column-20 bg-theme-gradient-even">
          <div className="rbt-testimonial-box style-2">
            <div className="inner">
              <div className="icons">
                <Image
                  alt="Clint Images"
                  loading="lazy"
                  width={50}
                  height={50}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2Fimages%2Ficons%2Fbing.png&w=64&q=75 1x, /_next/image?url=%2Fimages%2Ficons%2Fbing.png&w=128&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Ficons%2Fbing.png&w=128&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="description">
                <p className="subtitle-3">
                  Like this histudy, vulputate at sapien sit amet,auctor iaculis
                  lorem. In vel hend rerit.
                </p>
                <div className="clint-info-wrapper">
                  <div className="thumb">
                    <Image
                      alt="Clint Images"
                      loading="lazy"
                      width={494}
                      height={494}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-05.png&w=640&q=75 1x, /_next/image?url=%2Fimages%2Ftestimonial%2Fclient-05.png&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-05.png&w=1080&q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="client-info">
                    <h5 className="title">
                      Pearl B. Hill <i>Marketing</i>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-column-20 bg-theme-gradient-even">
          <div className="rbt-testimonial-box style-2">
            <div className="inner">
              <div className="icons">
                <Image
                  alt="Clint Images"
                  loading="lazy"
                  width={50}
                  height={50}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2Fimages%2Ficons%2Ffacebook.png&w=64&q=75 1x, /_next/image?url=%2Fimages%2Ficons%2Ffacebook.png&w=128&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Ficons%2Ffacebook.png&w=128&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="description">
                <p className="subtitle-3">
                  Educational template, vulputate at sapien sit amet, auctor
                  iaculis lorem. In vel hend rerit.
                </p>
                <div className="clint-info-wrapper">
                  <div className="thumb">
                    <Image
                      alt="Clint Images"
                      loading="lazy"
                      width={494}
                      height={494}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-06.png&w=640&q=75 1x, /_next/image?url=%2Fimages%2Ftestimonial%2Fclient-06.png&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-06.png&w=1080&q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="client-info">
                    <h5 className="title">
                      Mandy F. Wood <i>CEO</i>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-column-20 bg-theme-gradient-even">
          <div className="rbt-testimonial-box style-2">
            <div className="inner">
              <div className="icons">
                <Image
                  alt="Clint Images"
                  loading="lazy"
                  width={97}
                  height={50}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2Fimages%2Ficons%2Fhubs.png&w=128&q=75 1x, /_next/image?url=%2Fimages%2Ficons%2Fhubs.png&w=256&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Ficons%2Fhubs.png&w=256&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="description">
                <p className="subtitle-3">
                  Online leaning, vulputate at sapien sit amet, auctor iaculis
                  lorem. In vel hend rerit nisi. Vestibulum eget risus velit.
                </p>
                <div className="clint-info-wrapper">
                  <div className="thumb">
                    <Image
                      alt="Clint Images"
                      loading="lazy"
                      width={494}
                      height={494}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-07.png&w=640&q=75 1x, /_next/image?url=%2Fimages%2Ftestimonial%2Fclient-07.png&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-07.png&w=1080&q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="client-info">
                    <h5 className="title">
                      Mildred W. Diaz <i>Executive</i>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-column-20 bg-theme-gradient-even">
          <div className="rbt-testimonial-box style-2">
            <div className="inner">
              <div className="icons">
                <Image
                  alt="Clint Images"
                  loading="lazy"
                  width={50}
                  height={50}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2Fimages%2Ficons%2Fbing.png&w=64&q=75 1x, /_next/image?url=%2Fimages%2Ficons%2Fbing.png&w=128&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Ficons%2Fbing.png&w=128&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="description">
                <p className="subtitle-3">
                  Remote learning, vulputate at sapien sit amet, auctor iaculis
                  lorem. In vel hend rerit nisi. Vestibulum eget risus velit.
                </p>
                <div className="clint-info-wrapper">
                  <div className="thumb">
                    <Image
                      alt="Clint Images"
                      loading="lazy"
                      width={494}
                      height={494}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-08.png&w=640&q=75 1x, /_next/image?url=%2Fimages%2Ftestimonial%2Fclient-08.png&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-08.png&w=1080&q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="client-info">
                    <h5 className="title">
                      Christopher H. Win <i>CEO</i>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-column-20 bg-theme-gradient-even">
          <div className="rbt-testimonial-box style-2">
            <div className="inner">
              <div className="icons">
                <Image
                  alt="Clint Images"
                  loading="lazy"
                  width={97}
                  height={50}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2Fimages%2Ficons%2Fyelp.png&w=128&q=75 1x, /_next/image?url=%2Fimages%2Ficons%2Fyelp.png&w=256&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Ficons%2Fyelp.png&w=256&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="description">
                <p className="subtitle-3">
                  University managemnet, vulputate at sapien sit amet, auctor
                  iaculis lorem. In vel hend rerit nisi.
                </p>
                <div className="clint-info-wrapper">
                  <div className="thumb">
                    <Image
                      alt="Clint Images"
                      loading="lazy"
                      width={494}
                      height={494}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-09.png&w=640&q=75 1x, /_next/image?url=%2Fimages%2Ftestimonial%2Fclient-09.png&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Ftestimonial%2Fclient-09.png&w=1080&q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="client-info">
                    <h5 className="title">
                      Martha Maldonado <i>SR Designer</i>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="rbt-event-area rbt-section-gap bg-gradient-3">
    <div className="container">
      <div className="row mb--55">
        <div className="section-title text-center">
          <span className="subtitle bg-white-opacity">
            STIMULATED TO TAKE PART IN?
          </span>
          <h2 className="title color-white">Upcoming Events</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="swiper swiper-initialized swiper-horizontal event-activation-1 rbt-arrow-between rbt-dot-bottom-center pb--60 icon-bg-primary swiper-backface-hidden">
            <div className="swiper-wrapper">
              <div
                className="swiper-slide swiper-wrapper swiper-slide-active"
                style={{ width: 415, marginRight: 30 }}
              >
                <div className="swiper-slide">
                  <div className="single-slide">
                    <div className="rbt-card event-grid-card variation-01 rbt-hover">
                      <div className="rbt-card-img">
                        <a href="/event-details/4">
                          <Image
                            alt="Card image"
                            loading="lazy"
                            width={710}
                            height={480}
                            decoding="async"
                            data-nimg={1}
                            //"/_next/image?url=%2Fimages%2Fevent%2Fgrid-type-04.jpg&w=750&q=75 1x, /_next/image?url=%2Fimages%2Fevent%2Fgrid-type-04.jpg&w=1920&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fevent%2Fgrid-type-04.jpg&w=1920&q=75"
                            style={{ color: "transparent" }}
                          />
                          <div className="rbt-badge-3 bg-white">
                            <span>8 Jan</span>
                            <span>2024</span>
                          </div>
                        </a>
                      </div>
                      <div className="rbt-card-body">
                        <ul className="rbt-meta">
                          <li>
                            <i className="feather-map-pin" /> IAC Building
                          </li>
                          <li>
                            <i className="feather-clock" /> 8:00 am - 5:00 pm
                          </li>
                        </ul>
                        <h4 className="rbt-card-title">
                          <a href="/event-details/4">
                            Elegant Light Box Paper Cut Dioramas
                          </a>
                        </h4>
                        <div className="read-more-btn">
                          <a
                            className="rbt-btn btn-border hover-icon-reverse btn-sm radius-round"
                            href="/event-details/4"
                          >
                            <span className="icon-reverse-wrapper">
                              <span className="btn-text">Get Ticket</span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right" />
                              </span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right" />
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-wrapper swiper-slide-next"
                style={{ width: 415, marginRight: 30 }}
              >
                <div className="swiper-slide">
                  <div className="single-slide">
                    <div className="rbt-card event-grid-card variation-01 rbt-hover">
                      <div className="rbt-card-img">
                        <a href="/event-details/5">
                          <Image
                            alt="Card image"
                            loading="lazy"
                            width={710}
                            height={480}
                            decoding="async"
                            data-nimg={1}
                            //"/_next/image?url=%2Fimages%2Fevent%2Fgrid-type-05.jpg&w=750&q=75 1x, /_next/image?url=%2Fimages%2Fevent%2Fgrid-type-05.jpg&w=1920&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fevent%2Fgrid-type-05.jpg&w=1920&q=75"
                            style={{ color: "transparent" }}
                          />
                          <div className="rbt-badge-3 bg-white">
                            <span>12 Mar</span>
                            <span>2024</span>
                          </div>
                        </a>
                      </div>
                      <div className="rbt-card-body">
                        <ul className="rbt-meta">
                          <li>
                            <i className="feather-map-pin" /> Vancouver
                          </li>
                          <li>
                            <i className="feather-clock" /> 8:00 am - 5:00 pm
                          </li>
                        </ul>
                        <h4 className="rbt-card-title">
                          <a href="/event-details/5">
                            Most Effective Ways Education&apos;s Problem.
                          </a>
                        </h4>
                        <div className="read-more-btn">
                          <a
                            className="rbt-btn btn-border hover-icon-reverse btn-sm radius-round"
                            href="/event-details/5"
                          >
                            <span className="icon-reverse-wrapper">
                              <span className="btn-text">Get Ticket</span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right" />
                              </span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right" />
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-wrapper"
                style={{ width: 415, marginRight: 30 }}
              >
                <div className="swiper-slide">
                  <div className="single-slide">
                    <div className="rbt-card event-grid-card variation-01 rbt-hover">
                      <div className="rbt-card-img">
                        <a href="/event-details/6">
                          <Image
                            alt="Card image"
                            loading="lazy"
                            width={710}
                            height={480}
                            decoding="async"
                            data-nimg={1}
                            //"/_next/image?url=%2Fimages%2Fevent%2Fgrid-type-06.jpg&w=750&q=75 1x, /_next/image?url=%2Fimages%2Fevent%2Fgrid-type-06.jpg&w=1920&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fevent%2Fgrid-type-06.jpg&w=1920&q=75"
                            style={{ color: "transparent" }}
                          />
                          <div className="rbt-badge-3 bg-white">
                            <span>11 Oct</span>
                            <span>2024</span>
                          </div>
                        </a>
                      </div>
                      <div className="rbt-card-body">
                        <ul className="rbt-meta">
                          <li>
                            <i className="feather-map-pin" /> Paris
                          </li>
                          <li>
                            <i className="feather-clock" /> 8:00 am - 5:00 pm
                          </li>
                        </ul>
                        <h4 className="rbt-card-title">
                          <a href="/event-details/6">
                            Top 7 Common About Education.
                          </a>
                        </h4>
                        <div className="read-more-btn">
                          <a
                            className="rbt-btn btn-border hover-icon-reverse btn-sm radius-round"
                            href="/event-details/6"
                          >
                            <span className="icon-reverse-wrapper">
                              <span className="btn-text">Get Ticket</span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right" />
                              </span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right" />
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-wrapper"
                style={{ width: 415, marginRight: 30 }}
              >
                <div className="swiper-slide">
                  <div className="single-slide">
                    <div className="rbt-card event-grid-card variation-01 rbt-hover">
                      <div className="rbt-card-img">
                        <a href="/event-details/7">
                          <Image
                            alt="Card image"
                            loading="lazy"
                            width={710}
                            height={480}
                            decoding="async"
                            data-nimg={1}
                            //"/_next/image?url=%2Fimages%2Fevent%2Fgrid-type-05.jpg&w=750&q=75 1x, /_next/image?url=%2Fimages%2Fevent%2Fgrid-type-05.jpg&w=1920&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fevent%2Fgrid-type-05.jpg&w=1920&q=75"
                            style={{ color: "transparent" }}
                          />
                          <div className="rbt-badge-3 bg-white">
                            <span>5 Mar</span>
                            <span>2024</span>
                          </div>
                        </a>
                      </div>
                      <div className="rbt-card-body">
                        <ul className="rbt-meta">
                          <li>
                            <i className="feather-map-pin" /> Vancouver
                          </li>
                          <li>
                            <i className="feather-clock" /> 8:00 am - 5:00 pm
                          </li>
                        </ul>
                        <h4 className="rbt-card-title">
                          <a href="/event-details/7">
                            Most Effective Ways Education&apos;s Problem.
                          </a>
                        </h4>
                        <div className="read-more-btn">
                          <a
                            className="rbt-btn btn-border hover-icon-reverse btn-sm radius-round"
                            href="/event-details/7"
                          >
                            <span className="icon-reverse-wrapper">
                              <span className="btn-text">Get Ticket</span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right" />
                              </span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right" />
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-wrapper"
                style={{ width: 415, marginRight: 30 }}
              >
                <div className="swiper-slide">
                  <div className="single-slide">
                    <div className="rbt-card event-grid-card variation-01 rbt-hover">
                      <div className="rbt-card-img">
                        <a href="/event-details/8">
                          <Image
                            alt="Card image"
                            loading="lazy"
                            width={710}
                            height={480}
                            decoding="async"
                            data-nimg={1}
                            //"/_next/image?url=%2Fimages%2Fevent%2Fgrid-type-04.jpg&w=750&q=75 1x, /_next/image?url=%2Fimages%2Fevent%2Fgrid-type-04.jpg&w=1920&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fevent%2Fgrid-type-04.jpg&w=1920&q=75"
                            style={{ color: "transparent" }}
                          />
                          <div className="rbt-badge-3 bg-white">
                            <span>3 Jan</span>
                            <span>2024</span>
                          </div>
                        </a>
                      </div>
                      <div className="rbt-card-body">
                        <ul className="rbt-meta">
                          <li>
                            <i className="feather-map-pin" /> IAC Building
                          </li>
                          <li>
                            <i className="feather-clock" /> 8:00 am - 5:00 pm
                          </li>
                        </ul>
                        <h4 className="rbt-card-title">
                          <a href="/event-details/8">
                            Elegant Light Box Paper Cut Dioramas
                          </a>
                        </h4>
                        <div className="read-more-btn">
                          <a
                            className="rbt-btn btn-border hover-icon-reverse btn-sm radius-round"
                            href="/event-details/8"
                          >
                            <span className="icon-reverse-wrapper">
                              <span className="btn-text">Get Ticket</span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right" />
                              </span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right" />
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-wrapper"
                style={{ width: 415, marginRight: 30 }}
              >
                <div className="swiper-slide">
                  <div className="single-slide">
                    <div className="rbt-card event-grid-card variation-01 rbt-hover">
                      <div className="rbt-card-img">
                        <a href="/event-details/9">
                          <Image
                            alt="Card image"
                            loading="lazy"
                            width={710}
                            height={480}
                            decoding="async"
                            data-nimg={1}
                            //"/_next/image?url=%2Fimages%2Fevent%2Fgrid-type-03.jpg&w=750&q=75 1x, /_next/image?url=%2Fimages%2Fevent%2Fgrid-type-03.jpg&w=1920&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fevent%2Fgrid-type-03.jpg&w=1920&q=75"
                            style={{ color: "transparent" }}
                          />
                          <div className="rbt-badge-3 bg-white">
                            <span>1 Oct</span>
                            <span>2024</span>
                          </div>
                        </a>
                      </div>
                      <div className="rbt-card-body">
                        <ul className="rbt-meta">
                          <li>
                            <i className="feather-map-pin" /> Paris
                          </li>
                          <li>
                            <i className="feather-clock" /> 8:00 am - 5:00 pm
                          </li>
                        </ul>
                        <h4 className="rbt-card-title">
                          <a href="/event-details/9">
                            Histudy Education Fair 2024
                          </a>
                        </h4>
                        <div className="read-more-btn">
                          <a
                            className="rbt-btn btn-border hover-icon-reverse btn-sm radius-round"
                            href="/event-details/9"
                          >
                            <span className="icon-reverse-wrapper">
                              <span className="btn-text">Get Ticket</span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right" />
                              </span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right" />
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rbt-swiper-arrow rbt-arrow-left">
              <div className="custom-overfolow">
                <i className="rbt-icon feather-arrow-left" />
                <i className="rbt-icon-top feather-arrow-left" />
              </div>
            </div>
            <div className="rbt-swiper-arrow rbt-arrow-right swiper-button-disabled">
              <div className="custom-overfolow">
                <i className="rbt-icon feather-arrow-right" />
                <i className="rbt-icon-top feather-arrow-right" />
              </div>
            </div>
            <div
              className="rbt-swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"
              style={{ bottom: 0 }}
            >
              <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
              <span className="swiper-pagination-bullet" />
              <span className="swiper-pagination-bullet" />
              <span className="swiper-pagination-bullet" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="rbt-team-area bg-color-white rbt-section-gap">
    <div className="container">
      <div className="row mb--60">
        <div className="col-lg-12">
          <div className="section-title text-center">
            <span className="subtitle bg-primary-opacity">Our Teacher</span>
            <h2 className="title">Whose Inspirations You</h2>
          </div>
        </div>
      </div>
      <div className="row g-5">
        <div className="col-lg-7">
          <div className="rbt-team-tab-content tab-content" id="myTabContent">
            <div
              className="tab-pane fade active show"
              id="team-tab0"
              role="tabpanel"
              aria-labelledby="team-tab0-tab"
            >
              <div className="inner">
                <div className="rbt-team-thumbnail">
                  <div className="thumb">
                    <Image
                      alt="Testimonial Images"
       
                      width={415}
                      height={555}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Fteam%2Fteam-01.jpg&w=640&q=75 1x, /_next/image?url=%2Fimages%2Fteam%2Fteam-01.jpg&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Fteam%2Fteam-01.jpg&w=1080&q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
                <div className="rbt-team-details">
                  <div className="author-info">
                    <h4 className="title">Mames Mary</h4>
                    <span className="designation theme-gradient">
                      English Teacher
                    </span>
                    <span className="team-form">
                      <i className="feather-map-pin" />
                      <span className="location">CO Miego, AD,USA</span>
                    </span>
                  </div>
                  <p>
                    You can run Histudy easily. Any School, University, College
                    can be use this histudy education template for their
                    educational purpose. A university can be success you.
                  </p>
                  <ul className="social-icon social-default mt--20 justify-content-start">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="feather-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com">
                        <i className="feather-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="feather-instagram" />
                      </a>
                    </li>
                  </ul>
                  <ul className="rbt-information-list mt--25">
                    <li>
                      <a href="/01-main-demo#">
                        <i className="feather-phone" />
                        +1-202-555-0174
                      </a>
                    </li>
                    <li>
                      <a href="mailto:hello@example.com">
                        <i className="feather-mail" />
                        example@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade  show"
              id="team-tab1"
              role="tabpanel"
              aria-labelledby="team-tab1-tab"
            >
              <div className="inner">
                <div className="rbt-team-thumbnail">
                  <div className="thumb">
                    <Image
                      alt="Testimonial Images"
               
                      width={415}
                      height={555}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Fteam%2Fteam-02.jpg&w=640&q=75 1x, /_next/image?url=%2Fimages%2Fteam%2Fteam-02.jpg&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Fteam%2Fteam-02.jpg&w=1080&q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
                <div className="rbt-team-details">
                  <div className="author-info">
                    <h4 className="title">Christopher</h4>
                    <span className="designation theme-gradient">
                      English Teacher
                    </span>
                    <span className="team-form">
                      <i className="feather-map-pin" />
                      <span className="location">CO Miego, AD,USA</span>
                    </span>
                  </div>
                  <p>
                    You can run Histudy easily. Any School, University, College
                    can be use this histudy education template for their
                    educational purpose. A university can be success you.
                  </p>
                  <ul className="social-icon social-default mt--20 justify-content-start">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="feather-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com">
                        <i className="feather-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="feather-instagram" />
                      </a>
                    </li>
                  </ul>
                  <ul className="rbt-information-list mt--25">
                    <li>
                      <a href="/01-main-demo#">
                        <i className="feather-phone" />
                        +1-202-555-0174
                      </a>
                    </li>
                    <li>
                      <a href="mailto:hello@example.com">
                        <i className="feather-mail" />
                        example@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade  show"
              id="team-tab2"
              role="tabpanel"
              aria-labelledby="team-tab2-tab"
            >
              <div className="inner">
                <div className="rbt-team-thumbnail">
                  <div className="thumb">
                    <Image
                      alt="Testimonial Images"
                 
                      width={415}
                      height={555}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Fteam%2Fteam-03.jpg&w=640&q=75 1x, /_next/image?url=%2Fimages%2Fteam%2Fteam-03.jpg&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Fteam%2Fteam-03.jpg&w=1080&q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
                <div className="rbt-team-details">
                  <div className="author-info">
                    <h4 className="title">Robert Song</h4>
                    <span className="designation theme-gradient">
                      English Teacher
                    </span>
                    <span className="team-form">
                      <i className="feather-map-pin" />
                      <span className="location">CO Miego, AD,USA</span>
                    </span>
                  </div>
                  <p>
                    You can run Histudy easily. Any School, University, College
                    can be use this histudy education template for their
                    educational purpose. A university can be success you.
                  </p>
                  <ul className="social-icon social-default mt--20 justify-content-start">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="feather-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com">
                        <i className="feather-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="feather-instagram" />
                      </a>
                    </li>
                  </ul>
                  <ul className="rbt-information-list mt--25">
                    <li>
                      <a href="/01-main-demo#">
                        <i className="feather-phone" />
                        +1-202-555-0174
                      </a>
                    </li>
                    <li>
                      <a href="mailto:hello@example.com">
                        <i className="feather-mail" />
                        example@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade  show"
              id="team-tab3"
              role="tabpanel"
              aria-labelledby="team-tab3-tab"
            >
              <div className="inner">
                <div className="rbt-team-thumbnail">
                  <div className="thumb">
                    <Image
                      alt="Testimonial Images"
                  
                      width={415}
                      height={555}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Fteam%2Fteam-04.jpg&w=640&q=75 1x, /_next/image?url=%2Fimages%2Fteam%2Fteam-04.jpg&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Fteam%2Fteam-04.jpg&w=1080&q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
                <div className="rbt-team-details">
                  <div className="author-info">
                    <h4 className="title">William Susan</h4>
                    <span className="designation theme-gradient">
                      English Teacher
                    </span>
                    <span className="team-form">
                      <i className="feather-map-pin" />
                      <span className="location">CO Miego, AD,USA</span>
                    </span>
                  </div>
                  <p>
                    You can run Histudy easily. Any School, University, College
                    can be use this histudy education template for their
                    educational purpose. A university can be success you.
                  </p>
                  <ul className="social-icon social-default mt--20 justify-content-start">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="feather-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com">
                        <i className="feather-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="feather-instagram" />
                      </a>
                    </li>
                  </ul>
                  <ul className="rbt-information-list mt--25">
                    <li>
                      <a href="/01-main-demo#">
                        <i className="feather-phone" />
                        +1-202-555-0174
                      </a>
                    </li>
                    <li>
                      <a href="mailto:hello@example.com">
                        <i className="feather-mail" />
                        example@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade  show"
              id="team-tab4"
              role="tabpanel"
              aria-labelledby="team-tab4-tab"
            >
              <div className="inner">
                <div className="rbt-team-thumbnail">
                  <div className="thumb">
                    <Image
                      alt="Testimonial Images"
              
                      width={415}
                      height={555}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Fteam%2Fteam-05.jpg&w=640&q=75 1x, /_next/image?url=%2Fimages%2Fteam%2Fteam-05.jpg&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Fteam%2Fteam-05.jpg&w=1080&q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
                <div className="rbt-team-details">
                  <div className="author-info">
                    <h4 className="title">Soseph Sara</h4>
                    <span className="designation theme-gradient">
                      English Teacher
                    </span>
                    <span className="team-form">
                      <i className="feather-map-pin" />
                      <span className="location">CO Miego, AD,USA</span>
                    </span>
                  </div>
                  <p>
                    You can run Histudy easily. Any School, University, College
                    can be use this histudy education template for their
                    educational purpose. A university can be success you.
                  </p>
                  <ul className="social-icon social-default mt--20 justify-content-start">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="feather-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com">
                        <i className="feather-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="feather-instagram" />
                      </a>
                    </li>
                  </ul>
                  <ul className="rbt-information-list mt--25">
                    <li>
                      <a href="/01-main-demo#">
                        <i className="feather-phone" />
                        +1-202-555-0174
                      </a>
                    </li>
                    <li>
                      <a href="mailto:hello@example.com">
                        <i className="feather-mail" />
                        example@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade  show"
              id="team-tab5"
              role="tabpanel"
              aria-labelledby="team-tab5-tab"
            >
              <div className="inner">
                <div className="rbt-team-thumbnail">
                  <div className="thumb">
                    <Image
                      alt="Testimonial Images"
                    
                      width={415}
                      height={555}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Fteam%2Fteam-06.jpg&w=640&q=75 1x, /_next/image?url=%2Fimages%2Fteam%2Fteam-06.jpg&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Fteam%2Fteam-06.jpg&w=1080&q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
                <div className="rbt-team-details">
                  <div className="author-info">
                    <h4 className="title">Thomas Dal</h4>
                    <span className="designation theme-gradient">
                      English Teacher
                    </span>
                    <span className="team-form">
                      <i className="feather-map-pin" />
                      <span className="location">CO Miego, AD,USA</span>
                    </span>
                  </div>
                  <p>
                    You can run Histudy easily. Any School, University, College
                    can be use this histudy education template for their
                    educational purpose. A university can be success you.
                  </p>
                  <ul className="social-icon social-default mt--20 justify-content-start">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="feather-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com">
                        <i className="feather-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="feather-instagram" />
                      </a>
                    </li>
                  </ul>
                  <ul className="rbt-information-list mt--25">
                    <li>
                      <a href="/01-main-demo#">
                        <i className="feather-phone" />
                        +1-202-555-0174
                      </a>
                    </li>
                    <li>
                      <a href="mailto:hello@example.com">
                        <i className="feather-mail" />
                        example@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade  show"
              id="team-tab6"
              role="tabpanel"
              aria-labelledby="team-tab6-tab"
            >
              <div className="inner">
                <div className="rbt-team-thumbnail">
                  <div className="thumb">
                    <Image
                      alt="Testimonial Images"
                    
                      width={415}
                      height={555}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Fteam%2Fteam-07.jpg&w=640&q=75 1x, /_next/image?url=%2Fimages%2Fteam%2Fteam-07.jpg&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Fteam%2Fteam-07.jpg&w=1080&q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
                <div className="rbt-team-details">
                  <div className="author-info">
                    <h4 className="title">Irma J. Erwin</h4>
                    <span className="designation theme-gradient">
                      English Teacher
                    </span>
                    <span className="team-form">
                      <i className="feather-map-pin" />
                      <span className="location">CO Miego, AD,USA</span>
                    </span>
                  </div>
                  <p>
                    You can run Histudy easily. Any School, University, College
                    can be use this histudy education template for their
                    educational purpose. A university can be success you.
                  </p>
                  <ul className="social-icon social-default mt--20 justify-content-start">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="feather-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com">
                        <i className="feather-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="feather-instagram" />
                      </a>
                    </li>
                  </ul>
                  <ul className="rbt-information-list mt--25">
                    <li>
                      <a href="/01-main-demo#">
                        <i className="feather-phone" />
                        +1-202-555-0174
                      </a>
                    </li>
                    <li>
                      <a href="mailto:hello@example.com">
                        <i className="feather-mail" />
                        example@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade  show"
              id="team-tab7"
              role="tabpanel"
              aria-labelledby="team-tab7-tab"
            >
              <div className="inner">
                <div className="rbt-team-thumbnail">
                  <div className="thumb">
                    <Image
                      alt="Testimonial Images"
               
                      width={415}
                      height={555}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Fteam%2Fteam-08.jpg&w=640&q=75 1x, /_next/image?url=%2Fimages%2Fteam%2Fteam-08.jpg&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Fteam%2Fteam-08.jpg&w=1080&q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
                <div className="rbt-team-details">
                  <div className="author-info">
                    <h4 className="title">John Due</h4>
                    <span className="designation theme-gradient">
                      English Teacher
                    </span>
                    <span className="team-form">
                      <i className="feather-map-pin" />
                      <span className="location">CO Miego, AD,USA</span>
                    </span>
                  </div>
                  <p>
                    You can run Histudy easily. Any School, University, College
                    can be use this histudy education template for their
                    educational purpose. A university can be success you.
                  </p>
                  <ul className="social-icon social-default mt--20 justify-content-start">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="feather-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com">
                        <i className="feather-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="feather-instagram" />
                      </a>
                    </li>
                  </ul>
                  <ul className="rbt-information-list mt--25">
                    <li>
                      <a href="/01-main-demo#">
                        <i className="feather-phone" />
                        +1-202-555-0174
                      </a>
                    </li>
                    <li>
                      <a href="mailto:hello@example.com">
                        <i className="feather-mail" />
                        example@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade  show"
              id="team-tab8"
              role="tabpanel"
              aria-labelledby="team-tab8-tab"
            >
              <div className="inner">
                <div className="rbt-team-thumbnail">
                  <div className="thumb">
                    <Image
                      alt="Testimonial Images"
                 
                      width={415}
                      height={555}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Fteam%2Fteam-09.jpg&w=640&q=75 1x, /_next/image?url=%2Fimages%2Fteam%2Fteam-09.jpg&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Fteam%2Fteam-09.jpg&w=1080&q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
                <div className="rbt-team-details">
                  <div className="author-info">
                    <h4 className="title">Joo Bieden</h4>
                    <span className="designation theme-gradient">
                      English Teacher
                    </span>
                    <span className="team-form">
                      <i className="feather-map-pin" />
                      <span className="location">CO Miego, AD,USA</span>
                    </span>
                  </div>
                  <p>
                    You can run Histudy easily. Any School, University, College
                    can be use this histudy education template for their
                    educational purpose. A university can be success you.
                  </p>
                  <ul className="social-icon social-default mt--20 justify-content-start">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="feather-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com">
                        <i className="feather-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="feather-instagram" />
                      </a>
                    </li>
                  </ul>
                  <ul className="rbt-information-list mt--25">
                    <li>
                      <a href="/01-main-demo#">
                        <i className="feather-phone" />
                        +1-202-555-0174
                      </a>
                    </li>
                    <li>
                      <a href="mailto:hello@example.com">
                        <i className="feather-mail" />
                        example@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade  show"
              id="team-tab9"
              role="tabpanel"
              aria-labelledby="team-tab9-tab"
            >
              <div className="inner">
                <div className="rbt-team-thumbnail">
                  <div className="thumb">
                    <Image
                      alt="Testimonial Images"
                      width={415}
                      height={555}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Fteam%2Fteam-10.jpg&w=640&q=75 1x, /_next/image?url=%2Fimages%2Fteam%2Fteam-10.jpg&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Fteam%2Fteam-10.jpg&w=1080&q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
                <div className="rbt-team-details">
                  <div className="author-info">
                    <h4 className="title">Alejandro</h4>
                    <span className="designation theme-gradient">
                      English Teacher
                    </span>
                    <span className="team-form">
                      <i className="feather-map-pin" />
                      <span className="location">CO Miego, AD,USA</span>
                    </span>
                  </div>
                  <p>
                    You can run Histudy easily. Any School, University, College
                    can be use this histudy education template for their
                    educational purpose. A university can be success you.
                  </p>
                  <ul className="social-icon social-default mt--20 justify-content-start">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="feather-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com">
                        <i className="feather-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="feather-instagram" />
                      </a>
                    </li>
                  </ul>
                  <ul className="rbt-information-list mt--25">
                    <li>
                      <a href="/01-main-demo#">
                        <i className="feather-phone" />
                        +1-202-555-0174
                      </a>
                    </li>
                    <li>
                      <a href="mailto:hello@example.com">
                        <i className="feather-mail" />
                        example@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="top-circle-shape" />
          </div>
        </div>
        <div className="col-lg-5">
          <ul
            className="rbt-team-tab-thumb nav nav-tabs"
            id="myTab"
            role="tablist"
          >
            <li>
              <a
                className="active"
                id="team-tab0-tab"
                data-bs-toggle="tab"
                data-bs-target="#team-tab0"
                role="tab"
                aria-controls="team-tab0"
                aria-selected="true"
                href="/01-main-demo#"
              >
                <div className="rbt-team-thumbnail">
                  <div className="thumb">
                    <Image
                      alt="Testimonial Images"
                  
                      width={415}
                      height={555}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Fteam%2Fteam-01.jpg&w=640&q=75 1x, /_next/image?url=%2Fimages%2Fteam%2Fteam-01.jpg&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Fteam%2Fteam-01.jpg&w=1080&q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                className=""
                id="team-tab1-tab"
                data-bs-toggle="tab"
                data-bs-target="#team-tab1"
                role="tab"
                aria-controls="team-tab1"
                aria-selected="false"
                href="/01-main-demo#"
              >
                <div className="rbt-team-thumbnail">
                  <div className="thumb">
                    <Image
                      alt="Testimonial Images"
                    
                      width={415}
                      height={555}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Fteam%2Fteam-02.jpg&w=640&q=75 1x, /_next/image?url=%2Fimages%2Fteam%2Fteam-02.jpg&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Fteam%2Fteam-02.jpg&w=1080&q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                className=""
                id="team-tab2-tab"
                data-bs-toggle="tab"
                data-bs-target="#team-tab2"
                role="tab"
                aria-controls="team-tab2"
                aria-selected="false"
                href="/01-main-demo#"
              >
                <div className="rbt-team-thumbnail">
                  <div className="thumb">
                    <Image
                      alt="Testimonial Images"
                 
                      width={415}
                      height={555}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Fteam%2Fteam-03.jpg&w=640&q=75 1x, /_next/image?url=%2Fimages%2Fteam%2Fteam-03.jpg&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Fteam%2Fteam-03.jpg&w=1080&q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                className=""
                id="team-tab3-tab"
                data-bs-toggle="tab"
                data-bs-target="#team-tab3"
                role="tab"
                aria-controls="team-tab3"
                aria-selected="false"
                href="/01-main-demo#"
              >
                <div className="rbt-team-thumbnail">
                  <div className="thumb">
                    <Image
                      alt="Testimonial Images"
                     
                      width={415}
                      height={555}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Fteam%2Fteam-04.jpg&w=640&q=75 1x, /_next/image?url=%2Fimages%2Fteam%2Fteam-04.jpg&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Fteam%2Fteam-04.jpg&w=1080&q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                className=""
                id="team-tab4-tab"
                data-bs-toggle="tab"
                data-bs-target="#team-tab4"
                role="tab"
                aria-controls="team-tab4"
                aria-selected="false"
                href="/01-main-demo#"
              >
                <div className="rbt-team-thumbnail">
                  <div className="thumb">
                    <Image
                      alt="Testimonial Images"
                   
                      width={415}
                      height={555}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Fteam%2Fteam-05.jpg&w=640&q=75 1x, /_next/image?url=%2Fimages%2Fteam%2Fteam-05.jpg&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Fteam%2Fteam-05.jpg&w=1080&q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                className=""
                id="team-tab5-tab"
                data-bs-toggle="tab"
                data-bs-target="#team-tab5"
                role="tab"
                aria-controls="team-tab5"
                aria-selected="false"
                href="/01-main-demo#"
              >
                <div className="rbt-team-thumbnail">
                  <div className="thumb">
                    <Image
                      alt="Testimonial Images"
             
                      width={415}
                      height={555}
                      decoding="async"
                      data-nimg={1}
                      //"/_next/image?url=%2Fimages%2Fteam%2Fteam-06.jpg&w=640&q=75 1x, /_next/image?url=%2Fimages%2Fteam%2Fteam-06.jpg&w=1080&q=75 2x"
                      src="/_next/image?url=%2Fimages%2Fteam%2Fteam-06.jpg&w=1080&q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="rbt-rbt-blog-area rbt-section-gap bg-color-extra2">
    <div className="container">
      <div className="row g-5 align-items-center mb--30">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="section-title">
            <span className="subtitle bg-pink-opacity">Blog Post</span>
            <h2 className="title">Post Popular Post.</h2>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="read-more-btn text-start text-md-end">
            <a className="rbt-btn btn-gradient hover-icon-reverse" href="/blog">
              <div className="icon-reverse-wrapper">
                <span className="btn-text">See All Articles</span>
                <span className="btn-icon">
                  <i className="feather-arrow-right" />
                </span>
                <span className="btn-icon">
                  <i className="feather-arrow-right" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="row g-5">
        <div
          className="col-lg-6 col-md-12 col-sm-12 col-12 sal-animate"
          data-sal-delay={150}
          data-sal="slide-up"
          data-sal-duration={800}
        >
          <div className="rbt-card variation-02 height-330 rbt-hover">
            <div className="rbt-card-img">
              <a href="/blog-details/15">
                <Image
                  alt="Card image"
               
                  width={580}
                  height={300}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2Fimages%2Fblog%2Fblog-card-01.jpg&w=640&q=75 1x, /_next/image?url=%2Fimages%2Fblog%2Fblog-card-01.jpg&w=1200&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Fblog%2Fblog-card-01.jpg&w=1200&q=75"
                  style={{ color: "transparent" }}
                />{" "}
              </a>
            </div>
            <div className="rbt-card-body">
              <h3 className="rbt-card-title">
                <a href="/blog-details/15">
                  How to Analyze Your Best Pages for SEO Performance
                </a>
              </h3>
              <p className="rbt-card-text">
                It is a long established fact that a reader.
              </p>
              <div className="rbt-card-bottom">
                <a className="transparent-button" href="/blog-details/15">
                  Learn More
                  <i>
                    <svg
                      width={17}
                      height={12}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g stroke="#27374D" fill="none" fillRule="evenodd">
                        <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                        <path strokeLinecap="square" d="M.663 5.572h14.594" />
                      </g>
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-6 col-md-12 col-sm-12 col-12 sal-animate"
          data-sal-delay={150}
          data-sal="slide-up"
          data-sal-duration={800}
        >
          <div className="rbt-card card-list variation-02 rbt-hover ">
            <div className="rbt-card-img">
              <a href="/blog-details/16">
                <Image
                  alt="Card image"
                
                  width={580}
                  height={300}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2Fimages%2Fblog%2Fblog-card-02.jpg&w=640&q=75 1x, /_next/image?url=%2Fimages%2Fblog%2Fblog-card-02.jpg&w=1200&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Fblog%2Fblog-card-02.jpg&w=1200&q=75"
                  style={{ color: "transparent" }}
                />{" "}
              </a>
            </div>
            <div className="rbt-card-body">
              <h5 className="rbt-card-title">
                <a href="/blog-details/16">Why Is Education So Famous?</a>
              </h5>
              <div className="rbt-card-bottom">
                <a className="transparent-button" href="/blog-details/16">
                  Read Article
                  <i>
                    <svg
                      width={17}
                      height={12}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g stroke="#27374D" fill="none" fillRule="evenodd">
                        <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                        <path strokeLinecap="square" d="M.663 5.572h14.594" />
                      </g>
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
          <div className="rbt-card card-list variation-02 rbt-hover mt--30">
            <div className="rbt-card-img">
              <a href="/blog-details/35">
                <Image
                  alt="Card image"
                 
                  width={580}
                  height={300}
                  decoding="async"
                  data-nimg={1}
                  //"/_next/image?url=%2Fimages%2Fblog%2Fblog-card-03.jpg&w=640&q=75 1x, /_next/image?url=%2Fimages%2Fblog%2Fblog-card-03.jpg&w=1200&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Fblog%2Fblog-card-03.jpg&w=1200&q=75"
                  style={{ color: "transparent" }}
                />{" "}
              </a>
            </div>
            <div className="rbt-card-body">
              <h5 className="rbt-card-title">
                <a href="/blog-details/35">Difficult Things About Education.</a>
              </h5>
              <div className="rbt-card-bottom">
                <a className="transparent-button" href="/blog-details/35">
                  Read Article
                  <i>
                    <svg
                      width={17}
                      height={12}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g stroke="#27374D" fill="none" fillRule="evenodd">
                        <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                        <path strokeLinecap="square" d="M.663 5.572h14.594" />
                      </g>
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
          <div className="rbt-card card-list variation-02 rbt-hover mt--30">
            <div className="rbt-card-img">
              <a href="/blog-details/18">
                <Image
                  alt="Card image"
                
                  width={580}
                  height={300}
                  decoding="async"
                  data-nimg={1}
                  // srcSet="/_next/image?url=%2Fimages%2Fblog%2Fblog-card-04.jpg&w=640&q=75 1x, /_next/image?url=%2Fimages%2Fblog%2Fblog-card-04.jpg&w=1200&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Fblog%2Fblog-card-04.jpg&w=1200&q=75"
                  style={{ color: "transparent" }}
                />{" "}
              </a>
            </div>
            <div className="rbt-card-body">
              <h5 className="rbt-card-title">
                <a href="/blog-details/18">Education Is So Famous, But Why?</a>
              </h5>
              <div className="rbt-card-bottom">
                <a className="transparent-button" href="/blog-details/18">
                  Read Article
                  <i>
                    <svg
                      width={17}
                      height={12}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g stroke="#27374D" fill="none" fillRule="evenodd">
                        <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                        <path strokeLinecap="square" d="M.663 5.572h14.594" />
                      </g>
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="rbt-newsletter-area newsletter-style-2 bg-color-primary rbt-section-gap">
    <div className="container">
      <div className="row row--15 align-items-center">
        <div className="col-lg-12">
          <div className="inner text-center">
            <div className="section-title text-center">
              <span className="subtitle bg-white-opacity">
                Get Latest Histudy Update
              </span>
              <h2 className="title color-white">
                <strong>Subscribe</strong> Our Newsletter
              </h2>
              <p className="description color-white mt--20">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
                explicabo sit est eos earum reprehenderit inventore nam autem
                corrupti rerum!
              </p>
            </div>
            <form action="#" className="newsletter-form-1 mt--40">
              <input type="email" placeholder="Enter Your E-Email" />
              <button
                type="submit"
                className="rbt-btn btn-md btn-gradient hover-icon-reverse"
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Subscribe</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right" />
                  </span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right" />
                  </span>
                </span>
              </button>
            </form>
            <span className="note-text color-white mt--20">
              No ads, No trails, No commitments
            </span>
            <div className="row row--15 mt--50">
              <div className="col-lg-3 col-sm-6 col-md-6 single-counter offset-lg-3">
                <div className="rbt-counterup rbt-hover-03 style-2 text-color-white">
                  <div className="inner">
                    <div className="content">
                      <h3 className="counter color-white">
                        <span className="odometer">
                          <div className="odometer odometer-auto-theme">
                            <div className="odometer-inside">
                              <span className="odometer-digit">
                                <span className="odometer-digit-spacer">8</span>
                                <span className="odometer-digit-inner">
                                  <span className="odometer-ribbon">
                                    <span className="odometer-ribbon-inner">
                                      <span className="odometer-value">5</span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                              <span className="odometer-digit">
                                <span className="odometer-digit-spacer">8</span>
                                <span className="odometer-digit-inner">
                                  <span className="odometer-ribbon">
                                    <span className="odometer-ribbon-inner">
                                      <span className="odometer-value">0</span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                              <span className="odometer-digit">
                                <span className="odometer-digit-spacer">8</span>
                                <span className="odometer-digit-inner">
                                  <span className="odometer-ribbon">
                                    <span className="odometer-ribbon-inner">
                                      <span className="odometer-value">0</span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </div>
                          </div>
                        </span>
                      </h3>
                      <h5 className="title color-white">
                        Successfully Trained
                      </h5>
                      <span className="subtitle color-white">
                        Learners &amp; counting
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-6 single-counter single-counter">
                <div className="rbt-counterup rbt-hover-03 style-2 text-color-white">
                  <div className="inner">
                    <div className="content">
                      <h3 className="counter color-white">
                        <span className="odometer">
                          <div className="odometer odometer-auto-theme">
                            <div className="odometer-inside">
                              <span className="odometer-digit">
                                <span className="odometer-digit-spacer">8</span>
                                <span className="odometer-digit-inner">
                                  <span className="odometer-ribbon">
                                    <span className="odometer-ribbon-inner">
                                      <span className="odometer-value">1</span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                              <span className="odometer-digit">
                                <span className="odometer-digit-spacer">8</span>
                                <span className="odometer-digit-inner">
                                  <span className="odometer-ribbon">
                                    <span className="odometer-ribbon-inner">
                                      <span className="odometer-value">0</span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                              <span className="odometer-digit">
                                <span className="odometer-digit-spacer">8</span>
                                <span className="odometer-digit-inner">
                                  <span className="odometer-ribbon">
                                    <span className="odometer-ribbon-inner">
                                      <span className="odometer-value">0</span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </div>
                          </div>
                        </span>
                      </h3>
                      <h5 className="title color-white">
                        Certification Students
                      </h5>
                      <span className="subtitle color-white">
                        Online Course
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

}
