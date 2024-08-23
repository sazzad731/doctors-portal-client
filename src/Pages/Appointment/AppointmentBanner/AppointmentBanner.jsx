import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <section>
      <div
        className="hero min-h-screen w-full bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="hero-content justify-between flex-col lg:flex-row-reverse">
          <img
            src={chair}
            alt="dentist chair"
            className="lg:w-1/2 lg:mb-0 mb-16 rounded-lg lg:shadow-2xl"
          />
          <div className="bg-base-100 p-10 shadow-lg rounded-2xl overflow-x-hidden">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
