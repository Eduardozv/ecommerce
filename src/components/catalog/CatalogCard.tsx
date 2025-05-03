import React from "react";
import { Col } from "react-bootstrap";
import { useRouter } from "next/navigation";
import utils from "@/utility/utils";

const CatalogCard = ({md, data, lg}: any) => {
  const router = useRouter();

  const handleCatalogClick = () => {
    const titleSlug = data.title.toLowerCase().replace(/ /g, '-');
    router.push(`/catalogo?nombre=${titleSlug}`);
  };

  return (
    <>
        <Col md={md} sm={12} lg={lg} className="mb-6 gi-blog-block">
          <div className="gi-blog-item">
            <div className="blog-info">
              <figure className="blog-img">
                <a onClick={handleCatalogClick}>
                  <img src={data.image} alt="news imag" />
                </a>
              </figure>
              <div className="detail">
                <label>
                  {utils.formatDate(data.dateAdded)}
                </label>
                <h3>
                  <a onClick={handleCatalogClick}>
                    {data.title}
                  </a>
                </h3>
                <div className="more-info">
                  <a onClick={handleCatalogClick}>
                    Ver <i className="gicon gi-angle-double-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Col>

    </>
  );
};

export default CatalogCard;
