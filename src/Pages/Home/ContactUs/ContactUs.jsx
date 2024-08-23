import H4Title from "../../../Components/H4Title/H4Title";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
import bg from "../../../assets/images/appointment.png"
const ContactUs = () => {
  return (
    <div className="py-16 px-3 lg:px-0" style={{ backgroundImage: `url(${bg})` }}>
      <H4Title className="text-center mb-2">Contact Us</H4Title>
      <h2 className="text-4xl text-center text-white mb-10">
        Stay connected with us
      </h2>
      <div>
        <form className="flex flex-col items-center justify-center">
          <input
            type="text"
            placeholder="Email Address"
            className="input input-bordered w-full max-w-xs mb-5"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered w-full max-w-xs mb-5"
          />
          <textarea
            placeholder="Your message"
            className="textarea textarea-bordered textarea-lg w-full max-w-xs mb-9"
          ></textarea>
          <PrimaryButton>Submit</PrimaryButton>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;