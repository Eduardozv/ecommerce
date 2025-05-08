"use client"
import React, { useMemo, useState } from "react";
import CatalogCard from "./CatalogCard";
import { Col } from "react-bootstrap";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import Paginantion from "../paginantion/Paginantion2";

const CatalogFullwidth = ({ order = "", xl, lg, md, sm, xs }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;


  const postData = useMemo(
    () => ({
      page: currentPage,
      limit: itemsPerPage,
    }),
    [ currentPage, itemsPerPage,]
  );

  const { data, error } = useSWR(
    ["/api/catalogs", postData],
    ([url, postData]) => fetcher(url, postData)
  );

  if (error) return <div>Fallo en cargar catálogos</div>;

  const { data: posts = [], totalPages = 0 } = data || {};

  const getPageData = () => {
    return posts;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Col md={12} className={`gi-blogs-rightside ${order}`}>
        {/* <!-- Blog content Start --> */}
        <div className="gi-blogs-content">
          <div className="gi-blogs-inner">
            <div className="row">
            {getPageData().map((item: any, index: number) => (
                <CatalogCard data={item} xl={xl} lg={lg} key={index} md={md} sm={sm} xs={xs} />
              ))}
            </div>
          </div>
        </div>
        {/* <!-- Blog content end --> */}

        {/* <!-- Pagination Start --> */}
        <div className="gi-pro-pagination">
          <span>
            Mostrando {(currentPage - 1) * itemsPerPage + 1}-
            {Math.min(currentPage * itemsPerPage, posts.length)} de{" "}
            {posts.length} catalogo(s)
          </span>
          <Paginantion
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
        {/* <!-- Pagination End --> */}
      </Col>
      {/* <!-- Sidebar Area Start --> */}
    </>
  );
};

export default CatalogFullwidth;
