import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { ReactComponent as AboutSVG } from "../../svg/about.svg";
import Typed from "react-typed";
import "./styles.css";

export default function About() {
  return (
    <Container>
      <Row>
        <Col lg={6} md={12}>
          <AboutSVG
            style={{
              width: "550px",
            }}
            className="mt-5"
          />
        </Col>
        <Col lg={6} md={12} className="m-auto">
          <h2>Hey there! My name is Halit Batur</h2>
          <p>
            I became interested in coding in my first year of university when I
            was studying Computer Engineering. At that time, I started learning
            C and C++. However, due to certain circumstances, I had to change my
            major to Industrial Engineering. In March 2020, I got a chance to
            join{" "}
            <a
              style={{
                color: "green",
                fontWeight: "bold",
              }}
              href="https://www.re-coded.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Re:Coded
            </a>{" "}
            Front End Web Development Bootcamp. Education took 5 months and it
            was a hard and interesting time. Upon my graduation from the
            program, I became familiar with a lot of technologies like{" "}
            <span>
              {" "}
              <Typed
                strings={[
                  "Redux",
                  "React",
                  "Javascript",
                  "Firebase",
                  "Material-UI",
                  "Bootstrap",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              ></Typed>
            </span>
          </p>
          <button className="button">
            CV
            <div className="button__horizontal"></div>
            <div className="button__vertical"></div>
          </button>
        </Col>
      </Row>
    </Container>
  );
}
