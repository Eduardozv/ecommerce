"use client";
import { useMemo } from "react";
import { Col } from "react-bootstrap";
import SingleProductContent from "./single-product-content/SingleProductContent2";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import Spinner from "../button/Spinner";
import { useDispatch } from "react-redux";

import { useSearchParams } from "next/navigation"; // Import useRouter and useSearchParams

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

  // const {
  //   selectedCategory,
  //   selectedWeight,
  //   minPrice,
  //   maxPrice,
  //   selectedColor,
  //   selectedTags,
  // } = useSelector((state: RootState) => state.filter);

  // const { selectedProduct } = useSelector((state: RootState) => state.product); // Get selectedProduct from productReducer

  // useEffect(() => {
  //   if (!selectedProduct && titleSlug) {
  //     // Fetch product data from API if not available in Redux
  //     fetch(`/api/product?titleSlug=${titleSlug}`, {
  //       method: 'POST',
  //     })
  //       .then(response => response.json())
  //       .then(data => {
  //         if (data.error) {
  //           console.error(data.error);
  //         } else {
  //           dispatch(setSelectedProduct(data));
  //         }
  //       })
  //       .catch(error => console.error('Error fetching product:', error));
  //   }
  // }, [selectedProduct, titleSlug, dispatch]);

  const postData = useMemo(() => ({ titleSlug: titleSlug }), [titleSlug]);

  // Llamado a la API con el filtro
  const { data, error } = useSWR(
    ["/api/products", postData],
    ([url, postData]) => fetcher(url, postData)
  );

  if (error) return <div>Fallo en cargar producto</div>;
  if (!data)
    return (
      <div>
        <Spinner />
      </div>
    );

  const selectedProduct = data.data[0];

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
    </>
  );
};

export default ProductPage;
