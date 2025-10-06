// src/pages/Facilities.jsx

const facilities = [
  { id: 1, name: "Swimming Pool", img: "/images/pool.jpg" },
  { id: 2, name: "Fitness Center", img: "/images/gym.jpg" },
  { id: 3, name: "Free Wi-Fi", img: "/images/wifi.jpg" },
  { id: 4, name: "Parking Facility", img: "/images/Parking.jpg" },
  { id: 5, name: "Luxury Spa", img: "/images/spa.jpg" },
  { id: 6, name: "Conference Hall", img: "/images/conference.jpg" },
  { id: 7, name: "24/7 Room Service", img: "/images/room-service.jpg" },
  { id: 8, name: "Kids Play Area", img: "/images/kidsplay.jpg" },
];

function Facilities() {
  return (
    <div className="bg-gray-100 min-h-screen px-6 md:px-20 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Facilities</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {facilities.map((facility) => (
          <div
            key={facility.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={facility.img}
              alt={facility.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-center">
              <h2 className="text-xl font-semibold">{facility.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Facilities;
