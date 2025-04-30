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
    const maxPageNumbers = 8; // Máximo de números visibles (incluyendo el primero y el último)

    if (totalPages <= maxPageNumbers) {
      // Si el total de páginas es menor o igual al máximo, mostrar todas las páginas
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Siempre incluir la primera página
      pageNumbers.push(1);

      const visiblePages = maxPageNumbers - 2; // Espacio restante para páginas visibles (excluyendo el primero y el último)
      let startPage = Math.max(2, currentPage - Math.floor(visiblePages / 2));
      let endPage = Math.min(totalPages - 1, currentPage + Math.floor(visiblePages / 2));

      // Ajustar si el rango se sale de los límites
      if (startPage === 2 && endPage < totalPages - 1) {
        endPage = Math.min(startPage + visiblePages - 1, totalPages - 1);
      } else if (endPage === totalPages - 1 && startPage > 2) {
        startPage = Math.max(endPage - visiblePages + 1, 2);
      }

      // Agregar "..." si hay un salto entre la primera página y el rango visible
      if (startPage > 2) {
        pageNumbers.push("...");
      }

      // Agregar las páginas visibles
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      // Agregar "..." si hay un salto entre el rango visible y la última página
      if (endPage < totalPages - 1) {
        pageNumbers.push("...");
      }

      // Siempre incluir la última página
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();
  console.log("pageNumbers", pageNumbers);

  return (
    <>
      <ul className="gi-pro-pagination-inner">
        <li>
          <a
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
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
                onClick={() => onPageChange(page)}
              >
                {page}
              </a>
            </li>
          ) : (
            <li key={index} className="pagination__ellipsis">
              <span className="pagination__ellipsis">
                {page}
              </span>
            </li>
          )
        )}

        <li>
          <a
            onClick={() =>
              currentPage < totalPages && onPageChange(currentPage + 1)
            }
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
