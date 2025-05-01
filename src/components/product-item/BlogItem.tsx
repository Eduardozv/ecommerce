import utils from "@/utility/utils";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

function BlogItem({ data }) {
  const router = useRouter();

  const handleBlogClick = () => {
    const titleSlug = data.title.toLowerCase().replace(/ /g, '-');
    router.push(`/noticia?nombre=${titleSlug}`);
  };

  return (
    <>
      <figure className="blog-img">
        <a onClick={handleBlogClick}>
          <img src={data.image} alt="news imag" />
        </a>
      </figure>
      <div className="detail">
        <label>
          {utils.formatDate(data.dateAdded)}
          <a onClick={handleBlogClick}>
            {data.name}
          </a>
        </label>
        <h3>
          <a onClick={handleBlogClick}>
            {data.title}
          </a>
        </h3>
        <div className="more-info">
          <a onClick={handleBlogClick}>
            Leer Más
            <i className="fi-rr-angle-double-small-right"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default BlogItem;
