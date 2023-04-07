import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const FollowMe = () => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <a href="#" className="text-gray-600 hover:text-gray-800">
        <FaTwitter className="h-6 w-6" />
      </a>
      <a href="#" className="text-gray-600 hover:text-gray-800">
        <FaFacebook className="h-6 w-6" />
      </a>
      <a href="#" className="text-gray-600 hover:text-gray-800">
        <FaInstagram className="h-6 w-6" />
      </a>
      <a href="#" className="text-gray-600 hover:text-gray-800">
        <FaLinkedin className="h-6 w-6" />
      </a>
    </div>
  );
};

export default FollowMe;
