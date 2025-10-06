function TestimonialCard({ name, comment }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-2">
      <p className="text-gray-700 italic">"{comment}"</p>
      <h4 className="text-gray-900 font-semibold">{name}</h4>
    </div>
  );
}

export default TestimonialCard;
