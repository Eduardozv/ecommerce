import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Paginantion: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = (): (number | string)[] => {
    const pageNumbers: (number | string)[] = [];
    const maxPageNumbers = 6;

    if (totalPages <= maxPageNumbers) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);

      const visiblePages = maxPageNumbers - 2;
      let startPage = Math.max(2, currentPage - Math.floor(visiblePages / 2));
      let endPage = Math.min(totalPages - 1, currentPage + Math.floor(visiblePages / 2));

      if (startPage > 2) {
        pageNumbers.push("...");
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages - 1) {
        pageNumbers.push("...");
      }

      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <>
      <ul className="gi-pro-pagination-inner">
        <li>
          <a
            onClick={(event) => {
              event.preventDefault();
              if (currentPage > 1) {
                onPageChange(currentPage - 1);
              }
            }}
            className={`next ${currentPage === 1 ? "disabled" : ""}`}
            href="#"
          >
            Anterior
          </a>
        </li>

        {pageNumbers.map((page, index) =>
          typeof page === "number" ? (
            <li key={index}>
              <a
                className={currentPage === page ? "active" : ""}
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  onPageChange(page);
                }}
              >
                {page}
              </a>
            </li>
          ) : (
            <li key={index} className="pagination__ellipsis">
              <span className="pagination__ellipsis">{page}</span>
            </li>
          )
        )}

        <li>
          <a
            onClick={(event) => {
              event.preventDefault();
              if (currentPage < totalPages) {
                onPageChange(currentPage + 1);
              }
            }}
            className={`next ${currentPage === totalPages ? "disabled" : ""}`}
            href="#"
          >
            Siguiente <i className="gicon gi-angle-right"></i>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Paginantion;
