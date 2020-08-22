import React from "react";
import { TextInput, Field } from "components/Form";
import { mdiAccount, mdiEmail } from "@mdi/js";
export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      message: ""
    };
  }
  render() {
    return (
      <>
        <div className="section-light contact" id="contact">
          <div className="container">
            <div
              className="columns is-multiline"
              data-aos="fade-in-up"
              data-aos-easing="linear"
            >
              <div className="column is-12 about-me">
                <h1 className="title has-text-centered section-title">
                  Get in touch
                </h1>
              </div>
              <div className="column is-8 is-offset-2">
                <form>
                  <TextInput
                    label="Name"
                    placeholder="Ex. Jane Smith"
                    value={this.state.email}
                    isIcon={{ show: true, name: mdiAccount, float: "left" }}
                    onChange={e => {
                      console.log(e.target.value);
                    }}
                  />
                  <TextInput
                    label="Email"
                    type="email"
                    placeholder="Ex. johndoe@email.com"
                    value={this.state.email}
                    isIcon={{ show: true, name: mdiEmail, float: "left" }}
                    onChange={e => {
                      console.log(e.target.value);
                    }}
                  />
                  <Field>
                    <label className="label">Message</label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        placeholder="Textarea"
                        name="Message"
                      ></textarea>
                    </div>
                  </Field>
                  <Field>
                    <div className="control ">
                      <button className="button submit-button">
                        Submit&nbsp;&nbsp;
                        <i className="fas fa-paper-plane"></i>
                      </button>
                    </div>
                  </Field>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
