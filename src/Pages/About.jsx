import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <div>
          <img
            src="public/images/Hotel Paradise.jpg"
            alt="Hotel Paradise"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-blue-600">Hotel Paradise</span>
          </h2>
          <p className="text-gray-600 mb-4">
            At Hotel Paradise, we combine luxury, comfort, and world-class service 
            to create an unforgettable experience for our guests. 
            Nestled in the heart of the city, our hotel is perfect 
            for both leisure and business travelers.
          </p>
          <p className="text-gray-600 mb-6">
            With elegant rooms, fine dining, modern facilities, 
            and a team dedicated to hospitality, 
            we have been recognized with multiple awards 
            for excellence in the hospitality industry.
          </p>
          <button onClick={()=>navigate("/rooms")}
           className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Explore Our Rooms
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
