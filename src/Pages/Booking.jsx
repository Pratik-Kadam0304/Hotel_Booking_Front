import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const rooms = [
  { id: 1, name: "Deluxe Suite", price: 5000, img: "/images/room1.jpg" },
  { id: 2, name: "Executive Room", price: 4000, img: "/images/room2.jpg" },
  { id: 3, name: "Family Room", price: 3000, img: "/images/room3.jpg" },
  { id: 4, name: "Deluxe Room", price: 3500, img: "/images/room4.jpg" },
  { id: 5, name: "Double Room", price: 2000, img: "/images/room5.jpg" },
  { id: 6, name: "Single Room", price: 1500, img: "/images/room6.jpg" },
];

function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const room = rooms.find((r) => r.id === parseInt(id));

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    checkInDate: "",
    checkOutDate: "",
    guests: "",
    specialRequests: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add the room info to the booking
    const bookingData = { ...formData, roomId: room.id, roomName: room.name, price: room.price };

    try {
      await fetch("http://localhost:8080/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });
      navigate("/confirmation");
    } catch (error) {
      console.error("Booking failed:", error);
      alert("Booking failed. Please try again.");
    }
  };

  if (!room) {
    return (
      <h1 className="text-center text-2xl font-bold mt-20">Room Not Found</h1>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-20">
      <h1 className="text-3xl font-bold text-center mb-6">Book Your Stay</h1>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 grid md:grid-cols-2 gap-8">
        {/* Room Info */}
        <div>
          <img src={room.img} alt={room.name} className="rounded-lg mb-4" />
          <h2 className="text-2xl font-semibold mb-2">{room.name}</h2>
          <p className="text-gray-600 mb-2">₹{room.price} / night</p>
        </div>

        {/* Booking Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg px-4 py-2"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg px-4 py-2"
            required
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            placeholder="Phone Number"
            className="w-full border rounded-lg px-4 py-2"
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              name="checkInDate"
              value={formData.checkInDate}
              onChange={handleChange}
              type="date"
              className="w-full border rounded-lg px-4 py-2"
              required
            />
            <input
              name="checkOutDate"
              value={formData.checkOutDate}
              onChange={handleChange}
              type="date"
              className="w-full border rounded-lg px-4 py-2"
              required
            />
          </div>
          <input
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            type="number"
            placeholder="Guests"
            className="w-full border rounded-lg px-4 py-2"
            required
          />
          <textarea
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            placeholder="Special Requests"
            className="w-full border rounded-lg px-4 py-2"
          />
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
