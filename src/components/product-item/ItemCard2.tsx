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
const ItemCard = ({ data }: any) => {
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
    router.push(`/producto?titleSlug=${titleSlug}`);
  };

  return (
    <>
      <div className="gi-product-content">
        <div className={` gi-product-inner`}>
          <div className="gi-pro-image-outer">
            <div className="gi-pro-image">
              <Link onClick={handleSubmit} href="/" className="image">
                <span className="label veg">
                  <span className="dot"></span>
                </span>
                <img className="main-image" src={data?.images[0]} alt="Product" />
                {data?.images[1] && <img
                  className="hover-image"
                  src={data.images[1]}
                  alt="Product"
                />}
              </Link>
              <span className="flags">
                {data.status && (
                  <span className={data.status === "Available" ? "sale" : "new"}>
                    {data.status}
                  </span>
                )}
              </span>
            </div>
          </div>
          <div className="gi-pro-content">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Link href="/shop-left-sidebar-col-3">
                <h6 className="gi-pro-stitle">{data.category}</h6>
              </Link>
              <Link href="/shop-left-sidebar-col-3">
                <h6 className="gi-pro-stitle">{data.subcategory}</h6>
              </Link>
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
