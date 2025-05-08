import React, { useEffect, useRef, useState, useMemo } from "react";
import { Col, Row } from "react-bootstrap";
import useSWR from "swr";
import fetcher from "@/components/fetcher-api/Fetcher";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactMarkdown from "react-markdown";
import Spinner from "@/components/button/Spinner";
import ZoomImage from "@/components/zoom-image/ZoomImage";
import constants from "@/utility/constants";
import { useRouter } from "next/navigation";

const calculateDiscount = (oldPrice: number, newPrice: number): number => {
  if (!oldPrice || !newPrice || oldPrice <= newPrice) return 0;
  return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
};

const SingleProductContent = ({ product }) => {
  const [isSliderInitialized, setIsSliderInitialized] = useState(false);
  const initialRef: any = null;
  const slider1 = useRef<Slider | null>(initialRef);
  const slider2 = useRef<Slider | null>(initialRef);
  const router = useRouter();

  const slider1Settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: slider2.current,
    focusOnSelect: true,
  };

  const slider2Settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: slider1.current,
    dots: false,
    arrows: true,
    focusOnSelect: true,
  };

  useEffect(() => {
    setIsSliderInitialized(true);
  }, [isSliderInitialized]);

  const handleSlider1Click = (index: any) => {
    if (slider2.current) {
      slider2.current.slickGoTo(index);
    }
  };

  const handleSlider2Click = (index: any) => {
    if (slider1.current) {
      slider1.current.slickGoTo(index);
    }
  };

  const handleCatalogClick = (data) => {
    const fullUrl = `${window.location.origin}${data.pdf_file}`;
  
    // Usar router para redirigir al PDF
    router.push(fullUrl);
  };

  const productBrand = product?.brand;

  const postDataCatalog = useMemo(() => ({ brand: productBrand }), []);

  // Llamado a la API con el filtro
  const { data: dataCatalog, error: errorCatalog } = useSWR(
    ["/api/catalogs", postDataCatalog],
    ([url, postDataCatalog]) => fetcher(url, postDataCatalog)
  );

  const productCatalog = errorCatalog ? null : dataCatalog?.data;

  if (!product) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  const discount = calculateDiscount(product.oldPrice, product.newPrice);

  return (
    <>
      <div className="single-pro-inner">
        <Row>
          {isSliderInitialized && (
            <Col className="single-pro-img">
              <div className="single-product-scroll">
                {product.images.length > 1 ? (
                  <>
                    <Slider
                      {...slider1Settings}
                      ref={(slider) => (slider1.current = slider)}
                      className="single-product-cover"
                    >
                      {product.images.map((image: string, index: any) => (
                        <div
                          key={index}
                          className="single-slide zoom-image-hover"
                          onClick={() => handleSlider1Click(index)}
                        >
                          <ZoomImage src={image} alt={product.title} />
                        </div>
                      ))}
                    </Slider>
                    <Slider
                      {...slider2Settings}
                      ref={(slider) => (slider2.current = slider)}
                      className="single-nav-thumb"
                    >
                      {product.images.map((image: string, index: number) => (
                        <div
                          key={index}
                          className="single-slide"
                          onClick={() => handleSlider2Click(index)}
                        >
                          <img className="img-responsive" src={image} alt={product.title} />
                        </div>
                      ))}
                    </Slider>
                  </>
                ) : (
                  // Mostrar una sola imagen sin slider
                  <div className="single-slide zoom-image-hover">
                    <ZoomImage src={product.images[0]} alt={product.title} />
                  </div>
                )}
              </div>
            </Col>
          )}
          <Col className="single-pro-desc m-t-991">
            <div className="single-pro-content">
              <h5 className="gi-single-title">
                {product.title}
              </h5>

              <div className="gi-single-price-stoke">
                {constants.showPrice && (
                  <div className="gi-single-price">
                    {product.newPrice && (
                      <div className="final-price">
                        ${product.newPrice}{!!discount && <span className="price-des">-{discount}%</span>}
                      </div>
                    )}
                    
                    {product.oldPrice && product.oldPrice !== product.newPrice && (
                      <div className="mrp">
                        <span>${product.oldPrice}</span>
                      </div>
                    )}
                  </div>
                )}
                <div className="gi-single-stoke">
                  {/* <span className="gi-single-sku">SKU#: {product.id}</span> */}
                  <span className="gi-single-ps-title">{product.status}</span>
                </div>
              </div>
              <div className="gi-single-desc">
                {product.description}
              </div>
              {product.body && (
                <Row style={{ width: "100%", marginTop: "20px" }}>
                  <Col>
                    <div className="product-body" style={{ width: "100%" }}>
                      <ReactMarkdown>{product.body}</ReactMarkdown>
                    </div>
                  </Col>
                </Row>
              )}
              {productCatalog && productCatalog.length > 0 && (
                <Row style={{ width: "100%", marginTop: "20px" }}>
                  <Col>
                    <div className="product-catalog">
                      <ul>
                        {productCatalog.map((catalog: any, index: number) => (
                          <li key={index}>
                            <a onClick={() => handleCatalogClick(catalog)} target="_blank" rel="noopener noreferrer">
                              <i className="fi-rr-angle-double-small-right"></i>&nbsp;Ver Catálogo en PDF&nbsp; {catalog.title} 
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                </Row>
              )}
            </div>
          </Col>
        </Row>

      </div>
    </>
  );
};

export default SingleProductContent;
