import Country from "./Country";

const Countries = (props) => {
  return (
    <div className="mt-10 grid grid-cols-4 gap-5">
      {props.countries?.map((country) => {
        return (
          <Country
            flag={country.flags.svg}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        );
      })}
    </div>
  );
};

export default Countries;
