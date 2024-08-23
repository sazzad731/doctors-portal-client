import H4Title from "../../../Components/H4Title/H4Title";
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, slots } = appointmentOption;
  return (
    <div className="card shadow-lg">
      <div className="card-body items-center text-center">
        <H4Title className="card-title font-semibold">{name}</H4Title>
        <p>{slots.length > 0 ? slots[0] : "Try another day"}</p>
        <p className="mb-3">
          {slots.length} {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE
        </p>
        <div className="card-actions justify-end">
          <PrimaryButton
            openModal={() =>
            {
              document.getElementById("booking-modal").showModal()
              setTreatment(appointmentOption);
            }
            }
          >
            Book Appointment
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;