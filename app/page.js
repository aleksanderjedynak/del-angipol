// import Header from "@/src/components/Header";
// import Testimonials from "@/src/components/Testimonials";
import About from "@/src/components/About";
// import Hotel from "@/src/components/Hotel";
// import {Schedule} from "@/src/components/Schedule";
import Faqs from "@/src/components/Faqs";
// import Pricing from "@/src/components/Pricing";
import Contact from "@/src/components/Contact";
// import Footer from "@/src/components/Footer";
import Organizers from "@/src/components/Organizers";


export default function Page() {
  return (
        <div className="bg-white">
      {/*<Header></Header>*/}
      <main>
        <About></About>
        {/*<Testimonials></Testimonials>*/}
        {/*<Schedule></Schedule>*/}
        {/*<Hotel></Hotel>*/}
        {/*<Pricing></Pricing>*/}
        <Faqs></Faqs>
        <Organizers></Organizers>
        <Contact></Contact>
      </main>
      {/*<Footer></Footer>*/}
    </div>
  );
}