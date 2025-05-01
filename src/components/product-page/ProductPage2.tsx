"use client";
import { useMemo } from "react";
import { Col } from "react-bootstrap";
import SingleProductContent from "./single-product-content/SingleProductContent2";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import Spinner from "../button/Spinner";

import { useSearchParams } from "next/navigation"; // Import useRouter and useSearchParams

const ProductPage = ({
  order = "",
  none = "none",
  lg = 12,
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}) => {
  const searchParams = useSearchParams();
  const titleSlug = searchParams.get('nombre');

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
