"use client";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ProductAll from "../product-item/ProductItem2";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Fade } from "react-awesome-reveal";

const NewArrivals = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleProductClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <section
        className="gi-product-tab gi-products padding-tb-40 wow fadeInUp"
        data-wow-duration="2s"
      >
        <div className="container">
          <Tabs
            selectedIndex={selectedIndex}
            onSelect={(selectedIndex) => setSelectedIndex(selectedIndex)}
          >
            <div className="gi-tab-title">
              <div className="gi-main-title">
                <div className="section-title">
                  <div className="section-detail">
                    <h2 className="gi-title">
                      Nuevos <span>Arribos</span>
                    </h2>
                    <p>Dale un vistazo a nuestras novedades</p>
                  </div>
                </div>
              </div>
              {/* <!-- Tab Start --> */}
              <TabList className="gi-pro-tab">
                <ul className="gi-pro-tab-nav nav">
                  <Tab
                    style={{ outline: "none" }}
                    className="nav-item gi-header-rtl-arrival"
                    key={"all"}
                  >
                    <a
                      className={`nav-link ${
                        selectedIndex == 0 ? "active" : ""
                      }`}
                      onClick={() => handleProductClick(0)}
                      data-bs-toggle="tab"
                    >
                      Todos
                    </a>
                  </Tab>
                  <Tab
                    style={{ outline: "none" }}
                    className="nav-item gi-header-rtl-arrival"
                    key={"snack"}
                  >
                    <a
                      className={`nav-link ${
                        selectedIndex == 1 ? "active" : ""
                      }`}
                      data-bs-toggle="tab"
                      onClick={() => handleProductClick(1)}
                    >
                      Cortadoras
                    </a>
                  </Tab>
                  <Tab
                    style={{ outline: "none" }}
                    className="nav-item gi-header-rtl-arrival"
                    key={"fruits"}
                  >
                    <a
                      className={`nav-link ${
                        selectedIndex == 2 ? "active" : ""
                      }`}
                      data-bs-toggle="tab"
                      onClick={() => handleProductClick(2)}
                    >
                      Hornos
                    </a>
                  </Tab>
                  <Tab
                    style={{ outline: "none" }}
                    className="nav-item"
                    key={"veg"}
                  >
                    <a
                      className={`nav-link ${
                        selectedIndex == 3 ? "active" : ""
                      }`}
                      data-bs-toggle="tab"
                      onClick={() => handleProductClick(3)}
                    >
                      Freezers
                    </a>
                  </Tab>
                </ul>
              </TabList>
              {/* <!-- Tab End --> */}
            </div>
            {/* <!-- New Product --> */}
            <Row className="m-b-minus-24px">
              <Col lg={12}>
                <div className="tab-content">
                  {/* <!-- 1st Product tab start --> */}
                  <TabPanel>
                    <Fade
                      triggerOnce
                      duration={400}
                      className={`tab-pane fade ${
                        selectedIndex === 0 ? "show active product-block" : ""
                      }`}
                    >
                      <Row>
                        <ProductAll />
                      </Row>
                    </Fade>
                  </TabPanel>
                  <TabPanel>
                    <Fade
                      triggerOnce
                      duration={400}
                      className={`tab-pane fade ${
                        selectedIndex === 1 ? "show active product-block" : ""
                      }`}
                    >
                      <Row>
                        <ProductAll category="Cortadoras" />
                      </Row>
                    </Fade>
                  </TabPanel>
                  <TabPanel>
                    <Fade
                      triggerOnce
                      duration={400}
                      className={`tab-pane fade ${
                        selectedIndex === 2 ? "show active product-block" : ""
                      }`}
                    >
                      <Row>
                        <ProductAll category="Hornos" />
                      </Row>
                    </Fade>
                  </TabPanel>
                  <TabPanel>
                    <Fade
                      triggerOnce
                      duration={400}
                      className={`tab-pane fade ${
                        selectedIndex === 3 ? "show active product-block" : ""
                      }`}
                    >
                      <Row>
                        <ProductAll category="Freezers" />
                      </Row>
                    </Fade>
                  </TabPanel>
                </div>
              </Col>
            </Row>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
