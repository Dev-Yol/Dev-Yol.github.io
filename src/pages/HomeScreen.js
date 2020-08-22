import React, { Component } from "react";
import "assets/css/homescreen.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Services from "components/views/Services";
import AboutMe from "components/views/AboutMe";
import Contact from "components/views/Contact";
import Header from "components/views/Header";
import Projects from "components/views/Projects";
import Technology from "components/views/Technology";
import Icon from "@mdi/react";
import { mdiArrowUp } from "@mdi/js";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    AOS.init({
      duration: 2000
    });
  }

  componentDidMount() {
    scrollFunction();
    if (window.location.hash.length) {
      window.location.href = window.location.hash;
    }
    window.onscroll = function() {
      scrollFunction();
    };
    function change(color) {
      let a = document.getElementsByClassName("my-link");
      for (var i = 0; i < a.length; i++) {
        a[i].style.color = color;
      }
    }
    function scrollFunction() {
      let myNav = document.getElementById("my-nav");
      const WHITE = "white";
      const BLACK = "black";
      if (document.documentElement.scrollTop >= 400) {
        myNav.style.backgroundColor = WHITE;
        myNav.style.boxShadow = "0 2px 15px rgba(0, 0, 0, 0.1)";
        change(BLACK);
      } else {
        myNav.style.backgroundColor = "transparent";
        myNav.style.boxShadow = null;
        change(WHITE);
      }
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        document.getElementById("fab-icon").style.display = "block";
      } else {
        document.getElementById("fab-icon").style.display = "none";
      }
    }
  }
  render() {
    let menu = [
      "home",
      "about me",
      "services",
      "skills",
      "projects",
      "contact"
    ];
    return (
      <>
        <a href="#home">
          <div className="my-fab-wrapper" id="fab-icon">
            <Icon
              path={mdiArrowUp}
              size={1.3}
              className="my-fab"
              color="white"
            ></Icon>
          </div>
        </a>
        <nav
          className="navbar hero-menu-desktop has-text-centered my-nav"
          id="my-nav"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-menu">
            <div className="navbar-end my-header">
              {menu.map((item, idx) => {
                let href = `#${item.toLowerCase().replace(" ", "-")}`;
                let active = window.location.hash === href;
                return (
                  <a
                    key={idx}
                    className={`${
                      active ? "is-active" : ""
                    } navbar-item is-tab my-link has-text-weight-light`}
                    href={href}
                  >
                    {item.toUpperCase()}
                  </a>
                );
              })}
            </div>
          </div>
        </nav>
        {/* Begin Header */}
        <Header menu={menu} />
        {/* End Header */}
        {/* Begin Main Content */}
        <div className="main-content">
          {/* Begin About Me Section */}
          <AboutMe />
          {/* End About Me Content */}
          {/* Begin Services Content */}
          <Services />
          {/* End Services Content */}
          {/* Begin Skills Content */}
          <Technology />
          {/* End Skills Content */}
          {/* Begin Work Content */}
          <Projects />
          {/* End Work Content */}
          {/* Begin Contact Content */}
          <Contact />
          {/* End Contact Content */}
        </div>
        {/* End Main Content */}
      </>
    );
  }
}

export default HomeScreen;
