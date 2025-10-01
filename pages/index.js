import About from "@/components/templates/Home/About";
import Menu from "@/components/templates/Home/Menu";
import Offer from "@/components/templates/Home/Offer";
import Reservation from "@/components/templates/Home/Reservation";
import Services from "@/components/templates/Home/Services";
import Slider from "@/components/templates/Home/Slider";
import Testimonials from "@/components/templates/Home/Testimonials";


export default function Home({ data }) {
  return (
    <div>
      <Slider />
      <About />
      <Services data={data.servicesData} />
      <Offer />
      <Menu data={data.menusData} />
      <Reservation />
      <Testimonials data={data.commentsData} />
    </div>
  );
}
export async function getStaticProps() {
  //services
  const servicesResponse = await fetch("http://localhost:4000/services");
  const servicesData = await servicesResponse.json();

  //menu
  const menusResponse = await fetch("http://localhost:4000/menu");
  const menusData = await menusResponse.json();
  //clients
  const commentsResponse = await fetch("http://localhost:4000/comments");
  const commentsData = await commentsResponse.json();
  return {
    props: {
      data: {
        servicesData,
        menusData,
        commentsData,
      },
    },
  };
}
