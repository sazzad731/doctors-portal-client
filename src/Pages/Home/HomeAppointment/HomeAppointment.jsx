import doctor from "../../../assets/images/doctor-small.png"
import appointment from "../../../assets/images/appointment.png"
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
import H4Title from "../../../Components/H4Title/H4Title";
const HomeAppointment = () =>{
  return (
    <section
      className="mb-20"
      style={{ backgroundImage: `url(${appointment})` }}
    >
      <div className="hero">
        <div className="hero-content py-16 lg:py-0 flex-col lg:flex-row">
          <img src={doctor} className="lg:w-1/2 -mt-24 hidden lg:block" />
          <div>
            <H4Title className="mb-5">Appointment</H4Title>
            <h1 className="text-4xl font-bold text-white">
              Make an appointment Today
            </h1>
            <p className="py-6 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>GET STARTED</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAppointment;