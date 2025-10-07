import { Link } from "react-router-dom";

function Confirmation() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      <h1 className="text-4xl font-bold text-green-600 mb-4">
        Booking Confirmed...
      </h1>
      <p className="text-gray-700 text-lg mb-6 text-center">
        Thank you for booking with <span className="font-semibold">Hotel Paradise</span>. 
        We will send you a confirmation email shortly.
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default Confirmation;
