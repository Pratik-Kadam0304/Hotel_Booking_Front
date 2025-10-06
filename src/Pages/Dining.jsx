function Dining() {
  const foods = [
    { name: "Continental Breakfast", img: "/images/food1.jpg" },
    { name: "Indian Thali (Lunch)", img: "/images/food2.jpg" },
    { name: "Italian Pasta (Dinner)", img: "/images/food3.jpg" },
    { name: "Refreshing Cold Drinks", img: "/images/food4.jpg" },
    { name: "Fresh Fruit Desserts", img: "/images/food5.jpg" },
    { name: "Evening Snacks & Tea", img: "/images/food6.jpg" },
  ];

  return (
    <section className="pt-28 pb-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">Dining Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {foods.map((food, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={food.img}
              alt={food.name}
              className="w-90 h-48 object-cover mx-auto rounded-md"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold">{food.name}</h3>
              <p className="mt-2 text-gray-600">
                Enjoy our chef’s signature {food.name}, freshly prepared with
                authentic flavors.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Dining;
