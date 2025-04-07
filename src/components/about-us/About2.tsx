import React from "react";
import { Col, Row } from "react-bootstrap";

const About = () => {
  return (
    <>
      <section className="gi-about padding-tb-40">
        <div className="container">
          <Row>
            <Col xl={6} md={12}>
              <div className="gi-about-img">
                <img
                  src={
                    process.env.NEXT_PUBLIC_URL + "/assets/img/common/about.png"
                  }
                  className="v-img"
                  alt="about"
                />
                <img
                  src={
                    process.env.NEXT_PUBLIC_URL +
                    "/assets/img/common/about-2.png"
                  }
                  className="h-img"
                  alt="about"
                />
                <img
                  src={
                    process.env.NEXT_PUBLIC_URL +
                    "/assets/img/common/about-3.png"
                  }
                  className="h-img"
                  alt="about"
                />
              </div>
            </Col>
            <Col xl={6} md={12}>
              <div className="gi-about-detail">
                <div className="section-title">
                  <h2>
                    Quienés <span>Somos?</span>
                  </h2>
                  <p>
                  G.A Instalaciones comerciales, es una empresa que lleva 14 años comercializando equipos gastronómicos y de supermercados en todo el país.
                  </p>
                </div>
                <p>
                  Actualmente se encuentra inmersa en grandes proyectos y desafíos relacionados con la tecnología de vanguardia. Es con esta tecnología que se busca liderar en el mercado, así como también desarrollar y cuidar grandes y pequeñas inversiones.
                </p>
                <p>
                  El objetivo es mejorar la productividad y funcionamiento laboral de cada empresa que deposita su confianza. Para lograr esto, el equipo técnico y humano se encuentra en constante crecimiento y capacitación.
                </p>
                <p>
                  Soy Gustavo Álvarez, creador y director de G.A y L.C.A Instalaciones comerciales.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default About;
