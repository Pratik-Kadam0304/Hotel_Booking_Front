import { useNavigate } from "react-router-dom";

function RoomCard({ id, name, price, img }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={img} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600 mb-4">₹{price} / night</p>
        <button
          onClick={() => navigate(`/booking/${id}`)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default RoomCard;
