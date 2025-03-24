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

  useEffect(() => {
    const allCategories = searchParams.getAll("category");
    const allSubcategories = searchParams.getAll("subcategory");
  
    allCategories.forEach((cat) => {
      if (!selectedCategory.includes(cat)) {
        handleCategoryChange(cat);
        toggleDropdown(cat);
      }
    });
  
    allSubcategories.forEach((sub) => {
      if (!selectedSubCategory.includes(sub)) {
        handleSubCategoryChange(sub);
      }
    });
  }, [searchParams]);

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
    handleCategoryChange(categoryName);
    toggleDropdown(categoryName);
  
    const params = new URLSearchParams(searchParams.toString());
    const existingCategories = params.getAll("category");
  
    if (selectedCategory.includes(categoryName)) {
      // It's already selected → unselect it
      params.delete("category");
      existingCategories
        .filter((cat) => cat !== categoryName)
        .forEach((cat) => params.append("category", cat));
    } else {
      // Add to selected
      params.append("category", categoryName);
    }
  
    router.replace(`/categorias/?${params.toString()}`);
  };
  
  const handleSubCategoryClick = (subcategoryName: string) => {
    handleSubCategoryChange(subcategoryName);
  
    const params = new URLSearchParams(searchParams.toString());
    const existingSubCategories = params.getAll("subcategory");
  
    if (selectedSubCategory.includes(subcategoryName)) {
      // Unselect
      params.delete("subcategory");
      existingSubCategories
        .filter((sub) => sub !== subcategoryName)
        .forEach((sub) => params.append("subcategory", sub));
    } else {
      params.append("subcategory", subcategoryName);
    }
  
    router.replace(`/categorias/?${params.toString()}`);
  };

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
                                        checked={selectedSubCategory?.includes(
                                          subcategory.name
                                        )}
                                        onChange={() =>
                                          handleSubCategoryClick(subcategory.name)
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
      </div>
    </>
  );
};

export default SidebarArea;
