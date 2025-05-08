import React from "react";
import { Col } from "react-bootstrap";
import { useRouter } from "next/navigation";
import utils from "@/utility/utils";

const CatalogCard = ({data, xs, sm, md, lg, xl}: any) => {
  const router = useRouter();

  const handleCatalogClick = () => {
    const fullUrl = `${window.location.origin}${data.pdf_file}`;
  
    // Usar router para redirigir al PDF
    router.push(fullUrl);
  };

  return (
    <>
        <Col xl={xl} lg={lg} md={md} sm={sm} xs={xs} className="mb-6 gi-blog-block">
          <div className="gi-blog-item">
            <div className="blog-info catalog-card">
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
              </div>
            </div>
          </div>
        </Col>

    </>
  );
};

export default CatalogCard;
