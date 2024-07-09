// Components
import FAQ from "./Components/FAQ";
import Header from "./Components/Header";

// Hooks
import { useState } from "react";

// Data
import { faqData as data } from "./data";

const App = () => {

  const [question, setQuestion] = useState(data);

  const accordionElementHandler = (GivenIndex) => {
    setQuestion(question => question.map((item, index) => GivenIndex === index ? 
    {...item, show: !item.show} : item));
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-poppins ">
      <div className="w-[500px] rounded-xl bg-white shadow-lg">
        <Header />
        <FAQ question={question} accordionElementHandler={accordionElementHandler} />
      </div>
    </div>
  );
};

export default App;
