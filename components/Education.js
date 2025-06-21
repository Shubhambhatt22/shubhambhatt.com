const Education = () => {
  return (
    <div className="mil-section mil-op-space-90">
      <div
        className="mil-bg-item"
        style={{ bottom: "0%", left: "25%", transform: "rotate(-25deg)" }}
      />
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-5 mil-mb-60">
            <div className="mil-text-right-adapt">
              {/* <p className="mil-upper mil-mb-30">Certificates</p> */}
              <h2 className="mil-up mil-mb-60">Experience</h2>
              <p>
                Extensive experience in developing web applications using:
                HTML5, CSS3, SASS, JavaScript, React JS, Next JS, AntD, React
                Flow, Node.js, Express JS, mongoDB, .
              </p>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="mil-icon-box mil-mb-40">
              <div className="mil-text-icon">
                <a href="img/certificate.jpg" className="mfp-image">
                  +
                </a>
              </div>
              <div className="mil-box-text">
                <p className="mil-upper mil-text-lg mil-mb-15">
                  Software Developer
                </p>
                <p className="mil-upper mil-upper-sm mil-mb-30">
                  April 2024 <span className="mil-accent">to</span> Present
                </p>
                <p>
                  Built and delivered multiple full-stack web applications,
                  including a Next.js platform for buying and selling unlisted
                  shares with complete role-based Admin, Vendor, and Client
                  portals. Developed “Draax Fashions,” a dynamic e-commerce app
                  with real-time filtering, user reviews, and cart features.
                  Created several responsive React.js apps optimized for SEO and
                  mobile-first UX. Also engineered a no-code WhatsApp Chat Flow
                  Builder using ReactFlow, enabling users to visually design
                  interactive, ad-style message sequences.
                </p>
              </div>
            </div>
            <div className="mil-icon-box mil-mb-40">
              <div className="mil-text-icon">
                <a href="img/certificate.jpg" className="mfp-image">
                  +
                </a>
              </div>
              <div className="mil-box-text">
                <p className="mil-upper mil-text-lg mil-mb-15">
                 Shivila Technologies
                </p>
                <p className="mil-upper mil-upper-sm mil-mb-30">
                  Sept 2023 <span className="mil-accent">to</span> Nov 2023
                </p>
                <p>
              Designed and implemented an admin panel for a grocery website using React, streamlining operations and improving management efficiency. Contributed to a housing booking platform with a focus on usability and intuitive UI/UX design.


                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
