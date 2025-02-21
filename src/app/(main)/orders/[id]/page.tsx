import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import ProductOrderDetails from "@/components/order-page/OrdersDetails";
import { Row } from "react-bootstrap";

const page = ({ params: { id } }: { params: { id: number } }) => {
  return (
    <>
      {/* {params.id} */}
      <Breadcrumb title={"My Orders Details"} />
      <section className="gi-blog padding-tb-40">
        <div className="container">
          <Row>
            <ProductOrderDetails id={id} />
          </Row>
        </div>
      </section>
    </>
  );
};

export default page;
