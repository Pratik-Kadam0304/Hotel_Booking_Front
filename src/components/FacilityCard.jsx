function FacilityCard({ name, icon }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center">
      <span className="text-4xl mb-4">{icon}</span>
      <h3 className="text-xl font-semibold">{name}</h3>
    </div>
  );
}

export default FacilityCard;
