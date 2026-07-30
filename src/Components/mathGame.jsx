import { useState } from "react";

export default function MathGame(props){
    const[userAnswer , setUserAnswer] = useState("");
    return(
        <div>
            <p>5 + 3 =?</p>
            <input value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            />
            <button onClick={checkAnswer}>Submit</button>
        </div>
    )

    function checkAnswer(){
        if(userAnswer === "8"){
            props.onCorrectAnswer(10);
        }else{
            console.log("wrong answer");
        }
    }
}