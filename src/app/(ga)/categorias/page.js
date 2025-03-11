import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import ResponsiveShop from '@/components/shop/ResponsiveShop';

const page = () => {

  return (
    <>
      <Breadcrumb title={"Productos"} />
      <section className="gi-shop">
        <div className="container">
          <ResponsiveShop />
        </div>
      </section>
    </>
  );
};

export default page;
