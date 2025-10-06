import RoomCard from "../components/RoomCard";

const rooms = [
  { id: 1, name: "Deluxe Suite", price: 5000, img: "/images/room1.jpg" },
  { id: 2, name: "Executive Room", price: 4000, img: "/images/room2.jpg" },
  { id: 3, name: "Family Room", price: 3000, img: "/images/room3.jpg" },
  { id: 4, name: "Deluxe Room", price: 3500, img: "/images/room4.jpg" },
  { id: 5, name: "Double Room", price: 2000, img: "/images/room5.jpg" },
  { id: 6, name: "Single Room", price: 1500, img: "/images/room6.jpg" },
];

function Rooms() {
  return (
    <div className="bg-gray-100 min-h-screen px-6 md:px-20 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Rooms</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <RoomCard key={room.id} {...room} />
        ))}
      </div>
    </div>
  );
}

export default Rooms;




//   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//   {rooms.map((room) => (
//     <div
//       key={room.id}
//       className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
//     >
//       <RoomCard {...room} />
//     </div>
//   ))}
// </div> 
