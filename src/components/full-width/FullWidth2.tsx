"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import ShopProductItem from "../product-item/ShopProductItem2";
import { Col, Row } from "react-bootstrap";
import SidebarFilter from "../model/SidebarFilter2";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import Spinner from "../button/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import Paginantion from "../paginantion/Paginantion";
import {
  setRange,
  setSearchTerm,
  setSortOption,
  setSelectedCategory,
  setSelectedSubCategory,
} from "@/store/reducers/filterReducer";

const FullWidth = ({
  xl,
  lg,
  classCol,
  itemsPerPage = 12,
  className = "padding-tb-40",
  onlyRow = false,
}: any) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isGridView, setIsGridView] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const {
    selectedCategory,
    selectedSubCategory,
    selectedWeight,
    sortOption,
    minPrice,
    maxPrice,
    range,
    searchTerm,
    selectedColor,
    selectedTags,
  } = useSelector((state: RootState) => state.filter);

  const postData = useMemo(
    () => ({
      searchTerm,
      page: currentPage,
      limit: itemsPerPage,
      sortOption,
      selectedCategory,
      selectedSubCategory,
      selectedWeight,
      selectedColor,
      selectedTags,
      minPrice,
      maxPrice,
      range,
    }),
    [
      searchTerm,
      currentPage,
      itemsPerPage,
      sortOption,
      selectedCategory,
      selectedSubCategory,
      selectedWeight,
      selectedColor,
      selectedTags,
      minPrice,
      maxPrice,
      range,
    ]
  );

  const [isOpen, setIsOpen] = useState({});

const toggleDropdown = (section) => {
  setIsOpen((prevState) => ({
    ...prevState,
    [section]: !prevState[section],
  }));
};

  const handleSortChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(setSortOption(event.target.value));
      setCurrentPage(1);
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(setSearchTerm(""));
    setCurrentPage(1);
  }, [dispatch]);

  const openFilter = () => {
    setIsFilterOpen(true);
  };

  const closeFilter = () => {
    setIsFilterOpen(false);
  };

  const toggleView = (isGrid: any) => {
    setIsGridView(isGrid);
  };

  const { data, error } = useSWR(
    ["/api/products", postData],
    ([url, postData]) => fetcher(url, postData)
  );
  if (error) return <div>Failed to load products</div>;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCategoryChange = (category) => {
    const updatedCategory = selectedCategory.includes(category)
      ? selectedCategory.filter((cat) => cat !== category)
      : [...selectedCategory, category];
    dispatch(setSelectedCategory(updatedCategory));
    setCurrentPage(1);
  };

  const handleSubCategoryChange = (subcategory) => {
    const updatedSubCategory = selectedSubCategory.includes(subcategory)
      ? selectedSubCategory.filter((cat) => cat !== subcategory)
      : [...selectedSubCategory, subcategory];
    dispatch(setSelectedSubCategory(updatedSubCategory));
    setCurrentPage(1);
  };

  const LoadRowOrContainer = ({ children, onlyRow, className }: any) => {
    return (
      <>
        {onlyRow ? (
          children
        ) : (
          <section className={`gi-shop ${className}`}>
            <div className="container">{children}</div>
          </section>
        )}
      </>
    );
  };

  return (
    <LoadRowOrContainer onlyRow={onlyRow} className={className}>
      <Row>
        <Col
          lg={lg}
          md={12}
          className={`margin-b-30 gi-shop-rightside margin-b-30`}
        >
          {/* <!-- Shop Top Start --> */}
          <div className="gi-pro-list-top d-flex">
            <div className="col-md-6 gi-grid-list">
              <div className="gi-gl-btn">
                <button
                  onClick={openFilter}
                  className="grid-btn gi-filter-btn d-flex gap-2"
                >
                  <span>Filtrar</span>
                  <i className="fi fi-rr-filter"></i>
                </button>
                <button
                  className={`grid-btn btn-grid-50 ${
                    !isGridView ? "active" : ""
                  }`}
                  onClick={() => toggleView(false)}
                >
                  <i className="fi fi-rr-apps"></i>
                </button>
                <button
                  className={`grid-btn btn-grid-50 ${
                    isGridView ? "active" : ""
                  }`}
                  onClick={() => toggleView(true)}
                >
                  <i className="fi fi-rr-list"></i>
                </button>
              </div>
            </div>
            <div className="col-md-6 gi-sort-select">
              <div className="gi-select-inner">
                <select
                  name="gi-select"
                  id="gi-select"
                  onChange={handleSortChange}
                  value={sortOption}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Ordenar
                  </option>
                  <option value="1">Posición</option>
                  <option value="2">Relevancia</option>
                  <option value="3">A to Z</option>
                  <option value="4">Z to A</option>
                  <option value="5">Precio ⬇</option>
                  <option value="6">Precio ⬆</option>
                </select>
              </div>
            </div>
          </div>
          {/* <!-- Shop Top End --> */}

          {/* <!-- Shop content Start --> */}

          {!data ? (
            <>
              <Spinner />
            </>
          ) : (
            <div className={`shop-pro-content`}>
              <div
                className={`shop-pro-inner ${isGridView ? "list-view-50" : ""}`}
              >
                <Row>
                  {data.data.map((item: any, index: any) => (
                    <ShopProductItem
                      isGridView={isGridView}
                      xl={xl}
                      classCol={classCol}
                      data={item}
                      key={index}
                    />
                  ))}
                </Row>
              </div>
              {/* <!-- Pagination Start --> */}
              {!data.data.length ? (
                <div
                  style={{ textAlign: "center" }}
                  className="gi-pro-content cart-pro-title"
                >
                  Products is not found.
                </div>
              ) : (
                <div className="gi-pro-pagination">
                  <span>
                    Showing {(currentPage - 1) * itemsPerPage + 1}-
                    {Math.min(currentPage * itemsPerPage, data.totalItems)} of{" "}
                    {data.totalItems} item(s)
                  </span>

                  <Paginantion
                    currentPage={currentPage}
                    totalPages={data.totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
              )}

              {/* <!-- Pagination End --> */}
            </div>
          )}

          {/* <!--Shop content End --> */}
        </Col>
        {/* <!-- Sidebar Area Start --> */}
        <SidebarFilter
          handleCategoryChange={handleCategoryChange}
          handleSubCategoryChange={handleSubCategoryChange}
          selectedCategory={selectedCategory}
          selectedSubCategory={selectedSubCategory}
          isFilterOpen={isFilterOpen}
          closeFilter={closeFilter}
          isOpen={isOpen}
          toggleDropdown={toggleDropdown}
        />
      </Row>
    </LoadRowOrContainer>
  );
};

export default FullWidth;
