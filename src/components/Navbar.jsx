import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-4xl font-semibold">SAMAY REHI</h1>
      </div>
      <div className="text-white m-8 flex items-center justify-center gap-2 text-3xl cursor-pointer">
        <FaLinkedinIn href="#" />
        <FaXTwitter href="#" />
        <FaGithub href="#" />
        <FaInstagram href="#" />
      </div>
    </nav>
  );
};

export default Navbar;
