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

  // Define limit as if screen width is higher than 768px is 10, otherwise if is higher than 420px is 6, otherwise is 4
  const limit = useMemo(() => {
    if (window.innerWidth > 1200) {
      return 10;
    } else if (window.innerWidth > 768) {
      return 6;
    } else if (window.innerWidth > 420) {
      return 4;
    } else {
      return 3;
    }
  }, []);
  
  // Define el postData con el filtro de status
  const postData = useMemo(() => ({ selectedCategory: category == "" ? [] : [category], sortOption: "2", limit: limit }), []);

  // Llamado a la API con el filtro
  const { data, error } = useSWR(
    ["/api/products", postData],
    ([url, postData]) => fetcher(url, postData)
  );

  const { data: groups, error: groupsError } = useSWR(`/api/groups`, fetcher, {
    onSuccess: () => console.log("Groups data fetched successfully"),
    onError: () => console.log("Error fetching groups data"),
  });

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
          <ItemCard data={item} groups={groups} />
        </Col>
      ))}
    </>
  );
}

export default ProductAll;
