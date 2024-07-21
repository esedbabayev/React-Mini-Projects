// Icons
import { IoMoonOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="bg-white py-5 drop-shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="font-semibold text-2xl">Where in the world?</h2>
        <button className="flex items-center gap-2">
          <span>
            <IoMoonOutline />
          </span>
          <span className="font-medium">Dark mode</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
