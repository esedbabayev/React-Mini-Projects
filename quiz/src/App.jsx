//hooks
import { useEffect, useRef, useState } from "react";

// components
import Question from "./Components/Question";
import Options from "./Components/Options";

import "./index.css";

const App = () => {
  const [questionId, setQuestionId] = useState(1);
  const [question, setQuestion] = useState();

  const fetchQuestionsFromJsonServer = async () => {
    const response = await fetch(
      `http://localhost:3000/questions/${questionId}`
    );
    const data = await response.json();

    setQuestion(data);
  };

  useEffect(() => {
    fetchQuestionsFromJsonServer();
  }, [questionId]);

  const selectOption = () => {
    setQuestionId(questionId + 1);
  };

  // const fetchQuestionsFromJsonServer = async () => {
  //   fetch("https//localhost:3001/questions")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));
  // };

  // fetchQuestionsFromJsonServer();

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="container rounded-xl overflow-hidden">
        <Question question={question} questionId={questionId} />
        <Options selectOption={selectOption} question={question} />
      </div>
    </div>
  );
};

export default App;
