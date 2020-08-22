import React from "react";
import Icon from "@mdi/react";
import {
  mdiDatabase,
  mdiDesktopMac,
  mdiFacebookMessenger,
  mdiCodeBraces
} from "@mdi/js";

export default function Services() {
  let services = [
    [
      {
        name: "Front End Web Development",
        icon: mdiDesktopMac,
        languages:
          "Develop Front End using latest standards with HTML5/CSS3 with added funtionality using JavaScript and modern JavaScript Frameworks like Vue JS and React JS ."
        // languages:
        //   "Languages used : Vue Js , HTML , CSS , Bootstrap , Material Design."
      },
      {
        name: "Back End Web Development",
        icon: mdiCodeBraces,
        languages:
          "Develop Back End application/service using Node.js ,PHP Laravel or ASP .NET and SQL server or Mongo DB databases."
        // languages: "Languages used : Python , Java , C# , Javascript"
      }
    ],
    [
      {
        name: "Database Management",
        icon: mdiDatabase,
        languages:
          "Manage and organize your data efficiently using the tranditional and the latest trends in technology"
      },
      {
        name: "Messenger ChatBot",
        icon: mdiFacebookMessenger,
        languages:
          "Develop Customized Interactive Messenger Chatbots for small businesses  , individuals or corporates. "
      }
    ]
  ];
  return (
    <section className="section-dark" id="services">
      <div className="section-heading has-text-centered">
        <h3 className="title is-2 ">Services</h3>
        <h4 className="subtitle is-5">What can I do for you?</h4>
        <br />
      </div>
      <div className="container  has-text-centered">
        {services.map((service, idx) => (
          <div className="columns has-same-height" key={idx}>
            {service.map((content, id) => (
              <div
                className="column  is-flex"
                data-aos={["flip-right", "flip-left"][id]}
                data-aos-duration="1000"
                data-aos-mirror="true"
                data-aos-once="false"
                key={id}
              >
                <div className="box  service-container">
                  <div className="content">
                    <Icon path={content.icon} size={3.5} />
                    <h4 className="title is-5">{content.name}</h4>
                    {content.languages}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
