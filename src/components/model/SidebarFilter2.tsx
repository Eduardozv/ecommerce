"use client";
import { useState } from "react";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import { GoChevronDown } from "react-icons/go";
import { useDispatch } from "react-redux";
import Link from "next/link";
import SmoothCollapse from "react-smooth-collapse";

const SidebarFilter = ({
  onSuccess = () => {},
  onError = () => {},
  hasPaginate = false,
  handleCategoryChange,
  handleSubCategoryChange,
  closeFilter,
  isFilterOpen,
  selectedCategory,
  selectedSubCategory,
}) => {

  const [isOpen, setIsOpen] = useState({
    category: true,
    weight: true,
    color: true,
    price: true,
    tags: true,
  });

  const { data: categories, error: categoriesError } = useSWR(`/api/categories`, fetcher, {
    onSuccess,
    onError,
  });

  const { data: subcategories, error: subcategoriesError } = useSWR(`/api/subcategories`, fetcher, {
    onSuccess,
    onError,
  });

  if (categoriesError || subcategoriesError) return <div>Failed to load data</div>;
  if (!categories || !subcategories) return <div></div>;

  const getData = () => {
    if (hasPaginate) return categories.data;
    else return categories;
  };

  const renderIcon = (category: string) => {
    switch (category) {
      case "Dried Fruit":
        return "fi fi-rs-grape";
      case "Fresh Fruit":
        return "fi fi-rs-apple-whole";
      case "Snacks":
        return "fi fi-rs-popcorn";
      case "Cookies":
        return "fi fi-rs-cookie";
      case "Foods":
        return "fi fi-rs-hamburger";
      case "Tuber root":
        return "fi fi-rs-corn";
      case "Vegetables":
        return "fi fi-rs-tomato";
      case "Clothes":
        return "fi-rr-shop";
      case "jewellery":
        return "fi fi-rs-gem";
      case "unisex":
        return "fi fi-rs-portrait";
      default:
        return null;
    }
  };

  const categoryData = getData();

  const getSubcategories = (categoryName: string) => {
    return subcategories.filter((sub: any) => sub.category === categoryName);
  };

  const toggleDropdown = (section: any) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleCategoryClick = (categoryName: string) => {
    handleCategoryChange(categoryName);
    toggleDropdown(categoryName);
    console.log("Category Name:", categoryName);
  };

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
        <div id="shop_sidebar">
          <div className="gi-sidebar-wrap">
            {/* <!-- Sidebar Category Block --> */}
            <div className="gi-sidebar-block">
              <div className="gi-sb-title">
                <h3 className="gi-sidebar-title">Categorías</h3>
              </div>
              <div
                style={{ display: isOpen.category ? "block" : "none" }}
                className={`gi-cat-sub-dropdown gi-sb-block-content`}
              >
                <ul>
                  {/* Check if data is an array before mapping */}
                  {categoryData.map((category: any, index: number) => (
                    <li key={index}>
                      {/* Assuming ShopCategoryBlock accepts a 'data' prop */}
                      <div className="gi-sidebar-block-item" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          <div style={{ display: "flex", alignItems: "center" }}>
                            <input
                              checked={selectedCategory?.includes(
                                category.name
                              )}
                              onChange={() => handleCategoryClick(category.name)}
                              type="checkbox"
                            />
                            <Link href="/">
                              <span onClick={() => handleCategoryClick(category.name)}>
                                <i
                                  className={`${renderIcon(category.name)}`}
                                ></i>
                                {category.name}
                              </span>
                            </Link>
                            <span className="checked"></span>
                          </div>
                          <div
                            style={{ cursor: "pointer" }}
                            onClick={() => toggleDropdown(category.name)}
                          >
                            <GoChevronDown />
                          </div>
                        </div>
                      {/* Render subcategories */}
                      <SmoothCollapse
                        expanded={isOpen[category.name]}
                        heightTransition="1s ease"
                      >
                        <div
                          style={{ display: isOpen[category.name] ? "block" : "none", paddingLeft: "28px" }}
                          className={`gi-cat-sub-dropdown gi-sb-block-content`}
                        >
                          <ul>
                            {getSubcategories(category.name).map((subcategory: any, subIndex: number) => (
                              <li key={subIndex}>
                                <div className="gi-sidebar-block-item" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                  <div style={{ display: "flex", alignItems: "center" }}>
                                    <input
                                      checked={selectedSubCategory?.includes(
                                        subcategory.name
                                      )}
                                      onChange={() =>
                                        handleSubCategoryChange(subcategory.name)
                                      }
                                      type="checkbox"
                                    />
                                    <Link href="/">
                                      <span>
                                        {subcategory.name}
                                      </span>
                                    </Link>
                                    <span className="checked"></span>

                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </SmoothCollapse>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarFilter;
