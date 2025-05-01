"use client";
import { useMemo } from "react";
import { Col } from "react-bootstrap";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import Spinner from "../button/Spinner";
import utils from "@/utility/utils";
import ReactMarkdown from "react-markdown";


const BlogDetailFullwidth = ({ order = "" }: any) => {

  const searchParams = useSearchParams();
  const titleSlug = searchParams.get("nombre");

  const postData = useMemo(() => ({ titleSlug: titleSlug }), [titleSlug]);

  const { data, error } = useSWR(
      ["/api/blogs", postData],
      ([url, postData]) => fetcher(url, postData)
    );
  
    if (error) return <div>Fallo en cargar producto</div>;
    if (!data)
      return (
        <div>
          <Spinner />
        </div>
      );
  
    const selectedBlog = data.data[0];

  return (
    <>
      <Col lg={12} md={12} className={`gi-blogs-rightside ${order} `}>
        {/* <!-- Blog content Start --> */}
        <div className="gi-blogs-content">
          <div className="gi-blogs-inner">
            <div className="gi-single-blog-item">
              <div className="single-blog-info">
                <figure className="blog-img">
                  <a>
                    <img
                      src={
                        process.env.NEXT_PUBLIC_URL + selectedBlog.image
                      }
                      alt="news imag"
                    />
                  </a>
                </figure>
                <div className="single-blog-detail">
                  <label>
                    {utils.formatDate(selectedBlog.dateAdded)}
                  </label>
                  <h3>{selectedBlog.title}</h3>
                  <p className="gi-text">
                    {selectedBlog.description}
                  </p>
                  <div>
                    <ReactMarkdown>{selectedBlog.body}</ReactMarkdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--Blog content End --> */}
      </Col>
    </>
  );
};

export default BlogDetailFullwidth;
