import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard/ServiceCard";
import ServiceBanner from "./ServiceBanner/ServiceBanner";
import H4Title from "../../../Components/H4Title/H4Title";


const Services = () =>{
  
  const serviceCardData = [
    {
      id: 1,
      title: "Fluoride Treatment",
      img: fluoride,
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 2,
      title: "Cavity Filling",
      img: cavity,
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 3,
      title: "Teeth Whitening",
      img: whitening,
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <div className="mb-40">
      {/* <h4 className="text-secondary text-xl font-bold text-center mb-2">OUR SERVICES</h4> */}
      <H4Title className="text-center">OUR SERVICES</H4Title>
      <h2 className="text-4xl text-center mb-16">Services We Provide</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-36 mx-3 xl:mx-0">
        {serviceCardData.map((card) => (
          <ServiceCard key={card.id} card={card} />
        ))}
      </div>
      <ServiceBanner />
    </div>
  );
};

export default Services;