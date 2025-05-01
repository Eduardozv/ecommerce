import React from "react";
import { Col } from "react-bootstrap";
import { useRouter } from "next/navigation";
import utils from "@/utility/utils";

const BlogContent = ({md, data, lg}: any) => {
  const router = useRouter();

  const handleBlogClick = () => {
    const titleSlug = data.title.toLowerCase().replace(/ /g, '-');
    router.push(`/noticia?nombre=${titleSlug}`);
  };

  return (
    <>
        <Col md={md} sm={12} lg={lg} className="mb-6 gi-blog-block">
          <div className="gi-blog-item">
            <div className="blog-info">
              <figure className="blog-img">
                <a onClick={handleBlogClick}>
                  <img src={data.image} alt="news imag" />
                </a>
              </figure>
              <div className="detail">
                <label>
                  {utils.formatDate(data.dateAdded)}
                </label>
                <h3>
                  <a onClick={handleBlogClick}>
                    {data.title}
                  </a>
                </h3>
                <p className="text-length">
                  {data.description}
                </p>
                <div className="more-info">
                  <a onClick={handleBlogClick}>
                    Leer Más<i className="gicon gi-angle-double-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Col>

    </>
  );
};

export default BlogContent;
