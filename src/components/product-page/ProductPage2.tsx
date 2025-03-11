"use client";
import { useCallback } from "react";
import SidebarArea from "../shop-sidebar/sidebar-area/SidebarArea";
import { Swiper, SwiperSlide } from "swiper/react";
import StarRating from "../stars/StarRating";
import ProductTeb from "./product-teb/ProductTeb";
import { Col } from "react-bootstrap";
import SingleProductContent from "./single-product-content/SingleProductContent";
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

const ProductPage = ({
  order = "",
  none = "none",
  lg = 12,
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}) => {
  const dispatch = useDispatch();
  const {
    selectedCategory,
    selectedWeight,
    minPrice,
    maxPrice,
    selectedColor,
    selectedTags,
  } = useSelector((state: RootState) => state.filter);

  const { data, error } = useSWR("/api/moreitem", fetcher, {
    onSuccess,
    onError,
  });

  const handlePriceChange = useCallback(
    (min: number, max: number) => {
      dispatch(setRange({ min, max }));
    },
    [dispatch]
  );

  if (error) return <div>Failed to load products</div>;
  if (!data)
    return (
      <div>
        <Spinner />
      </div>
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

  const getData = () => {
    if (hasPaginate) return data.data;
    else return data;
  };

  let filteredData = [...data];

  if (selectedCategory.length > 0) {
    filteredData = filteredData.filter((item) =>
      selectedCategory.includes(item.category)
    );
  }

  if (selectedWeight.length > 0) {
    filteredData = filteredData.filter((item) =>
      selectedWeight.includes(item.weight)
    );
  }

  if (selectedColor.length > 0) {
    filteredData = filteredData.filter((item) =>
      selectedColor.includes(item.Color)
    );
  }

  if (selectedTags.length > 0) {
    filteredData = filteredData.filter((item) =>
      selectedTags.includes(item.tags)
    );
  }

  return (
    <>
      <Col
        lg={lg}
        md={12}
        className={`gi-pro-rightside gi-common-rightside ${order}`}
      >
        {/* <!-- Single product content Start --> */}
        <div className="single-pro-block">
          <SingleProductContent />
        </div>
        {/* <!--Single product content End  --> */}

        {/* <!-- Single product tab start --> */}
        <ProductTeb />
        {/* <!-- product details description area end --> */}
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
