import chair from "../../../assets/images/chair.png"
import bg from "../../../assets/images/bg.png"
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
const Banner = () =>{
  return (
    <section>
      <div
        className="hero min-h-screen bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="lg:w-1/2 lg:mb-0 mb-16 rounded-lg lg:shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryButton>GET STARTED</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;