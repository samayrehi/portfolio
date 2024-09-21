import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-4xl font-bold">SR</h1>
      </div>
      <div className="text-white m-8 flex items-center justify-center gap-8 text-3xl cursor-pointer">
        <a href="https://www.linkedin.com/in/samay-rehi-093764210/">
          <FaLinkedinIn />
        </a>
        <a href="https://x.com/notanastrologer">
          <FaXTwitter />
        </a>
        <a href="https://github.com/samayrehi">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/isamayrehi/">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
