"use client";
import React, { useState } from "react";
import Link from "next/link";
import useSWR from "swr";
import fetcher from "@/components/fetcher-api/Fetcher";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/navigation";
import links from "@/utility/links";

const HeaderManu = ({
onSuccess = () => {},
onError = () => {},
}: any) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isDropdownHidden, setIsDropdownHidden] = useState(false); // State to hide dropdown
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

  const scrollToShop = () => {
    // Desplazar al inicio de la tienda
    // Delay the scroll to ensure the DOM is updated
    setTimeout(() => {
      const tiendaElement = document.getElementById("shop");
      if (tiendaElement) {
        tiendaElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Adjust the delay as needed
  }

  // Function that finds the group that contains the selected category
  const getUrlGroupByCategory = (category: string) => {
    const group = groups.find((group: any) => group.categories.includes(category));
    return group ? "grupo=" + group.name + "&" : "";
  };

  const handleCategoryOrSubCategoryClick = (
    categorySlug: string,
    subcategorySlug?: string
  ) => {
    const urlGroup = getUrlGroupByCategory(categorySlug);

    // Construct the URL based on whether a subcategory is provided
    const newUrl = subcategorySlug
      ? `/tienda/?${urlGroup}categoria=${categorySlug}&subcategoria=${subcategorySlug}`
      : `/tienda/?${urlGroup}categoria=${categorySlug}`;

    router.push(newUrl); // Navigate to the constructed URL
    setIsDropdownHidden(true); // Hide the dropdown menu
    scrollToShop(); // Scroll to the shop section
  };

  const handleMouseEnter = () => {
    setIsDropdownHidden(false); // Show the dropdown menu on hover
  };

  return (
    <>
      <div className="gi-header-cat d-none d-lg-block">
        <div className="container position-relative">
          <div className="gi-nav-bar">
            <Tabs
              selectedIndex={selectedIndex}
              onSelect={(selectedIndex) => setSelectedIndex(selectedIndex)}
              className="gi-category-icon-block"
              onMouseEnter={handleMouseEnter} // Show dropdown on hover
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
              <div
                className={`gi-cat-dropdown ${isDropdownHidden ? "hidden" : ""}`} // Conditionally add "hidden" class
              >
                <div className="gi-cat-block">
                  <div className="gi-cat-tab">
                    <TabList>
                      <div
                        className="gi-tab-list nav flex-column nav-pills me-3"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
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
                                const category = categories.find(
                                  (cat: any) => cat.name === categoryName
                                );

                                if (!category) return null;

                                return (
                                  <div className="col" key={catIndex}>
                                    <span
                                      onClick={() => handleCategoryOrSubCategoryClick(category.name)}
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
                                              onClick={() => handleCategoryOrSubCategoryClick(sub.category, sub.name)}
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

            {/* <!-- Main Menu Start --> */}
            <div
              id="gi-main-menu-desk"
              className="d-none d-lg-block sticky-nav"
            >
              <div className="nav-desk">
                <div className="row">
                  <div className="col-md-12 align-self-center">
                    <div className="gi-main-menu">
                      <ul>
                        {links.map((link, index) => (
                        <li key={index} className="non-drop">
                          <Link  href={link.href}>
                            {link.name}
                          </Link>
                        </li>
                      ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Main Menu End --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderManu;
