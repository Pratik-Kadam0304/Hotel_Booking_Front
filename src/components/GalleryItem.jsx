function GalleryItem({ img }) {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg">
      <img src={img} alt="Gallery" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"/>
    </div>
  );
}

export default GalleryItem;
