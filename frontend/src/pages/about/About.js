import React from "react";
import "./about.css"

export default function About() {
    return (
        <>
          <div className="header">
            <img
              className="headerImg"
              src="https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <div className="headerTitles">
              <span className="headerTitleLg">About Us</span>
            </div>
          </div>
          <section className="dashboard-sections">
            <div className="section-1-container mt-5">
              <h1 className="text-center">Get to know us</h1>
              <div className="wrapper d-flex justify-content-center flex-wrap justify  mt-5 smallfont">
                <p>
                  Founded in 2021 in Guadalajara, Endurance.com has grown from a
                  small school project to a less small school project.
                  Endurance.com’s mission is to get a decent grade to make hours of
                  missed sleep feel at least somewhat worthwhile.
                </p>
                <p>
                  By investing in coffee that makes us developers work an
                  unacceptable amount of hours, Endurance.com barely does just
                  enough of what it is supposed to do, which is showing only a
                  couple of curated destinations because we all know tourists are
                  basic and they only visit the same five locations.
                </p>
                <p>
                  Endurance.com is available in an astonishing 1 language because
                  bilingualism costs extra and we are too poor and cheap to pay for
                  a translator. Anyway, enjoy our site, because we are way too sleep
                  deprived to do so ourselves.
                </p>
              </div>
            </div>
          </section>
    </>
    );
}