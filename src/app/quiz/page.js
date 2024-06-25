"use client";

import {useState } from "react";
import { quiz } from "../data";
import { Answer , Button , Result } from "./component";

export default function Page(){
    const [activeQuestion , setActiveQuestion] =useState(0);
    const [selectedAnswer ,  setSelectedAnswer] = useState("");
    const [checked , setChecked] = useState(false);
    const [selectedAnswerIndex , setSelectedAnswerIndex] = useState(null);
    const [showResult , setShowResult] = useState(false);
 
    const [result , setResult] = useState({
        score:0,
        correctAnswers:0,
        wrongAnswers:0
    });
    
    const {questions} = quiz;
    const {answers , correctAnswer } = questions[activeQuestion];
    

    const  onAnswerSelected = (answer , index)=>{
        setChecked(true);
        setSelectedAnswerIndex(index)
         
        if (answer === correctAnswer) {
            setSelectedAnswer(true);
        }else{
            setSelectedAnswer(false);
        }
        
    }

    //calculate score and increment next questions

    const nextQuestion = () =>{
        setSelectedAnswerIndex(null);
        setResult((prev)=>selectedAnswer ?
         {  ...prev,
            score: prev.score + 5 , 
            correctAnswers:prev.correctAnswers + 1
        }:{
             ...prev,
             wrongAnswers:prev.wrongAnswers + 1
         });
        if (activeQuestion !== questions.length -1) {
            setActiveQuestion((prev)=>prev+1);
           
        }else{
            setActiveQuestion(0);
            setShowResult(true)
        }
        setChecked(false);
    }
    return(
        <div className="container w-full flex flex-col justify-center items-center my-auto">
            <h1 className="text-white font-bold text-2xl p-2 m-3 w-full text-center "> Quiz page </h1>
            <div className="text-white p-3 ">
                {!showResult ?
                (<h2 className="pr-2">
                    question : {activeQuestion + 1} from 
                    <span className="pl-2">
                        {questions.length}
                    </span>
                </h2>)
                : null

            }
            </div>
            <div>
                 {!showResult ? (
                    <div className="bg-zinc-600 w-full p-5 rounded-md">
                      <h3 className="text-xl font-bold text-red-900 text-center mb-5">{questions[activeQuestion].question}</h3>
                      
                   
                      <Answer answers={answers} onAnswerSelected={onAnswerSelected} selectedAnswerIndex={selectedAnswerIndex} />
                      <Button 
                          checked={checked} 
                          nextQuestion={nextQuestion}
                          activeQuestion={activeQuestion} 
                          questionsCont={questions.length} />
                    </div>
                   
                  ) :(
                   <Result result={result} questionCount={questions.length} />
                  )}
            </div>
        </div>
    );
}