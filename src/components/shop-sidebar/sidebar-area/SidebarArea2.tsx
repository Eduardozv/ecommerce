"use client";
import { useEffect, useState } from "react";
import PriceRangeSlider from "../../price-range/PriceRangeSlider";
import { GoChevronDown } from "react-icons/go";
import useSWR from "swr";
import fetcher from "@/components/fetcher-api/Fetcher";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import SmoothCollapse from "react-smooth-collapse";

const SidebarArea = ({
  handleCategoryChange,
  handleSubCategoryChange,
  selectedCategory,
  selectedSubCategory,
  closeFilter,
  isFilterOpen,
  onSuccess = () => {},
  onError = () => {},
  hasPaginate = false,
  order = "order-md-last order-lg-first",
  none = "",
}: any) => {
  const router = useRouter();
  const pathname = usePathname();
  const [showButton, setShowButton] = useState(true);

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

  useEffect(() => {
    const hiddenPaths = [
      "/product-left-sidebar/",
      "/product-right-sidebar/",
      "/product-according-left-sidebar/",
      "/product-according-right-sidebar/",
    ];
    setShowButton(hiddenPaths.includes(pathname));
  }, [pathname]);

  if (categoriesError || subcategoriesError) return <div>Failed to load data</div>;
  if (!categories || !subcategories) return <div></div>;

  const getData = () => {
    if (hasPaginate) return categories.data;
    else return categories;
  };

  const categoryData = getData();
  console.log('Category Data:', categoryData);

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

  const handleFilterBtn = () => {
    router.push("/shop-left-sidebar-col-3");
  };

  const toggleDropdown = (section: any) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const getSubcategories = (categoryName: string) => {
    return subcategories.filter((sub: any) => sub.category === categoryName);
  };

  const handleCategoryClick = (categoryName: string) => {
    handleCategoryChange(categoryName);
    toggleDropdown(categoryName);
  };

  return (
    <>
      {isFilterOpen && (
        <div className="filter-sidebar-overlay" onClick={closeFilter}></div>
      )}
      <div
        className={`gi-shop-sidebar col-lg-3 col-md-12 m-t-991 ${
          ((order = -1), none)
        }`}
      >
        <div id="shop_sidebar">
          <div className="gi-sidebar-wrap">
            {/* <!-- Sidebar Category Block --> */}
            <div className="gi-sidebar-block">
              <div
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                className="gi-sb-title"
              >
                <h3 className="gi-sidebar-title">Categorías</h3>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => toggleDropdown("category")}
                >
                  <GoChevronDown />
                </div>
              </div>
              <SmoothCollapse
                expanded={isOpen.category}
                heightTransition="1s ease"
              >
                <div
                  style={{ display: isOpen.category ? "block" : "none" }}
                  className={`gi-cat-sub-dropdown gi-sb-block-content`}
                >
                  <ul>
                    {/* Check if data is an array before mapping */}
                    {categoryData.map((category: any, index: number) => (
                      <li key={index}>
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
              </SmoothCollapse>
            </div>
            {/* <!-- Sidebar Category Block End --> */}
              {showButton && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    paddingTop: "20px",
                  }}
                >
                  <button onClick={handleFilterBtn} className="gi-btn-2">
                    Filter
                  </button>
                </div>
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarArea;
