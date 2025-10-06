import GalleryItem from "../components/GalleryItem";

function Gallery() {
  const images = [
    "/images/Gallery1.jpg",
    "/images/Gallery2.jpg",
    "/images/Gallery3.jpg",
    "/images/Gallery4.jpg",
    "/images/Gallery5.jpg",
    "/images/Gallery6.jpg",
  ];

  return (
    <section className="pt-28 pb-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">Hotel Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;

