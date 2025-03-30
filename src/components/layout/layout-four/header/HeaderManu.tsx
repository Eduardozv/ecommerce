"use client";
import React, { useState } from "react";
import useSWR from "swr";
import fetcher from "@/components/fetcher-api/Fetcher";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/navigation";

const HeaderManu = ({
  onSuccess = () => {},
  onError = () => {},
}: any) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  const { data: groups, error: groupsError } = useSWR(`/api/groups`, fetcher, {
    onSuccess,
    onError,
  });

  const { data: categories, error: categoriesError } = useSWR(`/api/categories`, fetcher, {
    onSuccess,
    onError,
  });

  const { data: subcategories, error: subcategoriesError } = useSWR(`/api/subcategories`, fetcher, {
    onSuccess,
    onError,
  });

  if (groupsError || categoriesError || subcategoriesError) return <div>Failed to load data</div>;
  if (!groups || !categories || !subcategories) return <div></div>;

  const handleProductClick = (index: number) => {
    setSelectedIndex(index);
  };

  const handleCategoryClick = (categorySlug: string) => {
    // Navigate to /shop-categories with the selected category as a query parameter
    router.push(`/tienda/?categoria=${categorySlug}`);
  };

  const handleSubCategoryClick = (subcategorySlug: string, categorySlug: string) => {
    // Navigate to /shop-categories with the selected subcategory as a query parameter
    router.push(`/tienda/?categoria=${categorySlug}&subcategoria=${subcategorySlug}`);
  };

  return (
    <>
      <div className="gi-header-cat d-none d-lg-block">
        <div className="container position-relative">
          <div className="gi-nav-bar">
            {/* <!-- Category Toggle --> */}
            <Tabs
              selectedIndex={selectedIndex}
              onSelect={(selectedIndex) => setSelectedIndex(selectedIndex)}
              className="gi-category-icon-block"
            >
              <div className="gi-category-menu">
                <div className="gi-category-toggle">
                  <i className="fi fi-rr-apps"></i>
                  <span className="text">Categorías</span>
                  <i
                    className="fi-rr-angle-small-down d-1199 gi-angle"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div className="gi-cat-dropdown">
                <div className="gi-cat-block">
                  <div className="gi-cat-tab">
                    <TabList>
                      <div
                        className="gi-tab-list nav flex-column nav-pills me-3"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        {/* Dynamically render tabs based on groups */}
                        {groups.map((group: any, index: number) => (
                          <Tab key={group.name}>
                            <button
                              className={`tab nav-link ${
                                selectedIndex === index ? "active" : ""
                              }`}
                              onClick={() => handleProductClick(index)}
                              id={`v-pills-${group.name}-tab`}
                              data-bs-toggle="pill"
                              data-bs-target={`#v-pills-${group.name}`}
                              type="button"
                              role="tab"
                              aria-controls={`v-pills-${group.name}`}
                              aria-selected={selectedIndex === index}
                              style={{
                                padding: "10px 50px 10px 20px",
                                marginBottom: "10px",
                              }}
                            >
                              <i className={group.icon}></i> {group.name}
                            </button>
                          </Tab>
                        ))}
                      </div>
                    </TabList>
                    <div className="tab-content" id="v-pills-tabContent">
                      <Fade duration={500} delay={200}>
                        {/* Dynamically render TabPanels based on groups */}
                        {groups.map((group: any, index: number) => (
                          <TabPanel
                            key={group.name}
                            className={`tab-pane fade ${
                              selectedIndex === index
                                ? "show active product-block"
                                : ""
                            }`}
                            id={`v-pills-${group.name}`}
                            role="tabpanel"
                            aria-labelledby={`v-pills-${group.name}-tab`}
                          >
                            <div className="tab-list row">
                              {group.categories?.map((categoryName: string, catIndex: number) => {
                                // Find the category object by name
                                const category = categories.find(
                                  (cat: any) => cat.name === categoryName
                                );

                                if (!category) return null;

                                return (
                                  <div className="col" key={catIndex}>
                                    <span
                                      onClick={() => handleCategoryClick(category.name)}
                                      className="gi-col-title"
                                    >
                                      {category.name}
                                    </span>
                                    <ul className="cat-list">
                                      {subcategories
                                        .filter(
                                          (sub: any) => sub.category === category.name
                                        )
                                        .map((sub: any, subIndex: number) => (
                                          <li key={subIndex}>
                                            <span
                                              onClick={() => handleSubCategoryClick(sub.name, sub.category)}
                                              style={{
                                                cursor: "pointer",
                                                color: "#555",
                                                textDecoration: "none",
                                              }}
                                            >
                                              {sub.name}
                                            </span>
                                          </li>
                                        ))}
                                    </ul>
                                  </div>
                                );
                              })}
                            </div>
                          </TabPanel>
                        ))}
                      </Fade>
                    </div>
                  </div>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderManu;
