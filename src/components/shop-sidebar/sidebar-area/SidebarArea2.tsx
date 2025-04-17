"use client";
import { useEffect } from "react";
import { GoChevronDown } from "react-icons/go";
import useSWR from "swr";
import fetcher from "@/components/fetcher-api/Fetcher";
import { useRouter, useSearchParams } from "next/navigation";
import SmoothCollapse from "react-smooth-collapse";

const SidebarArea = ({
  handleCategoryChange,
  handleSubCategoryChange,
  handleGroupChange,
  selectedCategory,
  selectedSubCategory,
  selectedGroup,
  groups,
  closeFilter,
  isFilterOpen,
  onSuccess = () => {},
  onError = () => {},
  hasPaginate = false,
  order = "order-md-last order-lg-first",
  none = "",
  isOpen,
  toggleDropdown,
  isGroupOpen, // New prop for group state
  toggleGroupDropdown, // New prop for group toggle function
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

    const groupFromParams = params.get("grupo");
    const categoryFromParams = params.get("categoria");
    const subcategoryFromParams = params.get("subcategoria");

    // Update the selected group
    handleGroupChange(groupFromParams);
    toggleGroupDropdown(groupFromParams);

    console.log('categoryFromParams', categoryFromParams);
    handleCategoryChange(categoryFromParams);
    toggleDropdown(categoryFromParams);

    handleSubCategoryChange(subcategoryFromParams);
  }, [searchParams]);

  if (categoriesError || subcategoriesError) return <div>Failed to load data</div>;
  if (!categories || !subcategories || !groups) return <div></div>;

  const getSubcategories = (categoryName: string) => {
    return subcategories.filter((sub: any) => sub.category === categoryName);
  };

  const getCategoriesByGroup = (groupName: string) => {
    const groupInfo = groups.filter((group: any) => group.name === groupName);
    if (groupInfo.length === 0 ) return [];
    return categories.filter((category: any) =>
      groupInfo[0].categories.includes(category.name)
    );
  };

  const handleGroupClick = (groupName: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (selectedGroup.includes(groupName)) {
      // Deselect the group
      params.delete("grupo");
      params.delete("categoria");
      params.delete("subcategoria");
    } else {
      // Select the group
      params.set("grupo", groupName);
      params.delete("categoria");
      params.delete("subcategoria");
    }

    // Update the URL
    router.replace(`/tienda/?${params.toString()}`, { scroll: false });
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
            {/* <!-- Sidebar Group Block --> */}
            <div className="gi-sidebar-block">
              <div
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                className="gi-sb-title"
              >
                <h3 className="gi-sidebar-title">Grupos</h3>
              </div>
              <div>
                <div className={`gi-cat-sub-dropdown gi-sb-block-content`}>
                  <ul>
                    {groups.map((group: any, groupIndex: number) => (
                      <li key={groupIndex}>
                        <div className="gi-sidebar-block-item" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          <div style={{ display: "flex", alignItems: "center" }}>
                            <input
                              checked={selectedGroup?.includes(group.name)}
                              onChange={() => handleGroupClick(group.name)}
                              type="checkbox"
                            />
                            <a>
                              <span>
                                <i className={group.icon} />
                                {group.name}
                              </span>
                            </a>
                            <span className="checked"></span>
                          </div>
                          {getCategoriesByGroup(group.name).length > 0 && (
                            <div style={{ cursor: "pointer" }}>
                              <GoChevronDown />
                            </div>
                          )}
                        </div>
                        {/* Render categories */}
                        <SmoothCollapse
                          expanded={isGroupOpen[group.name]}
                          heightTransition="1s ease"
                        >
                          <div
                            className={`gi-cat-sub-dropdown gi-sb-block-content`}
                            style={{ display: isGroupOpen[group.name] ? "block" : "none", paddingLeft: "28px" }}
                          >
                            <ul>
                              {getCategoriesByGroup(group.name).map((category: any, categoryIndex: number) => (
                                <li key={categoryIndex}>
                                  <div className="gi-sidebar-block-item" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                      <input
                                        checked={selectedCategory?.includes(category.name)}
                                        onChange={() => handleCategoryClick(category.name)}
                                        type="checkbox"
                                      />
                                      <a>
                                        <span>
                                          {category.name}
                                        </span>
                                      </a>
                                      <span className="checked"></span>
                                    </div>
                                    {getSubcategories(category.name).length > 0 && (
                                      <div style={{ cursor: "pointer" }}>
                                        <GoChevronDown />
                                      </div>
                                    )}
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
                                                  onChange={() => handleSubCategoryClick(subcategory.name)}
                                                  type="checkbox"
                                                />
                                                <a>
                                                  <span>{subcategory.name}</span>
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
