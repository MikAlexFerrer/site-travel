import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleLg">Contact Us</span>
        </div>
      </div>
      <section className="dashboard-sections">
        <div className="section-1-container mt-5">
          <h1 className="text-center">Contact information</h1>

          <div className="wrapper d-flex justify-content-center flex-wrap">
            <div>
              <div className="contact-1-content contact-img-1"></div>
              <div className="info">Calzada Nueva 49, Ciudad Granja, 45010 Zapopan, Jal.</div>
            </div>
            <div>
              <div className="contact-1-content contact-img-2"></div>
              <div className="info">33 3122 2800</div>
            </div><div>
              <div className="contact-1-content contact-img-3"></div>
              <div className="info">webmasters69@gmail.com</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}