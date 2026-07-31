import { useState } from "react";

export default function MathGame(props){

    const LEVELS = [
        {id: 1 , label: "Addition" , operation: "+" },
        { id:2 , label:"Substraction" , operation:"-"},
        { id: 3 , label: "Multiplecation" , operation:"*"},
        { id :4 , label: "Division" , operation:"/"}
    ]
 
        

    const[userAnswer , setUserAnswer] = useState("");
    const [selectedLevel, setSelectedLevel] = useState(LEVELS[0]);
    const [question, setQuestion] = useState(() => generateQuestion(LEVELS[0].operation));
    const [questionAnswered, setQuestionAnswered] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    if(questionAnswered >= 2){
        return(
            <div>
                <p>Level Complete</p>
                <p>Correct Answers: {correctAnswers}</p>
                <button onClick={handleTryAgain}>Try Again</button>
      <button onClick={handleNextLevel}>Next Level</button>
            </div>
        )
    }
    return(
           
        <div>
           
            <p>{question.a} {selectedLevel.operation} {question.b} = ?</p>
            <input value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            />
            <button onClick={checkAnswer}>Submit</button>
            
        </div>
    )

    function checkAnswer(){
        if(Number(userAnswer) === question.answer){
            props.onCorrectAnswer(10);
            setCorrectAnswers((prev) => prev + 1);
        }else{
            console.log("wrong answer");
        }
        setQuestionAnswered((prev) => prev + 1);
        setQuestion(generateQuestion(selectedLevel.operation));
        setUserAnswer("");
    }

    function generateQuestion(operation){
        const a = Math.floor(Math.random()*10) +1;
        const b = Math.floor(Math.random()*10) +1;
        let answer;
        switch(operation){
            case "+":
                answer = a + b;
                break;
            case "-":
                answer = a - b;
                break;
            case "*":
                answer = a * b;
                break;
            case "/":
                answer = a/b;
                break;
        }
        return { a,b,answer};
    }

    function handleNextLevel(){
       const currentIndex = LEVELS.findIndex((level) => level.id === selectedLevel.id);
       const nextLevel = LEVELS[currentIndex+1];

       if(nextLevel){
        setSelectedLevel(nextLevel);
        setQuestion(generateQuestion(nextLevel.operation));
       }
       setQuestionAnswered(0);
       setCorrectAnswers(0);
    }
    function handleTryAgain() {
  setQuestion(generateQuestion(selectedLevel.operation));
  setQuestionAnswered(0);
  setCorrectAnswers(0);
}
}