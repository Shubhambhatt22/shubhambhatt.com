import Link from "next/link";

const Banner = ( { bgImage} ) => {
  return (
    <div className="mil-section mil-banner mil-banner-right">
      <div className="container-full">
        <div className="row no-gutters align-items-center justify-content-between">
          <div className="col-xl-7">
            <div className="mil-p-120-120">
              <div
                className="mil-banner-text"
                data-swiper-parallax-y={-600}
                data-swiper-parallax-duration={600}
              >
                <div
                  className="mil-bg-title-boxed"
                  style={{ top: 0, left: "-82%" }}
                />
                <p className="mil-upper mil-mb-30">
                  Web Developer <span className="mil-accent">and</span> Graphic Designer
                </p>
                <h1 className="mil-up mil-mb-40">Shubham Bhatt</h1>
                <div className="mil-short mil-left-offset">
                  <p className="mil-mb-30">
                    From Kotdwar, Uttarakhand currently Living in Noida. I have 2 years of IT experience in web design and Development.
                  </p>
                  <div className="mil-buttons-frame">
                    <Link legacyBehavior href="/portfolio">
                      <a className="mil-button mil-type-2">Portfolio</a>
                    </Link>
                    <Link legacyBehavior href="/contact">
                      <a className="mil-button">Contact me</a>
                    </Link>
                    <Link legacyBehavior href="resume/Shubham_resume.pdf" download target="_blank">
                      <a className="mil-button">Download CV</a>
                    </Link>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <img
              src={bgImage}
              alt="face"
              className="mil-banner-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;

export const Banner2 = () => {
  return (
    <div className="mil-section mil-banner">
      <div className="container-full">
        <div className="row no-gutters align-items-center justify-content-between flex-sm-row-reverse">
          <div className="col-xl-7">
            <div className="mil-p-120-120">
              <div
                className="mil-banner-text"
                data-swiper-parallax-y={-600}
                data-swiper-parallax-duration={600}
              >
                <div
                  className="mil-bg-title-boxed"
                  style={{ top: 0, left: "-82%" }}
                />
                <p className="mil-upper mil-mb-30">
                  Graphic <span className="mil-accent">and</span> Web Developer
                </p>
                <h1 className="mil-up mil-mb-40">Devies Byrne</h1>
                <div className="mil-short mil-left-offset">
                  <p className="mil-mb-30">
                    From France, Paris. I have rich experience in web design,
                    also I am good at wordpress. I love to talk with you about
                    our unique.
                  </p>
                  <div className="mil-buttons-frame">
                    <Link legacyBehavior href="/portfolio">
                      <a className="mil-button mil-type-2">Portfolio</a>
                    </Link>
                    <Link legacyBehavior href="/contact">
                      <a className="mil-button">Contact me</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <img
              src="img/faces/6.jpg"
              alt="face"
              className="mil-banner-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
