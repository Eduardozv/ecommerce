"use client";
import { Col, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import CategoryItem from "../product-item/CategoryItem2";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import Spinner from "../button/Spinner";

const Category = ({
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
  className = "padding-tb-40",
}) => {
  const { data: groups, error: groupsError } = useSWR(`/api/groups`, fetcher, {
    onSuccess,
    onError,
  });

  if (groupsError) return <div>Fallo cargado grupos de categorías</div>;
  if (!groups)
    return (
      <div>
        <Spinner />
      </div>
    );

  return (
    <section className={`gi-category body-bg ${className}`}>
      <div className="container">
        <Row className="m-b-minus-15px">
          <Col xl={12}>
            <Swiper
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              modules={[Pagination, Autoplay]}
              slidesPerView={5}
              spaceBetween={20}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                320: {
                  slidesPerView: 2,
                },
                425: {
                  slidesPerView: 2,
                },
                767: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 5,
                },
                1440: {
                  slidesPerView: 6,
                },
              }}
              className="gi-category-block owl-carousel"
            >
              {groups.map((item: any, index: number) => (
                <SwiperSlide
                  key={index}
                  className={`gi-cat-box gi-cat-box-${index + 1}`}
                >
                  <CategoryItem data={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Category;
