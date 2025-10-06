import TestimonialCard from "../components/TestimonialCard";

const reviews = [
  { id: 1, name: "Raj Bhosale", comment: "Amazing experience...!" },
  { id: 2, name: "Dipak Gade", comment: "Highly recommended." },
  { id: 2, name: "Pratik Rane", comment: "Beautiful place to stay" },
  { id: 2, name: "Vithhal Barde", comment: "Awesome food taste." },
  { id: 2, name: "Shubham Raut", comment: "Great service." },
  { id: 2, name: "Aniket Shinde", comment: "Nice place." },

];

function Reviews() {
  return (
    <div className="bg-gray-100 min-h-screen px-6 md:px-20 py-12 bg-gray-300">
      <h1 className="text-4xl font-bold text-center mb-8">Guest Reviews</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {reviews.map((r) => (
          <TestimonialCard key={r.id} {...r} />
        ))}
      </div>
    </div>
  );
}

export default Reviews;
