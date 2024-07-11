//hooks
import { useEffect, useRef, useState } from "react";

// components
import Question from "./Components/Question";
import Options from "./Components/Options";

import "./index.css";

const App = () => {
  const [questionId, setQuestionId] = useState(1);
  const [question, setQuestion] = useState();
  const [selectedOption, setSelectedOption] = useState(null);
  const [totalPoints, setTotalPoints] = useState(0);

  const fetchQuestionsFromJsonServer = async () => {
    const response = await fetch(
      `http://localhost:3000/questions/${questionId}`
    );
    const data = await response.json();

    setQuestion(data);
    setSelectedOption(null);
  };

  useEffect(() => {
    fetchQuestionsFromJsonServer();
  }, [questionId]);

  const selectOption = (event) => {
    setSelectedOption(event.target.textContent);

    const correct = event.target.textContent === question.answer;

    if (correct) {
      setTotalPoints(totalPoints + 1);
    }

    console.log(totalPoints);

    setTimeout(() => {
      setQuestionId(questionId + 1);
    }, 1000);
  };

  // const fetchQuestionsFromJsonServer = async () => {
  //   fetch("https//localhost:3000/questions")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));
  // };

  // fetchQuestionsFromJsonServer();

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="container rounded-xl overflow-hidden">
        <Question
          question={question}
          questionId={questionId}
          totalPoints={totalPoints}
        />
        {questionId <= 20 && (
          <Options
            selectOption={selectOption}
            question={question}
            selectedOption={selectedOption}
          />
        )}
      </div>
    </div>
  );
};

export default App;
