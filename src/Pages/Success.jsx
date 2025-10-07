// SuccessPage.jsx
import React from "react";
import { Link } from "react-router-dom";

function SuccessPage() {
  return (
    <section className="bg-green-100 min-h-screen flex flex-col justify-center items-center px-6">
      <div className="bg-white p-10 rounded-lg shadow text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Thank You!</h1>
        <p className="text-gray-700 mb-6">
          Your message has been sent successfully. We will get back to you soon.
        </p>
        <Link to="/"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go to Home
        </Link>
      </div>
    </section>
  );
}

export default SuccessPage;
