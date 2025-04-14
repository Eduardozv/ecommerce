import Link from "next/link";
import React from "react";

const CategoryItem = ({ data }) => {
  return (
    <div className="gi-cat-icon">
      <span className="gi-lbl">{data.persantine}</span>
      <i className={data.icon}></i>
      <div className="gi-cat-detail">
        <Link href={`?grupo=${data.name}`}>
          <h4 className="gi-cat-title">{data.name}</h4>
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
