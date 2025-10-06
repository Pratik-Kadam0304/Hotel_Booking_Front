import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//  import { jsxDEV } from "react/jsx-dev-runtime";
// Components
import Header from "./components/Header";
import FacilityCard from "./components/FacilityCard";
import Footer from "./components/Footer";
import GalleryItem from "./components/GalleryItem";
import Hero from "./components/Hero";
import RoomCard from "./components/RoomCard";
import TestimonialCard from "./components/TestimonialCard";
 
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import Dining from "./pages/Dining";
import Facilities from "./pages/Facilities";
import Gallery from "./pages/Gallery";
import Attractions from "./pages/Attractions";
import Booking from "./pages/Booking";
import Confirmation from "./Pages/Confirmation";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";

function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
// function App() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-900">
//       <h1 className="text-5xl font-bold text-red-500">
//         Hello Tailwind!
//       </h1>
//     </div>
//   );
// }

// export default App;
