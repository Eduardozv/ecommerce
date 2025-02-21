"use client";
import { Col, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CategoryItemTwo from "../product-item/CategoryItemTwo";
import { Fade } from "react-awesome-reveal";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import Spinner from "../button/Spinner";

const Category = ({
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}) => {
  const { data, error } = useSWR("/api/fashiontwocategory", fetcher, {
    onSuccess,
    onError,
  });

  if (error) return <div>Failed to load products</div>;
  if (!data)
    return (
      <div>
        <Spinner />
      </div>
    );

  const getData = () => {
    if (hasPaginate) return data.data;
    else return data;
  };

  return (
    <Fade direction="up" triggerOnce>
      <section
        className="gi-category body-bg padding-tb-40 wow fadeInUp"
        data-wow-duration="2s"
      >
        <div className="container">
          <Row>
            <Col xl={12} className="border-content-color">
              <Swiper
                loop={true}
                autoplay={{ delay: 1000 }}
                slidesPerView={5}
                spaceBetween={25}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 25,
                  },
                  419: {
                    slidesPerView: 1,
                    spaceBetween: 25,
                  },
                  420: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                  },
                  767: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 25,
                  },
                  1200: {
                    slidesPerView: 5,
                    spaceBetween: 25,
                  },
                  1440: {
                    slidesPerView: 6,
                    spaceBetween: 25,
                  },
                }}
                className="gi-category-block owl-carousel"
              >
                {getData().map((item: any, index: number) => (
                  <SwiperSlide key={index} className="owl-item">
                    <div className="gi-cat-box gi-cat-box-1 p-0">
                      <CategoryItemTwo data={item} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
          </Row>
        </div>
      </section>
    </Fade>
  );
};

export default Category;
