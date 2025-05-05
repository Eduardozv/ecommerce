import { Row } from 'react-bootstrap'
import CatalogsFullwidth from '@/components/catalog/CatalogsFullwidth'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'

const page = () => {
    return (
        <>


            <Breadcrumb title={"Catálogos"} />
            <section className="gi-blog padding-tb-40">
                <div className="container">
                    <Row>
                        <CatalogsFullwidth
                            lg={4}
                            md={6}
                        />
                    </Row>
                </div>
            </section>

        </>
    )
}

export default page
