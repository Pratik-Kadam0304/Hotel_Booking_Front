// function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white py-8">
//       <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
//         <p className="text-lg">&copy; {new Date().getFullYear()} My Hotel. All rights reserved.</p>
//         <p className="mt-2">123 JM Road, Pune City | +91 98765 43210</p>
       

//         <div className="flex space-x-4 mt-4 md:mt-0">
//           <a href="#" className="hover:text-blue-500">Facebook</a>
//           <a href="#" className="hover:text-blue-500">Instagram</a>
//           <a href="#" className="hover:text-blue-500">Twitter</a>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaFacebook, FaTwitter} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white">Hotel Paradise</h2>
          <p className="mt-4 text-sm">
            Experience luxury and comfort in the heart of the city.  
            Your perfect stay starts here.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/dining" className="hover:text-blue-400">Dining</Link></li>
            <li><Link to="/facilities" className="hover:text-blue-400">Facilities</Link></li>
            <li><Link to="/gallery" className="hover:text-blue-400">Gallery</Link></li>
            <li><Link to="/attractions" className="hover:text-blue-400">Attractions</Link></li>
            {/* <li><Link to="/booking" className="hover:text-blue-400">Booking</Link></li> */}
            <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
            <li><Link to="/reviews" className="hover:text-blue-400">Reviews</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p>📍 123 JM Street, Pune , India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ info@hotelparadise.com</p>

          {/* Social Links */}
          <div className="flex space-x-6 mt-4 text-2xl">
            <a href="#" className="hover:text-green-500">
            <FaWhatsapp />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-600">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-sky-400">
              <FaTwitter />
            </a>
          </div>

        </div>
      </div>


      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Hotel Paradise. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
