import H4Title from "../../../Components/H4Title/H4Title";
import quote from "../../../assets/icons/quote.svg"
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from "./Review";

const Testimonial = () =>{
  
  const reviews = [
    {
      id: 1,
      name: "Winson Herry",
      country: "California",
      description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1
    },
    {
      id: 2,
      name: "Winson Herry",
      country: "California",
      description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2
    },
    {
      id: 3,
      name: "Winson Herry",
      country: "California",
      description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3
    },
  ];
  
  return (
    <section className="mx-4 mb-36">
      <div className="flex justify-between mb-20">
        <div>
          <H4Title className="mb-3">Testimonial</H4Title>
          <h2 className="text-4xl">What Our Patients Says</h2>
        </div>
        <img className="w-24 lg:w-48" src={quote} alt="Quote" />
      </div>
      <div className="grid grid-col-span-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        {
          reviews.map(review => <Review key={review.id} reviewData={review} />)
        }
      </div>
    </section>
  );
};

export default Testimonial;