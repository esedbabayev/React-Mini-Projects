// Components
import Header from "./Components/Header";
import Dropdown from "./Components/Dropdown";
import Search from "./Components/Search";
import Countries from "./Components/Countries";
import { useEffect, useState } from "react";

const App = () => {

  const [countries, setCountries] = useState(null);

  const getCountryDataHandler = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);

  };

  const searchCountries = async (searchValue) => {
    // const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchValue));
    // setCountries(filteredCountries);

    const response = await fetch(`https://restcountries.com/v3.1/name/${searchValue}`);
    const data = await response.json();
    setCountries(data);
  };

  useEffect(() => {
    getCountryDataHandler();
  }, []);

  return (
    <>
      <Header />
      <main className="container mx-auto pt-10 h-screen">
        <div className="flex items-center justify-between">
          <Search searchCountries={searchCountries} />
          <Dropdown />
        </div>
        <Countries countries={countries} />
      </main>
    </>
  );
};

export default App;
