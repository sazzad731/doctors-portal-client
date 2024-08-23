import { format } from "date-fns";
import { sl } from "date-fns/locale/sl";

const BookingModal = ({ treatment, selectedDate }) => {
  const { name, slots } = treatment;
  return (
    <dialog id="booking-modal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-accent absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg mb-12">{name}</h3>
        <form>
          <input
            type="text"
            value={format(selectedDate, "PP")}
            className="input w-full disabled:text-gray-500 mb-6"
            disabled
          />
          <select className="select select-bordered w-full mb-6">
            {
              slots?.length > 0 ? slots?.map((slot) => (
              <option value={slot} key={slot}>
                {slot}
              </option>
            )) : <option selected>Try another day</option>
            }
          </select>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full mb-6"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full mb-6"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full mb-6"
          />
          <button
            type="submit"
            className="btn w-full hover:bg-accent bg-accent text-[#D4D9E3] text-base font-normal"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default BookingModal;