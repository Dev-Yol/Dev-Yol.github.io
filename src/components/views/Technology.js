import React from "react";
export default function Technology() {
  let skills = [
    "html.svg",
    "css.svg",
    "javascript.png",
    "nodeJS.png",
    "jquery.svg",
    "php.svg",
    "reactJS.png",
    "vueJS.png",
    "laravel.png",
    "asp.net.svg",
    "mySQL.svg",
    "mongoDB.png"
  ];
  return (
    <>
      <div className="section" id="skills">
        <div className="container">
          <div
            className="columns is-multiline"
            data-aos="fade-in"
            data-aos-easing="linear"
          >
            <div className="column is-12">
              <h1 className="title has-text-centered section-title">
                My Technologies
              </h1>
            </div>
            <div className="columns is-12 is-multiline">
              {skills.map((logo, idx) => {
                return (
                  <div className="column  is-2 " key={idx}>
                    <br />
                    <nav className="level">
                      <div className="level-item has-text-centered image-logo-container">
                        <figure
                          className="image is-96x96"
                          data-aos="zoom-in"
                          data-aos-duration="1000"
                          data-aos-mirror="true"
                          data-aos-once="false"
                        >
                          <img src={require(`assets/img/logo/${logo}`)} alt={logo} />
                        </figure>
                      </div>
                    </nav>
                  </div>
                );
              })}
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}
