"use client";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { Col, Row } from "react-bootstrap";
import GradientOverlay from "./GradientOverlay";

const Banner = () => {
  return (
    <Fade triggerOnce direction="up" duration={2000} delay={200}>
      <section
        className="gi-banner padding-tb-40 wow fadeInUp"
        data-wow-duration="2s"
      >
        <div className="container">
          <Row>
            <Col md={12}>
              <div
                className="gi-animated-banner"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="200"
              >
                <GradientOverlay direction="left" />
                <h2 className="d-none">Offers</h2>
                <div className="gi-bnr-detail">
                  <div className="gi-bnr-info">
                    <h2>
                      Todo lo que <br></br>necesitas para tu cocinas
                    </h2>
                    <h3>
                      hasta 30% off <span>No te lo pierdas!!!</span>
                    </h3>
                    <Link href="/tienda/?grupo=Cocina" className="gi-btn-2">
                      Comprar
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </Fade>
  );
};

export default Banner;
