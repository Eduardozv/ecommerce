"use client";
import { Col, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import ItemCard from "../product-item/ItemCard2";
import { Fade } from "react-awesome-reveal";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import DealendTimer from "../dealend-timer/DealendTimer";
import Spinner from "../button/Spinner";
import { useMemo } from "react";

const Deal = ({
  onSuccess = () => {},
  onError = () => {},
}) => {
  // Define el postData con el filtro de status
  const postData = useMemo(() => ({ status: "En Oferta" }), []);

  // Llamado a la API con el filtro
  const { data, error } = useSWR(
    ["/api/products", postData],
    ([url, postData]) => fetcher(url, postData)
  );

  const { data: groups, error: groupsError } = useSWR(`/api/groups`, fetcher, {
    onSuccess: () => console.log("Groups data fetched successfully"),
    onError: () => console.log("Error fetching groups data"),
  });
  
  if (error) return <div>Fallo en cargar productos</div>;
  if (!data)
    return (
      <div>
        <Spinner />
      </div>
    );

  if (data.data.length < 5) return null;

  const getData = () => {
    return data.data;
  };

  return (
    <>
      <section
        className="gi-deal-section padding-tb-40 wow fadeInUp"
        data-wow-duration="2s"
      >
        <div className="container">
          <Row className="overflow-hidden m-b-minus-24px">
            <Col lg={12} className="gi-deal-section col-lg-12">
              <div className="gi-products">
                <div
                  className="section-title"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-delay="200"
                >
                  <Fade triggerOnce direction="up" duration={2000} delay={200}>
                    <div className="section-detail">
                      <h2 className="gi-title">
                        Productos en <span>Oferta</span>
                      </h2>
                      <p>Aprovecha la baja de precios de este Mes</p>
                    </div>
                  </Fade>
                </div>
                <Fade
                  triggerOnce
                  direction="up"
                  duration={2000}
                  delay={200}
                  className="gi-deal-block m-minus-lr-12"
                >
                  <div className="deal-slick-carousel gi-product-slider slick-initialized slick-slider">
                    <div className="slick-list draggable">
                      <Swiper
                        loop={true}
                        autoplay={{
                          delay: 2000,
                          pauseOnMouseEnter: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        slidesPerView={5}
                        breakpoints={{
                          0: {
                            slidesPerView: 1,
                          },
                          320: {
                            slidesPerView: 1,
                          },
                          425: {
                            slidesPerView: 2,
                          },
                          640: {
                            slidesPerView: 2,
                          },
                          768: {
                            slidesPerView: 3,
                          },
                          1024: {
                            slidesPerView: 3,
                          },
                          1200: {
                            slidesPerView: 5,
                          },
                          1440: {
                            slidesPerView: 5,
                          },
                        }}
                        className="slick-track"
                      >
                        {getData()?.map((item: any, index: number) => (
                          <SwiperSlide key={index} className="slick-slide">
                            <ItemCard data={item} groups={groups} />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                </Fade>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Deal;
