import { format } from "date-fns";
import { useEffect } from "react";
import { useState } from "react";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointment = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [ treatment, setTreatment ] = useState({});

  useEffect(() => {
    fetch("AppointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);
  return (
    <section className="mx-7 w-full xl:mx-0">
      <p className="text-center text-secondary text-2xl mb-3">
        Available Appointment on {format(selectedDate, "PP")}
      </p>
      <p className="text-center text-2xl text-[#939393] mb-14">
        Please select an Appointment.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      <BookingModal treatment={treatment} selectedDate={selectedDate} />
    </section>
  );
};

export default AvailableAppointment;
