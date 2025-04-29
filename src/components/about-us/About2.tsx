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
                  Somos GA Instalaciones Comerciales, una empresa con más de 17 años de trayectoria en Uruguay y presencia internacional a través de nuestra base operativa en Panamá.                  
                  </p>
                </div>
                <p>
                  Brindamos soluciones integrales en equipamiento industrial para panaderías, gastronomía, supermercados, cámaras de frío, góndolas, fabricadoras de hielo y más.
                </p>
                <p>
                  Nos especializamos en la representación directa de fábrica y en la distribución de marcas blancas, adaptadas a las necesidades específicas de cada cliente y mercado. Ofrecemos una respuesta personalizada y contamos con capacidad de entrega a nivel global.
                </p>
                <p>
                  Disponemos de showrooms en Uruguay y Panamá, donde nuestros equipos pueden verse en funcionamiento y nuestros asesores técnicos brindan acompañamiento profesional.
                </p>
                <p>
                  Actualmente, estamos ampliando nuestra red internacional de distribuidores e importadores, trabajando para acercar nuestras soluciones a nuevos mercados.
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
