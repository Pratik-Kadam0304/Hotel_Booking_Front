function Hero() {
  return (
    <section
      className="relative w-full h-screen md:h-[140vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/Hotel Paradise.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
        </h1>
      </div>
    </section>
  );
}

export default Hero;
