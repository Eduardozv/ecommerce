"use client";
import { Fade } from "react-awesome-reveal";
import { Col, Row } from "react-bootstrap";
import ScrollButton from "../../button/ScrollButton";
import useSWR from "swr";
import fetcher from "@/components/fetcher-api/Fetcher";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { useRouter } from "next/navigation";
import { setSelectedCategory } from "@/store/reducers/filterReducer";
import { useState } from "react";
import { slice } from "lodash";
import { motion } from "framer-motion";
import constants from "@/utility/constants";

function Footer({ onSuccess = () => {}, onError = () => {} }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [dropdownState, setDropdownState] = useState(null);
  const { selectedCategory } = useSelector((state: RootState) => state.filter);
  const { data, error } = useSWR(`/api/shopcategory`, fetcher, {
    onSuccess,
    onError,
  });

  if (error) return <div>Failed to load products</div>;
  if (!data) return <div></div>;

  const getData = () => {
    return data.length > 6 ? slice(data, 0, 6) : data;
  };

  const toggleDropdown = (dropdown: any) => {
    setDropdownState((menu) => (menu === dropdown ? null : dropdown));
  };

  const CategoryData = getData();

  const handleCategoryChange = (category) => {
    const updatedCategory = selectedCategory.includes(category)
      ? selectedCategory.filter((cat) => cat !== category)
      : [...selectedCategory, category];
    dispatch(setSelectedCategory(updatedCategory));
    router.push("/shop-left-sidebar-col-3");
  };

  return (
    <>
      <footer className="gi-footer m-t-40">
        <div className="footer-container">
          <div className="footer-top padding-tb-80">
            <div className="container">
              <Row className="m-minus-991">
                <Col sm={12} lg={3}>
                  <Fade
                    duration={400}
                    triggerOnce
                    direction="up"
                    className=" gi-footer-cat"
                  >
                    <div className="gi-footer-widget gi-footer-company">
                      <img
                        src={
                          process.env.NEXT_PUBLIC_URL +
                          "/assets/img/logo/logo-ga.png"
                        }
                        className="gi-footer-logo"
                        alt="footer logo"
                      />
                      <p className="gi-footer-detail">
                        GA Instalaciones comerciales, es una empresa que lleva 14 años
                        comercializando equipos gastronómicos y de supermercados en todo el país.
                      </p>
                    </div>
                  </Fade>
                </Col>
                <Col sm={12} lg={2} className="gi-footer-info">
                  <>
                    <div className="gi-footer-widget">
                      <h4
                        onClick={() => toggleDropdown("category")}
                        className="gi-footer-heading"
                      >
                        Category
                        <div className="gi-heading-res">
                          <i
                            className="fi-rr-angle-small-down"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </h4>
                      <motion.div
                        className="gi-footer-links gi-footer-dropdown"
                        initial={{ height: 0, opacity: 0, translateY: -20 }}
                        animate={{
                          height: dropdownState === "category" ? "auto" : 0,
                          opacity: dropdownState === "category" ? 1 : 0,
                          translateY: dropdownState === "category" ? 0 : -20,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{
                          overflow: "hidden",
                          display: "block",
                          paddingBottom:
                            dropdownState === "category" ? "20px" : "0px",
                        }}
                      >
                        <ul className="align-itegi-center">
                          {CategoryData.map((data, index) => (
                            <li key={index} className="gi-footer-link">
                              <a
                                style={{ textTransform: "capitalize" }}
                                href="#"
                                onClick={() =>
                                  handleCategoryChange(data.category)
                                }
                              >
                                {data.category}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </>
                </Col>
                <Col sm={12} lg={2} className="gi-footer-account">
                  <>
                    <div className="gi-footer-widget">
                      <h4
                        onClick={() => toggleDropdown("company")}
                        className="gi-footer-heading"
                      >
                        Company
                        <div className="gi-heading-res">
                          <i
                            className="fi-rr-angle-small-down"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </h4>
                      <motion.div
                        className="gi-footer-links gi-footer-dropdown"
                        initial={{ height: 0, opacity: 0, translateY: -20 }}
                        animate={{
                          height: dropdownState === "company" ? "auto" : 0,
                          opacity: dropdownState === "company" ? 1 : 0,
                          translateY: dropdownState === "company" ? 0 : -20,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{
                          overflow: "hidden",
                          display: "block",
                          paddingBottom:
                            dropdownState === "company" ? "20px" : "0px",
                        }}
                      >
                        <ul className="align-itegi-center">
                          <li className="gi-footer-link">
                            <a href="/about-us">About us</a>
                          </li>
                          <li className="gi-footer-link">
                            <a href="/track-order">Delivery</a>
                          </li>
                          <li className="gi-footer-link">
                            <a href="/privacy-policy">Legal Notice</a>
                          </li>
                          <li className="gi-footer-link">
                            <a href="/terms-condition">Terms & conditions</a>
                          </li>
                          <li className="gi-footer-link">
                            <a href="/checkout">Secure payment</a>
                          </li>
                          <li className="gi-footer-link">
                            <a href="/contact-us">Contact us</a>
                          </li>
                        </ul>
                      </motion.div>
                    </div>
                  </>
                </Col>
                <Col sm={12} lg={2} className="gi-footer-service">
                  <>
                    <div className="gi-footer-widget">
                      <h4
                        onClick={() => toggleDropdown("account")}
                        className="gi-footer-heading"
                      >
                        Account
                        <div className="gi-heading-res">
                          <i
                            className="fi-rr-angle-small-down"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </h4>
                      <motion.div
                        className="gi-footer-links gi-footer-dropdown"
                        initial={{ height: 0, opacity: 0, translateY: -20 }}
                        animate={{
                          height: dropdownState === "account" ? "auto" : 0,
                          opacity: dropdownState === "account" ? 1 : 0,
                          translateY: dropdownState === "account" ? 0 : -20,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{
                          overflow: "hidden",
                          display: "block",
                          paddingBottom:
                            dropdownState === "account" ? "20px" : "0px",
                        }}
                      >
                        <ul className="align-itegi-center">
                          <li className="gi-footer-link">
                            <a href="/register">Sign In</a>
                          </li>
                          <li className="gi-footer-link">
                            <a href="/cart">View Cart</a>
                          </li>
                          <li className="gi-footer-link">
                            <a href="/privacy-policy">Return Policy</a>
                          </li>
                          <li className="gi-footer-link">
                            <a href="#">Become a Vendor</a>
                          </li>
                          <li className="gi-footer-link">
                            <a href="#">Affiliate Program</a>
                          </li>
                          <li className="gi-footer-link">
                            <a href="/checkout">Payments</a>
                          </li>
                        </ul>
                      </motion.div>
                    </div>
                  </>
                </Col>
                <Col sm={12} lg={3} className=" gi-footer-cont-social">
                  <>
                    <div className="gi-footer-contact">
                      <div className="gi-footer-widget">
                        <h4
                          onClick={() => toggleDropdown("contact")}
                          className="gi-footer-heading"
                        >
                          Contacto
                          <div className="gi-heading-res">
                            <i
                              className="fi-rr-angle-small-down"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </h4>
                        <motion.div
                          className="gi-footer-links gi-footer-dropdown"
                          initial={{ height: 0, opacity: 0, translateY: -20 }}
                          animate={{
                            height: dropdownState === "contact" ? "auto" : 0,
                            opacity: dropdownState === "contact" ? 1 : 0,
                            translateY: dropdownState === "contact" ? 0 : -20,
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          style={{
                            overflow: "hidden",
                            display: "block",
                            paddingBottom:
                              dropdownState === "contact" ? "20px" : "0px",
                          }}
                        >
                          <ul className="align-itegi-center">
                            <li className="gi-footer-link gi-foo-location">
                              <span>
                                <i className="fi fi-rr-marker location svg_img foo_svg"></i>
                              </span>
                              <p>
                                Dr. Salvador Ferrer Serra 2125.
                              </p>
                            </li>
                            <li className="gi-footer-link gi-foo-call">
                              <span>
                                <i className="fi fi-brands-whatsapp svg_img foo_svg"></i>
                              </span>
                              <a href="https://wa.me/+59898331926">+598 98331926</a>
                            </li>
                            <li className="gi-footer-link gi-foo-mail">
                              <span>
                                <i className="fi fi-rr-envelope"></i>
                              </span>
                              <a href="mailto:ventas@lcainstalacionescomerciales.com.uy">
                                ventas@lcainstalacionescomerciales.com.uy
                              </a>
                            </li>
                          </ul>
                        </motion.div>
                      </div>
                    </div>
                    <div className="gi-footer-social">
                      <div className="gi-footer-widget">
                        <motion.div
                          className="gi-footer-links gi-footer-dropdown"
                          initial={{ height: 0, opacity: 0, translateY: -20 }}
                          animate={{
                            height: dropdownState === "contact" ? "auto" : 0,
                            opacity: dropdownState === "contact" ? 1 : 0,
                            translateY: dropdownState === "contact" ? 0 : -20,
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          style={{
                            overflow: "hidden",
                            display: "block",
                          }}
                        >
                          <ul className="align-itegi-center">
                            <li className="gi-footer-link">
                              <a href={constants.facebookUrl}>
                                <i
                                  className="gicon gi-facebook"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li className="gi-footer-link">
                              <a href={constants.linkedinUrl}>
                                <i
                                  className="gicon gi-linkedin"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li className="gi-footer-link">
                              <a href={constants.instagramUrl}>
                                <i
                                  className="gicon gi-instagram"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                          </ul>
                        </motion.div>
                      </div>
                    </div>
                  </>
                </Col>
              </Row>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="gi-bottom-info">
                  {/* <!-- Footer Copyright Start --> */}
                  <div className="footer-copy">
                    <div className="footer-bottom-copy ">
                      <div className="gi-copy">
                        Powered by{"  "}
                        <a className="site-name" href={constants.portfolioUrl}>
                          WaveTech SAS
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <ScrollButton />
    </>
  );
}

export default Footer;
