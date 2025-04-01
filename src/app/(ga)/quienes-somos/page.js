import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import About from '@/components/about-us/About2'
import Service from '@/components/about-us/Service2'
import Testimonials from '@/components/about-us/Testimonials'
import Facts from '@/components/about-us/Facts'
import Team from '@/components/about-us/Team'


const Page = () => {
    return (
        <>
            <Breadcrumb title={"Quiénes Somos"} />
            <About />
            <Service />
        </>
    )
}

export default Page;
