import React from "react";
import { useRouter, usePathname } from "next/navigation";

const CategoryItem = ({ data }) => {
  const router = useRouter();
  const pathname = usePathname(); // Get the current route

  const handleCategoryClick = (event) => {
    event.preventDefault(); // Prevent default behavior of <a> tag

    const newUrl = `/tienda/?grupo=${data.name}`;

    if (pathname === "/tienda/") {
      // Check if the current URL already matches the new URL

      router.replace(newUrl); // Replace the route only if it's different

      // Delay the scroll to ensure the DOM is updated
      setTimeout(() => {
        const tiendaElement = document.getElementById("shop");
        if (tiendaElement) {
          tiendaElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Adjust the delay as needed
    } else {
      // Navigate to /tienda/ if not already there
      router.push(newUrl);
    }
  };

  return (
    <a onClick={handleCategoryClick} className="gi-cat-item">
      <div className="gi-cat-icon">
        <span className="gi-lbl">{data.persantine}</span>
        <i className={data.icon}></i>
        <div className="gi-cat-detail">
          <h4 className="gi-cat-title">{data.name}</h4>
        </div>
      </div>
    </a>
  );
};

export default CategoryItem;
