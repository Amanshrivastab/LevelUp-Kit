import { useState } from "react";
import { LEVELS, generateQuestion } from "../data/Questions";

export default function MathGame(props) {
  const [userAnswer, setUserAnswer] = useState("");
  const [selectedLevel, setSelectedLevel] = useState(LEVELS[0]);
  const [question, setQuestion] = useState(() =>
    generateQuestion(LEVELS[0].operation)
  );
  const [questionAnswered, setQuestionAnswered] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  if (questionAnswered >= 5) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
        <p className="text-xl font-semibold text-gray-800 mb-1">Level Complete</p>
        <p className="text-gray-500 mb-4">Correct Answers: {correctAnswers}/5</p>
        <div className="flex gap-2 justify-center">
          <button
            onClick={handleTryAgain}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition"
          >
            Try Again
          </button>
          <button
            onClick={handleNextLevel}
            className="px-4 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition"
          >
            Next Level
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <p className="text-sm text-gray-400 text-center mb-2">
        Level {selectedLevel.id}: {selectedLevel.label}
      </p>

      <p className="text-3xl font-semibold text-center mb-4 text-gray-800">
        {question.a} {selectedLevel.operation} {question.b} = ?
      </p>

      <div className="flex gap-2 justify-center">
        <input
          type="number"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              checkAnswer();
                 }
             }}
          className="border border-gray-300 rounded-lg px-3 py-2 w-28 text-center focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
        <button
          onClick={checkAnswer}
          className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );

  function checkAnswer() {
    if (Number(userAnswer) === question.answer) {
      props.onCorrectAnswer(10);
      setCorrectAnswers((prev) => prev + 1);
    } else {
      console.log("wrong answer");
    }
    setQuestionAnswered((prev) => prev + 1);
    setQuestion(generateQuestion(selectedLevel.operation));
    setUserAnswer("");
  }

  function handleNextLevel() {
    const currentIndex = LEVELS.findIndex((level) => level.id === selectedLevel.id);
    const nextIndex = (currentIndex + 1) % LEVELS.length;
    const nextLevel = LEVELS[nextIndex];

    setSelectedLevel(nextLevel);
    setQuestion(generateQuestion(nextLevel.operation));
    setQuestionAnswered(0);
    setCorrectAnswers(0);
  }

  function handleTryAgain() {
    setQuestion(generateQuestion(selectedLevel.operation));
    setQuestionAnswered(0);
    setCorrectAnswers(0);
  }
}