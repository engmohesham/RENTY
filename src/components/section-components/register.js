import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class Register extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    function ownerSec() {
      let owner = document.getElementById("owner-div"),
        user = document.getElementById("user-div"),
        userBtn = document.getElementById("btn-user"),
        ownerBtn = document.getElementById("btn-owner");

      owner.classList.remove("hide");
      user.classList.add("hide");
      ownerBtn.classList.add("active-col");
      userBtn.classList.remove("active-col");
    }
    function userSec() {
      let owner = document.getElementById("owner-div"),
        user = document.getElementById("user-div"),
        userBtn = document.getElementById("btn-user"),
        ownerBtn = document.getElementById("btn-owner");

      owner.classList.add("hide");
      user.classList.remove("hide");
      ownerBtn.classList.remove("active-col");
      userBtn.classList.add("active-col");
    }

    const options_gender = [
      {
        label: "Male",
        value: "0",
      },
      {
        label: "Female",
        value: "1",
      },
    ];
    return (
      <div className="ltn__login-area pb-110 bg-overlay-black-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area text-center">
                <h1 className="section-title mt-50">
                  Register <br />
                  Your Account
                </h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
                  <br />
                  Sit aliquid, Non distinctio vel iste.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* <div className="user-pic col-lg-12 offset-3">
              <img src={publicUrl + "assets/img/team/4.png"}></img>
              <input type="file" name="userPic" accept=".jpg, .jpeg, .png" />
            </div> */}
            <form action="#" method="get" className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                  <div className="btn-wrapper text-center">
                    <a
                      className="theme-btn-3 btn w-25 btn-block"
                      id="btn-user"
                      type="button"
                      onClick={userSec}
                    >
                      CUSTOMER
                    </a>
                    <a
                      className="theme-btn-3 btn bo-l w-25 btn-block"
                      id="btn-owner"
                      type="button"
                      onClick={ownerSec}
                    >
                      OWNER
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="account-login-inner">
                    <form action="#" className="ltn__form-box contact-form-box">
                      <input
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                      />
                      <input
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                        required
                      />
                      <input
                        type="text"
                        name="email"
                        placeholder="Email*"
                        required
                      />
                      <input
                        type="number"
                        name="number"
                        placeholder="Phone"
                        required
                        maxLength={11}
                        autoComplete="off"
                        onKeyPress={function isnumber(evt) {
                          var ch = String.fromCharCode(evt.which);

                          if (!/[0-9]/.test(ch)) {
                            evt.preventDefault();
                          }
                        }}
                        oninput={
                          (this.value = this.value.replace(/[^0-9]/g, ""))
                        }
                      />
                      <input
                        type="password"
                        name="password"
                        placeholder="Password*"
                        required
                      />
                      <input
                        type="password"
                        name="confirmpassword"
                        placeholder="Confirm Password*"
                        required
                      />
                      <select
                        className="col-lg-12 w-100 mb-30 sel-edit nice-select"
                        required
                      >
                        <option selected disabled className="option">
                          Choose Gender
                        </option>
                        {options_gender.map((option) => (
                          <option className="option" value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 hide" id="owner-div">
                  <div className="account-login-inner">
                    <h1 className="section-tit w-50 text-center m-auto">
                      Owner Section
                    </h1>
                    <form
                      action="#"
                      className="ltn__form-box contact-form-box col-12"
                    >
                      <div className="row">
                        <input
                          type="text"
                          name="location"
                          placeholder="Location*"
                          className="col-lg-9 loc-inp"
                          autoComplete="off"
                          readOnly
                          required
                        />
                        <div className="loc-icon col-lg-2">
                          <i className="fa fa-location-dot"></i>
                        </div>
                        <div className="col-lg-12 pa-0">
                          <div className="mb-10 ltn__height-170">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd"
                              width="100%"
                              height="100%"
                              frameBorder={0}
                              allowFullScreen
                              aria-hidden="false"
                              tabIndex={0}
                            />
                          </div>
                        </div>
                        <input
                          type="text"
                          name="national"
                          placeholder="National ID*"
                          maxLength={14}
                          autoComplete="off"
                          required
                          onKeyPress={function isnumber(evt) {
                            if (!/[0-9]/.test(evt.key)) {
                              evt.preventDefault();
                            }
                          }}
                        />
                        <input
                          type="text"
                          name="username"
                          placeholder="User Name"
                          maxLength={16}
                          autoComplete="off"
                          required
                          onKeyPress={function isCorrect(evt) {
                            if (
                              !evt.key.match(/[a-zA-Z0-9-]/) ||
                              (evt.key == "-" &&
                                evt.target.value[evt.target.value.length - 1] ==
                                  "-")
                            ) {
                              evt.preventDefault();
                            }
                          }}
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 hide" id="user-div">
                  <div className="account-login-inner">
                    <h1 className="section-tit w-50 text-center m-auto">
                      Customer Section
                    </h1>
                    <form
                      action="#"
                      className="ltn__form-box contact-form-box col-12"
                    >
                      <div className="row">
                        <input
                          type="text"
                          name="location"
                          placeholder="Location*"
                          className="col-lg-9 loc-inp"
                          autoComplete="off"
                          readOnly
                          required
                        />
                        <div className="loc-icon col-lg-2">
                          <i className="fa fa-location-dot"></i>
                        </div>
                        <div className="col-lg-12 pa-0">
                          <div className="mb-10 ltn__height-170">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd"
                              width="100%"
                              height="100%"
                              frameBorder={0}
                              allowFullScreen
                              aria-hidden="false"
                              tabIndex={0}
                            />
                          </div>
                        </div>
                        <input
                          type="text"
                          name="national"
                          placeholder="National ID*"
                          maxLength={14}
                          autoComplete="off"
                          required
                          onKeyPress={function isnumber(evt) {
                            if (!/[0-9]/.test(evt.key)) {
                              evt.preventDefault();
                            }
                          }}
                        />
                        <input
                          type="text"
                          name="username"
                          placeholder="User Name"
                          maxLength={16}
                          autoComplete="off"
                          required
                          onKeyPress={function isCorrect(evt) {
                            if (
                              !evt.key.match(/[a-zA-Z0-9-]/) ||
                              (evt.key == "-" &&
                                evt.target.value[evt.target.value.length - 1] ==
                                  "-")
                            ) {
                              evt.preventDefault();
                            }
                          }}
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <label className="checkbox-inline col-lg-6 offset-lg-3 col-11 offset-1 lab-whi">
                  <input type="checkbox" defaultValue />
                  &nbsp; I consent to Herboil processing my personal data in
                  order to send personalized marketing material in accordance
                  with the consent form and the privacy policy.
                </label>
                <label className="checkbox-inline col-lg-6 offset-lg-3 col-11 offset-1 lab-whi">
                  <input type="checkbox" defaultValue /> &nbsp; By clicking
                  "create account", I consent to the privacy policy.
                </label>
                <div className="btn-wrapper text-center">
                  <button className="theme-btn-3 btn btn-block" type="submit">
                    CREATE ACCOUNT
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
