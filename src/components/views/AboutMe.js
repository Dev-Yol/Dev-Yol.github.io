import React, { useState } from "react";
export default function AboutMe() {
  let info = [
    {
      title: "Give me a ring",
      value: "+63 951 626 9928"
    },
    {
      title: "Email Me",
      value: "yoltorres24@gmail.com"
    }
  ];
  const [hovered, sethovered] = useState(false);
  let handleHover = () => {
    sethovered(!hovered);
  };
  return (
    <>
      <div className="section-light about-me" id="about-me">
        <div className="container">
          <div className="column is-12 about-me">
            <h1 className="title has-text-centered section-title">About Me</h1>
          </div>
          <div className="columns is-multiline">
            <div
              className="column is-6 has-vertically-aligned-content"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <p className="about has-text-justified	">
                &emsp;&emsp;
                <sup className="is-larger quotes">
                  <strong>&#10077;</strong>
                </sup>
                Hi! My name is Yol Torres , and I am a junior Web Developer and
                a freelancer.I have diverse set of skills inline with the latest
                trends and technology , ranging from design to HTML + CSS +
                Javascript ,and also with Vue JS , React JS , all the way to PHP
                Laravel , Node JS and ASP.net.I enjoy building web applications
                from small business sites to rich interactive applications.If
                you are a business seeking for a web presence or any employer
                looking a developer to hire , you can get in touch with me here.
              </p>
              <br />
              <div className="is-divider"></div>
              <div className="columns about-links">
                {info.map(function(item, index) {
                  return (
                    <div className="column" key={index}>
                      <p className="heading">
                        <strong>{item.title}</strong>
                      </p>
                      <p className="subheading">{item.value}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className="column is-6 right-image "
              data-aos-duration="500"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos="fade-left"
              onMouseOverCapture={handleHover}
              onMouseOutCapture={handleHover}
            >
              <div className="card">
                <img
                  className="is-rounded"
                  src={require("assets/img/about.jpg")}
                  alt="profile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
