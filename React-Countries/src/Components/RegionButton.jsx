const RegionButton = ({ region }) => {
  return (
    <button className="flex items-center justify-between bg-white p-4  cursor-pointer w-[250px] ">
      {region}
    </button>
  );
};

export default RegionButton;
