"use client";
import { useEffect } from "react";
import { GoChevronDown } from "react-icons/go";
import useSWR from "swr";
import fetcher from "@/components/fetcher-api/Fetcher";
import { useRouter, useSearchParams } from "next/navigation";
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
  isOpen,
  toggleDropdown,
}: any) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { data: categories, error: categoriesError } = useSWR(`/api/categories`, fetcher, {
    onSuccess,
    onError,
  });

  const { data: subcategories, error: subcategoriesError } = useSWR(`/api/subcategories`, fetcher, {
    onSuccess,
    onError,
  });

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    const categoryFromParams = params.get("categoria");
    const subcategoryFromParams = params.get("subcategoria");

    // Update the selected category
    handleCategoryChange(categoryFromParams);
    toggleDropdown(categoryFromParams);

    handleSubCategoryChange(subcategoryFromParams);

  }, [searchParams]);

  if (categoriesError || subcategoriesError) return <div>Failed to load data</div>;
  if (!categories || !subcategories) return <div></div>;

  const getData = () => {
    if (hasPaginate) return categories.data;
    else return categories;
  };

  const categoryData = getData();

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

  const getSubcategories = (categoryName: string) => {
    return subcategories.filter((sub: any) => sub.category === categoryName);
  };

  const handleCategoryClick = (categoryName: string) => {
    const params = new URLSearchParams(searchParams.toString());
  
    if (selectedCategory.includes(categoryName)) {
      // Remove the category
      params.delete("categoria");
      params.delete("subcategoria"); // Clear subcategories when category is deselected
    } else {
      // Add the category
      params.set("categoria", categoryName);
    }
  
    // Update the URL
    router.replace(`/tienda/?${params.toString()}`, { scroll: false });
  };
  
  const handleSubCategoryClick = (subcategoryName: string) => {
    const params = new URLSearchParams(searchParams.toString());
  
    if (selectedSubCategory.includes(subcategoryName)) {
      // Remove the subcategory
      params.delete("subcategoria");
    } else {
      // Add the subcategory
      params.set("subcategoria", subcategoryName);
    }
  
    // Update the URL
    router.replace(`/tienda/?${params.toString()}`, { scroll: false });
  };

  console.log('selectedCategory', selectedCategory);
  console.log('selectedSubCategory', selectedSubCategory);
  console.log('isOpen', isOpen);

  return (
    <>
      {isFilterOpen && (
        <div className="filter-sidebar-overlay" onClick={closeFilter}></div>
      )}
      <div
        className={`gi-shop-sidebar col-lg-3 col-md-12 ${
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
              </div>
              <div>
                <div
                  className={`gi-cat-sub-dropdown gi-sb-block-content`}
                >
                  <ul>
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
                            <a>
                              <span>
                                <i
                                  className={`${renderIcon(category.name)}`}
                                ></i>
                                {category.name}
                              </span>
                            </a>
                            <span className="checked"></span>
                          </div>
                          <div
                            style={{ cursor: "pointer" }}
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
                            className={`gi-cat-sub-dropdown gi-sb-block-content`}
                            style={{ display: isOpen[category.name] ? "block" : "none", paddingLeft: "28px" }}  
                          >
                            <ul>
                              {getSubcategories(category.name).map((subcategory: any, subIndex: number) => (
                                <li key={subIndex}>
                                  <div className="gi-sidebar-block-item" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                      <input
                                        checked={selectedSubCategory?.includes(subcategory.name)}
                                        onChange={() =>
                                          handleSubCategoryClick(subcategory.name)
                                        }
                                        type="checkbox"
                                      />
                                      <a>
                                        <span>
                                          {subcategory.name}
                                        </span>
                                      </a>
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
      </div>
    </>
  );
};

export default SidebarArea;
