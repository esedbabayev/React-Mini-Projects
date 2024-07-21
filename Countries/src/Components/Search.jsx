// Icons
import { useRef } from "react";
import { CiSearch } from "react-icons/ci";

const Search = (props) => {
  const inputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.searchCountries(inputRef.current.value.trim().toLowerCase());
  };

  return (
    <form
      onSubmit={formSubmitHandler}
      className="flex w-1/3 items-center pl-4 bg-white drop-shadow rounded"
    >
      <CiSearch className="h-5 w-5" />
      <input
        ref={inputRef}
        type="text"
        className="border-none focus:outline-none bg-transparent flex-grow p-3 "
        placeholder="Search users"
        id="search"
      />
    </form>
  );
};

export default Search;
