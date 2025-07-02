import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <motion.nav className="sticky top-0 z-50 bg-gradient-to-br from-[#0d0d0d] to-[#1f1f1f] backdrop-blur bg-opacity-90 text-gray-300 px-6 py-4 shadow-md">

      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1] }}
        className="flex gap-6 items-center"
      >
        <Link to="/" className={linkClass(location.pathname === "/")}>
          {location.pathname === "/" ? "{Home}" : "Home"}
        </Link>
        <Link to="/people" className={linkClass(location.pathname === "/people")}>
          {location.pathname === "/people" ? "{People}" : "People"}
        </Link>
        <Link to="/planets" className={linkClass(location.pathname === "/planets")}>
          {location.pathname === "/planets" ? "{Planets}" : "Planets"}
        </Link>
        <Link to="/vehicles" className={linkClass(location.pathname === "/vehicles")}>
          {location.pathname === "/vehicles" ? "{Vehicles}" : "Vehicles"}
        </Link>
        <Link to="/favorites" className={linkClass(location.pathname === "/favorites") + " ml-auto"}>
          {location.pathname === "/favorites" ? "{Favorites}" : "Favorites"}
        </Link>
      </motion.div>
    </motion.nav>
  );
}

function linkClass(isActive: boolean) {
  return `text-lg text-gray-300 hover:text-white hover:brightness-125 hover:scale-105 transition-all duration-200 ${
    isActive ? "text-yellow-400" : ""
  }`;
}
