"use client";
import { useState, useEffect } from "react";
import SidebarArea from "../shop-sidebar/sidebar-area/SidebarArea2";

const SidebarFilter = ({
  handleCategoryChange,
  handleSubCategoryChange,
  closeFilter,
  isFilterOpen,
  selectedCategory,
  selectedSubCategory,
  isOpen,
  toggleDropdown,
}) => {

  useEffect(() => {
    console.log("SidebarFilter mounted!");
    return () => console.log("SidebarFilter unmounted!");
  }, []);

  return (
    <>
      {isFilterOpen && (
        <div
          style={{ display: isFilterOpen ? "block" : "none" }}
          className="filter-sidebar-overlay"
          onClick={closeFilter}
        ></div>
      )}
      <div
        className={`gi-shop-sidebar gi-filter-sidebar col-lg-3 col-md-12 ${
          isFilterOpen ? "filter-sidebar-open" : ""
        }`}
      >
        <div className="sidebar-filter-title">
          <h5>Filtros</h5>
          <a className="filter-close" onClick={closeFilter}>
            ×
          </a>
        </div>
        <SidebarArea
          handleCategoryChange={handleCategoryChange}
          handleSubCategoryChange={handleSubCategoryChange}
          selectedCategory={selectedCategory}
          selectedSubCategory={selectedSubCategory}
          isOpen={isOpen}
          toggleDropdown={toggleDropdown}
        />
      </div>
    </>
  );
};

export default SidebarFilter;
