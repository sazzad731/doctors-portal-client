import Footer from "../../Components/Footer/Footer";
import HomeAppointment from "./HomeAppointment/HomeAppointment";
import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs/ContactUs";
import InfoCards from "./InfoCards/InfoCards";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <InfoCards />
      <Services />
      <HomeAppointment />
      <Testimonial />
      <ContactUs />
    </div>
  );
};

export default Home;