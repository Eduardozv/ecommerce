import React from "react";
import Services from "../service/Services2";
import { Container, Row } from "react-bootstrap";

const Service = () => {
  return (
    <>
      <section className="gi-service-section padding-tb-40">
        <div className="container">
          <div className="section-title-2">
            <h2 className="gi-title">
              Nuestros <span>Servicios</span>
            </h2>
            <p>
              GA ofrece una amplia gama de servicios para satisfacer las
              necesidades de nuestros clientes.
            </p>
          </div>
          <Row className="m-tb-minus-12">
            <Services />
          </Row>
        </div>
      </section>
    </>
  );
};

export default Service;
