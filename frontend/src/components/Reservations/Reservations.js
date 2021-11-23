import Reservation from "../Reservation/Reservation";
import "./reservations.css";

export default function Reservations({ reservations }) {
  return (
    <div className="posts">
      {reservations.map((p, index) => (
        <Reservation key={index} reservation={p} />
      ))}
    </div>
  );
}