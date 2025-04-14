"use client";
import SidebarArea from "../shop-sidebar/sidebar-area/SidebarArea2";

const SidebarFilter = ({
  handleGroupChange,
  handleCategoryChange,
  handleSubCategoryChange,
  closeFilter,
  isFilterOpen,
  selectedGroup,
  selectedCategory,
  selectedSubCategory,
  isOpen,
  toggleDropdown,
  isGroupOpen,
  toggleGroupDropdown,
}) => {

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
          handleGroupChange={handleGroupChange}
          handleCategoryChange={handleCategoryChange}
          handleSubCategoryChange={handleSubCategoryChange}
          selectedCategory={selectedCategory}
          selectedSubCategory={selectedSubCategory}
          isOpen={isOpen}
          toggleDropdown={toggleDropdown}
          isGroupOpen={isGroupOpen}
          toggleGroupDropdown={toggleGroupDropdown}
          selectedGroup={selectedGroup}
        />
      </div>
    </>
  );
};

export default SidebarFilter;
