// data
import data from "./Data"

// Component
import Element from "./Element";

const App = () => {

  return (
    <div className="bg-white h-screen flex items-center justify-center">
      <div className="bg-gray-100 container mx-auto rounded-lg border border-gray-200">
        <div className="max-w-7xl py-12 px-8 mx-auto">
          <div>
            <h3 className="font-semibold text-gray-900 leading-normal">
              Last 30 days
            </h3>
            <div className="grid grid-cols-3 mt-5 gap-5">
              {data && data.map(info => {
                return (
                  <Element
                    title={info.title}
                    type={info.type}
                    increaseAmount={info.increaseAmount}
                    total={info.total}
                    icon={info.icon}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;