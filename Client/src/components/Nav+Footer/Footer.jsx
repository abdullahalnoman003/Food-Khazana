import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        <div>
          <h2 className="text-2xl font-bold">Food-Khazana</h2>
          <p className="text-sm mt-2">
            &copy; {new Date().getFullYear()} Food-Khazana. All rights reserved.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p>Email: support@foodkhazana.com</p>
          <p>Phone: +8801234567890</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-2xl mt-2">
            <a href="https://facebook.com" target="_blank" aria-label="Facebook"> <FaFacebookF className="hover:text-blue-500" /></a>
            <a href="https://x.com" target="_blank" aria-label="x"> <FaTwitter className="hover:text-blue-300"/></a>
            <a href="https://instagram.com" target="_blank" aria-label="Instagram"> <FaInstagram className="hover:text-pink-500" /></a>
            <a href="mailto:support@foodkhazana.com" target="_blank" aria-label="Email"> <FaEnvelope className="hover:text-red-500" /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
