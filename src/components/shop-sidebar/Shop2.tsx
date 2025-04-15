"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import ShopProductItem from "../product-item/ShopProductItem2";
import { Col, Row } from "react-bootstrap";
import SidebarArea from "./sidebar-area/SidebarArea2";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import Spinner from "../button/Spinner";
import SidebarFilter from "../model/SidebarFilter2";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import {
  setRange,
  setSearchTerm,
  setSelectedCategory,
  setSelectedSubCategory,
  setSelectedColor,
  setSelectedTags,
  setSelectedWeight,
  setSortOption,
  setSelectedGroup,
} from "@/store/reducers/filterReducer";
import Paginantion from "../paginantion/Paginantion2";

const Shop = ({
  xl = 4,
  lg = 12,
  order = "",
  list = "",
  className = "padding-tb-40",
  isList = false,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isGridView, setIsGridView] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const dispatch = useDispatch();
  const {
    selectedGroup,
    selectedCategory,
    selectedSubCategory,
    sortOption,
    minPrice,
    maxPrice,
    range,
    searchTerm,
  } = useSelector((state: RootState) => state.filter);
  const itemsPerPage = 12;

  const postData = useMemo(
    () => ({
      searchTerm,
      page: currentPage,
      limit: itemsPerPage,
      sortOption,
      selectedGroup,
      selectedCategory,
      selectedSubCategory,
      minPrice,
      maxPrice,
      range,
    }),
    [
      searchTerm,
      currentPage,
      itemsPerPage,
      sortOption,
      selectedGroup,
      selectedCategory,
      selectedSubCategory,
      minPrice,
      maxPrice,
      range,
    ]
  );

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openFilter = () => {
    setIsFilterOpen(true);
  };

  const closeFilter = () => {
    setIsFilterOpen(false);
  };

  const [isOpen, setIsOpen] = useState({});
  const [isGroupOpen, setIsGroupOpen] = useState({}); // State for groups

  const toggleDropdown = (section: string) => {
    setIsOpen(section ? {
      [section]: true, // Solo mantiene abierta la sección seleccionada
    } : {});
  };

  const toggleGroupDropdown = (group: string) => {
    setIsGroupOpen(group ?{
      [group]: true, // Toggle the specific group
     } : {});
  };

  const { data, error } = useSWR(
    ["/api/products", postData],
    ([url, postData]) => fetcher(url, postData)
  );

  const toggleView = (isGrid: any) => {
    setIsGridView(isGrid);
  };

  useEffect(() => {
    dispatch(setSearchTerm(""));
    setCurrentPage(1);
  }, [dispatch]);

  const handleSortChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(setSortOption(event.target.value));
      setCurrentPage(1);
    },
    [dispatch]
  );

  const handleGroupChange = (group) => {
    const updatedGroup = group ? [group] : [];
    dispatch(setSelectedGroup(updatedGroup));
    setCurrentPage(1);
  };

  const handleCategoryChange = (category) => {
    const updatedCategory = category ? [category] : [];
    dispatch(setSelectedCategory(updatedCategory));
    setCurrentPage(1);
  };

  const handleSubCategoryChange = (subcategory) => {
    const updatedSubCategory = subcategory ? [subcategory] : [];
    dispatch(setSelectedSubCategory(updatedSubCategory));
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (error) return <div>Failed to load products</div>;

  return (
    <>
      <Row className={className}>
        <Col
          lg={lg}
          md={12}
          className={`margin-b-30 gi-shop-rightside ${order}`}
        >
          {/* <!-- Shop Top Start --> */}
          <div className="gi-pro-list-top d-flex">
            <div className="col-md-6 gi-grid-list">
              <div className="gi-gl-btn">
                {isMobile && <button
                  onClick={openFilter}
                  className="grid-btn gi-filter-btn d-flex gap-2"
                >
                  <span>Filtrar</span>
                  <i className="fi fi-rr-filter"></i>
                </button>}
                <button
                  className={`grid-btn btn-grid-50 ${
                    !isGridView ? "active" : ""
                  }`}
                  onClick={() => toggleView(false)}
                >
                  <i className="fi fi-rr-apps"></i>
                </button>
                <button
                  className={`grid-btn btn-list-50 ${
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
                  defaultValue=""
                >
                  <option value="" disabled>
                    Ordenar
                  </option>
                  <option value="1">Posición</option>
                  <option value="2">Fecha ⬆</option>
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
            <div
              className={`shop-pro-content ${isGridView ? "list-view-50" : ""}`}
            >
              <div className={`shop-pro-inner ${list}`}>
                <Row>
                  {data?.data.map((item: any, index: any) => (
                    <ShopProductItem
                      isGridView={isGridView}
                      xl={xl}
                      data={item}
                      key={index}
                      isList={isList}
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
                  Producto no encontrado.
                </div>
              ) : (
                <div className="gi-pro-pagination">
                  <span>
                    Mostrando {(currentPage - 1) * itemsPerPage + 1}-
                    {Math.min(currentPage * itemsPerPage, data.totalItems)} en {" "}
                    {data.totalItems} producto(s)
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
        {isMobile ? (
        <SidebarFilter
        handleCategoryChange={handleCategoryChange}
        handleSubCategoryChange={handleSubCategoryChange}
        handleGroupChange={handleGroupChange} 
        selectedCategory={selectedCategory}
        selectedSubCategory={selectedSubCategory}
        selectedGroup={selectedGroup}
        isFilterOpen={isFilterOpen}
        closeFilter={closeFilter}
        isOpen={isOpen}
        toggleDropdown={toggleDropdown}
        isGroupOpen={isGroupOpen} // Pass group state
        toggleGroupDropdown={toggleGroupDropdown} // Pass group toggle function
      />
      ) : (
        <SidebarArea
          handleCategoryChange={handleCategoryChange}
          handleSubCategoryChange={handleSubCategoryChange}
          handleGroupChange={handleGroupChange}
          selectedCategory={selectedCategory}
          selectedSubCategory={selectedSubCategory}
          selectedGroup={selectedGroup}
          order={order}
          isOpen={isOpen}
          toggleDropdown={toggleDropdown}
          isGroupOpen={isGroupOpen} // Pass group state
          toggleGroupDropdown={toggleGroupDropdown} // Pass group toggle function
        />
      )}
        
      </Row>
    </>
  );
};

export default Shop;
