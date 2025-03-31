import { Row } from 'react-bootstrap'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import ProductPage from '@/components/product-page/ProductPage2'
import RelatedProduct from '@/components/product-page/related-product/RelatedProduct'

export const metadata = {
    title: "Productos GA Instalaciones Comerciales",
    description: "Descubre nuestra tienda de GA Instalaciones Comerciales, donde encontrarás una amplia variedad de productos y servicios para satisfacer todas tus necesidades comerciales. Desde equipos de refrigeración hasta soluciones de instalación, tenemos todo lo que necesitas para llevar tu negocio al siguiente nivel.",
  };

const page = () => {
    return (
        <>


            <Breadcrumb title={"Producto"} />
            <section className="gi-single-product padding-tb-40">
                <div className="container">
                    <Row>
                        <ProductPage
                            none={'none'}
                            lg={12}
                        />

                    </Row>
                </div>
            </section>
            <RelatedProduct />

        </>
    )
}

export default page
