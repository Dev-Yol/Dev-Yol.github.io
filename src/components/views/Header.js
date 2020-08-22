import React from "react";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  render() {
    return (
      <>
        <div className="header-wrapper" id="home">
          <section className="hero is-large">
            {/* Begin Mobile Nav */}
            <nav className="navbar is-transparent is-hidden-desktop">
              {/* Begin Burger Menu */}
              <div className="navbar-brand">
                <div
                  className="navbar-burger burger"
                  onClick={() => {
                    this.setState({ isActive: !this.state.isActive });
                  }}
                  data-target="mobile-nav"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              {/* End Burger Menu */}
              <div
                id="mobile-nav"
                className={`navbar-menu ${
                  this.state.isActive ? "is-active" : ""
                }`}
              >
                <div className="navbar-end">
                  {this.props.menu.map((item, idx) => {
                    return (
                      <div className="navbar-item" key={idx}>
                        <a
                          className="navbar-item"
                          href={"#" + item.toLowerCase().replace(" ", "-")}
                          onClick={() => {
                            this.setState({ isActive: !this.state.isActive });
                          }}
                        >
                          {item.toLocaleUpperCase()}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </nav>
            {/* End Mobile Nav */}
            {/* Begin Hero Content*/}
            <div
              className="hero-body"
              // data-aos="fade-right"
              // data-aos-duration="1000"
              // data-aos-mirror="true"
              // data-aos-once="false"
            >
              <div className="has-text-centered ">
                <h1 className="subtitle greetings">Hey there, I'm</h1>
                <h1 className="title header-name">
                  {[..."Yol"].map((el, idx) => {
                    return (
                      <span key={idx} className="letters is-shaking">
                        {el}
                      </span>
                    );
                  })}
                </h1>
                <div className="typewriter">
                  <h1 className="subtitle profession" id="profession">
                    Web Developer
                 </h1>
                </div>
              </div>
            </div>
            {/* End Hero Content*/}
            {/* Begin Hero Menu */}

            {/* End Hero Menu */}
          </section>
          {/* End Hero */}
        </div>
      </>
    );
  }
}
