import Link from "next/link";
import React from "react";

const CategoryItem = ({ data }) => {
  return (
    <Link href={`/tienda/?grupo=${data.name}`}>
      <div className="gi-cat-icon">
        <span className="gi-lbl">{data.persantine}</span>
        <i className={data.icon}></i>
        <div className="gi-cat-detail">
          <h4 className="gi-cat-title">{data.name}</h4>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
