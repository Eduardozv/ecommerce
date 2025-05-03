import { Row } from 'react-bootstrap'
import SingleCatalog from '@/components/catalog/SingleCatalog'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'

const page = () => {
    return (
        <>


            <Breadcrumb title={"Catálogo"} />
            <section className="gi-blog padding-tb-40">
                <div className="container">
                    <Row>
                        <SingleCatalog
                            lg={12}
                        />
                    </Row>
                </div>
            </section>

        </>
    )
}

export default page
