import Hero from "../components/Hero";
import RoomCard from "../components/RoomCard";

const rooms = [
  { id: 1, name: "Deluxe Suite", price: 5000, img: "/images/room1.jpg" },
  { id: 2, name: "Executive Room", price: 3500, img: "/images/room2.jpg" },
];

function Home() {
  return (
    <div className="bg-white min-h-screen">
      <h1 className="text-4xl text-center p-8">Welcome to Hotel Paradise</h1>
      <Hero />
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">Our Rooms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {rooms.map((room) => (
            <RoomCard key={room.id} {...room} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
