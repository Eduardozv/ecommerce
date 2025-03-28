import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import Shop from '@/components/shop-sidebar/Shop2';

const page = () => {

  return (
    <>
      <Breadcrumb title={"Productos"} />
      <section className="gi-shop">
        <div className="container">
          <>
            <Shop
              order={"order-lg-last order-md-first"}
              lg={9}
              xl={4}
            />
          </>
        </div>
      </section>
    </>
  );
};

export default page;
