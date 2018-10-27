import React, { Component } from "react";
import { Link } from "react-scroll";
import CircularProgressbar from "react-circular-progressbar";
import AOS from "aos";
import Hexagon from './hexagon'
import macbookIMG from "../../../assets/images/macbook.png";
import jordanIMG from "../../../assets/images/jordan.png";
import glassesIMG from "../../../assets/images/glasses.png";
import utensilsIMG from "../../../assets/images/utensils.png";
import gymIMG from "../../../assets/images/gym.png";
import noteIMG from "../../../assets/images/note.png";
import learnIMG from "../../../assets/images/learn.png";
import binaryIMG from "../../../assets/images/binary.png";
import "aos/dist/aos.css";
import "react-circular-progressbar/dist/styles.css";
import "./about.css";

AOS.init({
  duration: 1000
});

export class About extends Component {
  state = {
    animate: false
  };
  componentDidUpdate() {
    const skills = document.getElementById("skills").getBoundingClientRect().y;
    if (this.state.animate === false && skills < 520) {
      this.setState({ animate: true });
    }
  }
  render() {


    return (
      <React.Fragment>
        <div id="about" className="about-wrapper">
          <div className="container-fluid">
            <h1>My name is Jeff</h1>
            <div className="row about-first">
              <div className="col-sm-12 col-md-5">
                <div data-aos="fade-up" className="about-items about-intro">
                  <h2>
                    Hard Work Beats Talent
                    <br />
                    When Talent Fails To Work Hard
                  </h2>
                  <p>
                  Jefferson Jiao is an aspiring full-stack developer who specializes in back-end development.
                  He enjoys designing and developing web and mobile applications that will showcase a client’s brand.
                  Jefferson loves a good challenge and is willing to adapt to any changes and 
                  requests if necessary to ensure satisfaction with his work. 
                  He is always seeking for improvement, new ideas, and new concepts to learn – 
                  just about anything that will enhance his skills. He is eager for growth in this fast-paced 
                  industry because it will push him to overcome challenges and become a skilled developer who is willing 
                  to put his best work with every client.
                  </p>
                  <Link
                    className="btn"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div className="col-sm-12 col-md-7">
                <div className="row">
                  <div className="col-sm-12 col-md-4">
                    <div
                      data-aos="fade-up"
                      className="about-items item-content"
                    >
                      <img
                        src={macbookIMG}
                        width="200px"
                        height="auto"
                        alt="macbook"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4">
                    <div
                      data-aos="fade-up"
                      className="about-items item-content"
                    >
                      <img
                        src={jordanIMG}
                        width="200px"
                        height="auto"
                        alt="jordan"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4">
                    <div
                      data-aos="fade-up"
                      className="about-items item-content"
                    >
                      <img
                        src={utensilsIMG}
                        width="200px"
                        height="auto"
                        alt="utensils"
                      />
                    </div>
                  </div>
                </div>
                <div className="row row-eq-height">
                  <div className="col-sm-12 col-md-7">
                    <div
                      data-aos="fade-up"
                      className="about-items item-content"
                    >
                      <img
                        src={glassesIMG}
                        width="200px"
                        height="auto"
                        alt="glasses"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-5">
                    <div
                      data-aos="fade-up"
                      className="about-items item-content"
                    >
                      <img src={gymIMG} width="200px" height="auto" alt="gym" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-4">
                    <div
                      data-aos="fade-up"
                      className="about-items item-content"
                    >
                      <img
                        src={binaryIMG}
                        width="120px"
                        height="auto"
                        alt="binary"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4">
                    <div
                      data-aos="fade-up"
                      className="about-items item-content"
                    >
                      <img
                        src={noteIMG}
                        width="120px"
                        height="auto"
                        alt="note"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4">
                    <div
                      data-aos="fade-up"
                      className="about-items item-content"
                    >
                      <img
                        src={learnIMG}
                        width="200px"
                        height="auto"
                        alt="learn"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="skills" className="row about-skills">
                <div className="col-12">
                  <h2>SKILLS</h2>
                </div>
                <div className="col-sm-12 col-md-8 offset-md-2">
                <div className="row about-second">
                  <div data-aos="fade-up" className="col-sm-12 col-md-4">
                    <h5>HTML/CSS</h5>
                    <div className="progress-bar">
                      {this.state.animate ? (
                        <CircularProgressbar
                          percentage={95}
                          text="95%"
                          initialAnimation="true"
                          background="true"
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div data-aos="fade-up" className="col-sm-12 col-md-4">
                    <h5>Javascript</h5>
                    <div className="progress-bar">
                      {this.state.animate ? (
                        <CircularProgressbar
                          percentage={90}
                          text="90%"
                          initialAnimation="true"
                          background="true"
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div data-aos="fade-up" className="col-sm-12 col-md-4">
                    <h5>Database(MySQL,MongoDB)</h5>
                    <div className="progress-bar">
                      {this.state.animate ? (
                        <CircularProgressbar
                          percentage={90}
                          text="90%"
                          initialAnimation="true"
                          background="true"
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                </div>
                <div className="container-fluid other-skills-wrapper">
                      <div className="row other-skills">
                          <Hexagon/>
                      </div>
                </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
