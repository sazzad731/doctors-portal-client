import clock from "../../../assets/icons/clock.svg"
import marker from "../../../assets/icons/marker.svg"
import phone from "../../../assets/icons/phone.svg"
import InfoCard from "./InfoCard";

const InfoCards = () =>{
  const cardData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Open 9.00am to 5.00pm evreyday",
      icon: clock,
      bgClass: "bg-gradient-to-r primary-gradient",
    },
    {
      id: 2,
      name: "Visit our location",
      description: "Brooklyn, NY 10036, United States",
      icon: marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      name: "Contact us now",
      description: "+000 123 456789",
      icon: phone,
      bgClass: "bg-gradient-to-r primary-gradient",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-3 md-mx-0 mb-32">
      {
        cardData.map(card=><InfoCard key={card.id} card={card}/>)
      }
    </div>
  );
};

export default InfoCards;