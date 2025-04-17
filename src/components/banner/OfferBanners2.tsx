"use client";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { Row } from "react-bootstrap";
import GradientOverlay from "./GradientOverlay";

const OfferBanners = () => {
  return (
    <>
      <section className="gi-offer-section padding-tb-40">
        <div className="container">
          {/* <!--  Offer banners --> */}
          <Row>
            <Fade
              triggerOnce
              direction="left"
              duration={2000}
              className="col-md-6 wow fadeInLeft"
              data-wow-duration="2s"
            >
              <div className="gi-ofr-banners">
                <div className="gi-bnr-body">
                  <div className="gi-bnr-img">
                    <GradientOverlay style={{ background: 'linear-gradient(to left, white 0%, white 10%, transparent)'}}  />
                    <img
                      src={
                        process.env.NEXT_PUBLIC_URL + "/assets/img/banner/3.png"
                      }
                      alt="banner"
                    />
                  </div>
                  <div className="gi-bnr-detail">
                    <h5>Fiambrería y Carnicería</h5>
                    <p>Cortadoras y Balanzas</p>
                    <a href="/tienda?grupo=Carnicería%20y%20Fiambrería" className="gi-btn-2">
                      Comprar
                    </a>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade
              triggerOnce
              direction="right"
              duration={2000}
              className="col-md-6 wow fadeInRight"
              data-wow-duration="2s"
            >
              <div className="gi-ofr-banners m-t-767">
                <div className="gi-bnr-body">
                  <div className="gi-bnr-img">
                    <GradientOverlay style={{ background: 'linear-gradient(to left, white 0%, white 20%, transparent)'}} />
                    <img
                      src={
                        process.env.NEXT_PUBLIC_URL + "/assets/img/banner/2.png"
                      }
                      alt="banner"
                    />
                  </div>
                  <div className="gi-bnr-detail">
                    <h5>Elaboración y Panadería</h5>
                    <p>Diseñados Especialmente</p>
                    <Link href="/tienda?grupo=Elaboración%20y%20Panadería" className="gi-btn-2">
                      Comprar
                    </Link>
                  </div>
                </div>
              </div>
            </Fade>
          </Row>
        </div>
      </section>
    </>
  );
};

export default OfferBanners;
