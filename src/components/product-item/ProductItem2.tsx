import { useState, useMemo } from "react";
import { Col } from "react-bootstrap";
import ItemCard from "./ItemCard2";
import fetcher from "../fetcher-api/Fetcher";
import Spinner from "../button/Spinner";
import useSWR from "swr";

function ProductAll({
  category = "",
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}) {

  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };
  // Define el postData con el filtro de status
  const postData = useMemo(() => ({ selectedCategory: category == "" ? [] : [category], sortOption: "2" }), []);

  // Llamado a la API con el filtro
  const { data, error } = useSWR(
    ["/api/products", postData],
    ([url, postData]) => fetcher(url, postData)
  );

  if (error) return <div>Fallo en cargar productos</div>;
  if (!data)
    return (
      <div>
        <Spinner />
      </div>
    );

  const getData = () => {
    return data.data;
  };

  return (
    <>
      {getData().map((item: any, index: number) => (
        <Col
          key={index}
          md={4}
          className={`col-sm-6 gi-product-box gi-col-5 ${
            selected ? "active" : ""
          }`}
          onClick={handleClick}
        >
          <ItemCard data={item} />
        </Col>
      ))}
    </>
  );
}

export default ProductAll;
