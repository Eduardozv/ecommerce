"use client";
import { useCallback, useEffect } from "react";
import SidebarArea from "../shop-sidebar/sidebar-area/SidebarArea";
import { Swiper, SwiperSlide } from "swiper/react";
import StarRating from "../stars/StarRating";
import ProductTeb from "./product-teb/ProductTeb2";
import { Col } from "react-bootstrap";
import SingleProductContent from "./single-product-content/SingleProductContent2";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import Spinner from "../button/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import {
  setRange,
  setSelectedCategory,
  setSelectedColor,
  setSelectedTags,
  setSelectedWeight,
} from "@/store/reducers/filterReducer";
import { setSelectedProduct } from "@/store/reducers/productSlice"; // Import setSelectedProduct from productSlice
import { useRouter, useSearchParams } from "next/navigation"; // Import useRouter and useSearchParams

const ProductPage = ({
  order = "",
  none = "none",
  lg = 12,
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}) => {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const titleSlug = searchParams.get('nombre');

  const {
    selectedCategory,
    selectedWeight,
    minPrice,
    maxPrice,
    selectedColor,
    selectedTags,
  } = useSelector((state: RootState) => state.filter);

  const { selectedProduct } = useSelector((state: RootState) => state.product); // Get selectedProduct from productReducer

  useEffect(() => {
    if (!selectedProduct && titleSlug) {
      // Fetch product data from API if not available in Redux
      fetch(`/api/product?titleSlug=${titleSlug}`, {
        method: 'POST',
      })
        .then(response => response.json())
        .then(data => {
          if (data.error) {
            console.error(data.error);
          } else {
            dispatch(setSelectedProduct(data));
          }
        })
        .catch(error => console.error('Error fetching product:', error));
    }
  }, [selectedProduct, titleSlug, dispatch]);

  if (!selectedProduct) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  const handlePriceChange = useCallback(
    (min: number, max: number) => {
      dispatch(setRange({ min, max }));
    },
    [dispatch]
  );

  const handleCategoryChange = (category) => {
    const updatedCategory = selectedCategory.includes(category)
      ? selectedCategory.filter((cat) => cat !== category)
      : [...selectedCategory, category];
    dispatch(setSelectedCategory(updatedCategory));
  };

  const handleWeightChange = (weight) => {
    const updatedweight = selectedWeight.includes(weight)
      ? selectedWeight.filter((wet) => wet !== weight)
      : [...selectedWeight, weight];
    dispatch(setSelectedWeight(updatedweight));
  };

  const handleColorChange = (color) => {
    const updatedcolor = selectedColor.includes(color)
      ? selectedColor.filter((clr) => clr !== color)
      : [...selectedColor, color];
    dispatch(setSelectedColor(updatedcolor));
  };

  const handleTagsChange = (tag) => {
    const updatedtag = selectedTags.includes(tag)
      ? selectedTags.filter((tg) => tg !== tag)
      : [...selectedTags, tag];
    dispatch(setSelectedTags(updatedtag));
  };

  return (
    <>
      <Col
        lg={lg}
        md={12}
        className={`gi-pro-rightside gi-common-rightside ${order}`}
      >
        {/* <!-- Single product content Start --> */}
        <div className="single-pro-block">
          <SingleProductContent product={selectedProduct} />
        </div>       
      </Col>
      {/* <!-- Sidebar Area Start --> */}

      <SidebarArea
        min={minPrice}
        max={maxPrice}
        handleCategoryChange={handleCategoryChange}
        handleWeightChange={handleWeightChange}
        handleColorChange={handleColorChange}
        handleTagsChange={handleTagsChange}
        handlePriceChange={handlePriceChange}
        selectedCategory={selectedCategory}
        selectedWeight={selectedWeight}
        selectedColor={selectedColor}
        selectedTags={selectedTags}
        none={none}
        order={order}
      />
    </>
  );
};

export default ProductPage;
