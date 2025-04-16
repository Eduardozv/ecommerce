import { useEffect, useState } from "react";
import QuickViewModal from "../model/QuickViewModal";
import { useDispatch } from "react-redux";
import {
  setItems,
} from "../../store/reducers/cartSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setSelectedProduct } from "@/store/reducers/productSlice";

interface Item {
  id: number;
  title: string;
  newPrice: number;
  waight: string;
  image: string;
  imageTwo: string;
  date: string;
  status: string;
  rating: number;
  oldPrice: number;
  location: string;
  brand: string;
  sku: number;
  category: string;
  subcategory: string;
  quantity: number;
  titleSlug: string;
}
const ItemCard = ({ data, groups }: any) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const itemsFromLocalStorage =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("products") || "[]")
        : [];
    if (itemsFromLocalStorage.length) {
      dispatch(setItems(itemsFromLocalStorage));
    }
  }, [dispatch]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const handleClose = () => setShow(false);

  const handleProductClick = () => {
    const titleSlug = data.title.toLowerCase().replace(/ /g, '-');
    dispatch(setSelectedProduct(data)); // Save product data in Redux
    router.push(`/producto?nombre=${titleSlug}`);
  };

  // Function that finds the group that contains the selected category
  const getUrlGroupByCategory = (category: string) => {
    console.log('categorySlug', category);
    const group = groups.find((group: any) => group.categories.includes(category));
    return group ? "grupo=" + group.name + "&" : "";
  };

  const handleCategoryClick = (categorySlug: string) => {
    const urlGroup = getUrlGroupByCategory(categorySlug);
    // Navigate to /shop-categories with the selected category as a query parameter
    router.replace(`/tienda/?${urlGroup}categoria=${categorySlug}`, { scroll: false });
  };

  const handleSubCategoryClick = (subcategorySlug: string, categorySlug: string) => {
    const urlGroup = getUrlGroupByCategory(categorySlug);
    // Navigate to /shop-categories with the selected subcategory as a query parameter
    router.replace(`/tienda/?${urlGroup}categoria=${categorySlug}&subcategoria=${subcategorySlug}`, { scroll: false });
  };

  return (
    <>
      <div className="gi-product-content">
        <div className={` gi-product-inner`}>
          <div className="gi-pro-image-outer">
            <div className="gi-pro-image">
              <a onClick={handleProductClick} className="image">
                <span className="label veg">
                  <span className="dot"></span>
                </span>
                <img className="main-image" src={data?.images[0]} alt="Product" />
                {data?.images[1] && <img
                  className="hover-image"
                  src={data.images[1]}
                  alt="Product"
                />}
              </a>
              <span className="flags">
                {data.status && (
                  <span className={data.status === "Disponible" ? "sale" : "new"}>
                    {data.status}
                  </span>
                )}
              </span>
            </div>
          </div>
          <div className="gi-pro-content">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <a onClick={() => handleCategoryClick(data.category)}>
                <h6 className="gi-pro-stitle">{data.category}</h6>
              </a>
              <a onClick={() => handleSubCategoryClick(data.subcategory, data.category)}>
                <h6 className="gi-pro-stitle">{data.subcategory}</h6>
              </a>
            </div>
            
            <h5 className="gi-pro-title">
              <a onClick={handleProductClick}>{data.title}</a>
            </h5>
            {data.description && (<p className="gi-info">
              {data.description}
            </p>)}
            <div className="gi-pro-rat-price">
              <span className="gi-price">
                <span className="new-price">${data.newPrice}.00</span>
                {data.oldPrice !== data.newPrice && <span className="old-price">${data.oldPrice}.00</span> }
              </span>
            </div>
          </div>
        </div>
        <QuickViewModal data={data} handleClose={handleClose} show={show} />
      </div>
    </>
  );
};

export default ItemCard;
