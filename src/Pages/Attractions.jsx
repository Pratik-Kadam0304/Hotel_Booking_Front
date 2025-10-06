import React from "react";

function Attractions() {
  const attractions = [
    {
      name: "City Museum",
      description:
        "Explore the rich history and cultural exhibits in the heart of the city.",
      image: "/images/museum.jpg",
    },
    {
      name: "Central Park",
      description:
        "A green oasis in the city offering walking paths, lakes, and picnic spots.",
      image: "/images/central-park.jpg",
    },
    {
      name: "Beachside Promenade",
      description:
        "Enjoy scenic ocean views, food stalls, and sunset strolls along the beach.",
      image: "/images/beach.jpg",
    },
    {
      name: "Historic Old Town",
      description:
        "Wander cobblestone streets with charming architecture and local shops.",
      image: "/images/old-town.jpg",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen px-6 md:px-20 py-12">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Nearby Attractions
      </h1>

      {/* Description Section */}
      <p className="max-w-3xl mx-auto text-center text-gray-600 mb-12 text-lg md:text-xl">
        Discover some of the most exciting and must-visit places near your stay.
        From cultural landmarks to natural beauty, there’s something for
        everyone.
      </p>

      {/* Attraction Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {attractions.map((place, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{place.name}</h2>
              <p className="text-gray-600 text-sm">{place.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <p className="text-center text-gray-500 mt-12 text-sm">
        All information about attractions is curated for your convenience.
      </p>
    </div>
  );
}

export default Attractions;
