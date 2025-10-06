import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Hotel Paradise
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-600 font-medium">Home</Link>
          <Link to="/rooms" className="hover:text-blue-600 font-medium">Rooms</Link>
          <Link to="/dining" className="hover:text-blue-600 font-medium">Dining</Link>
          <Link to="/facilities" className="hover:text-blue-600 font-medium">Facilities</Link>
          <Link to="/gallery" className="hover:text-blue-600 font-medium">Gallery</Link>
          <Link to="/about" className="hover:text-blue-600 font-medium">About</Link>
          <Link to="/contact" className="hover:text-blue-600 font-medium">Contact</Link>
          
        </nav>
        
        <div className="md:hidden">
          <button className="text-gray-600 focus:outline-none">&#9776;</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
