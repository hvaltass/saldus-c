
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:text-red-600 transition-colors">
          Saldus Fight Club
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-red-600 transition-colors">Sākums</Link>
          <Link to="/gallery" className="hover:text-red-600 transition-colors">Galerija</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
