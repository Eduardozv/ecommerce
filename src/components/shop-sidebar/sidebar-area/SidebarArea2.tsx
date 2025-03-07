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
  handleWeightChange,
  handleColorChange,
  handleTagsChange,
  selectedColor,
  selectedTags,
  selectedCategory,
  selectedWeight,
  closeFilter,
  handlePriceChange,
  min,
  max,
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

  const { data, error } = useSWR(`/api/categories`, fetcher, {
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

  if (error) return <div>Failed to load products</div>;
  if (!data) return <div></div>;

  const getData = () => {
    if (hasPaginate) return data.data;
    else return data;
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
                style={{ display: "flex", justifyContent: "space-evenly" }}
                className="gi-sb-title"
              >
                <h3 className="gi-sidebar-title">Category</h3>
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
                        {/* Assuming ShopCategoryBlock accepts a 'data' prop */}
                        <div className="gi-sidebar-block-item">
                          <input
                            checked={selectedCategory?.includes(
                              category.name
                            )}
                            onChange={() =>
                              handleCategoryChange(category.name)
                            }
                            type="checkbox"
                          />
                          <Link href="/">
                            <span>
                              <i
                                className={`${renderIcon(category.name)}`}
                              ></i>
                              {category.name}
                            </span>
                          </Link>
                          <span className="checked"></span>
                        </div>
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
