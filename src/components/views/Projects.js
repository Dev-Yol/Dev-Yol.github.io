import React from "react";
import Card from "../Card";

export default function Projects() {
  let projects = [
    { name: "test1", description: "value", src: "value" },
    { name: "test2", description: "value", src: "value" },
    { name: "test3", description: "value", src: "value" }
  ];
  return (
    <>
      <div className="section-dark my-work" id="projects">
        <div className="container">
          <div
            className="columns is-multiline"
            data-aos="fade-in"
            data-aos-easing="linear"
          >
            <div className="column is-12">
              <h1 className="title has-text-centered section-title">My Work</h1>
            </div>

            {projects.map((project, idx) => {
              return (
                <div className="column is-4 tile" key={idx}>
                  <Card
                    {...{
                      title: project.name,
                      subtitle: project.description,
                      image: project.src
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
