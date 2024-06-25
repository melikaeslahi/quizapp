"use client";

import { Suspense, useEffect, useState } from "react";
import { quiz } from "../data";
import Loading from "./loading";

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
                      {
                         
                            answers?.map((answer , index)=>(
                                <li key={index}
                                    className={`${selectedAnswerIndex === index ? 'bg-red-800 bg-opacity-30 text-sm font-medium text-white p-2 w-full mt-2 border border-gray-400 rounded-sm list-none' : ''} 
                                    text-sm font-medium text-white p-2 w-full mt-2 border border-gray-400 
                                    rounded-sm list-none  hover:bg-red-800 hover:bg-opacity-30 cursor-pointer`}
                                    onClick={()=>onAnswerSelected(answer , index)}
                                  >
                                    <Suspense  fallback={<Loading count={1} />}>
                                    <span>
                                    { answer}
                                    </span>
                                    </Suspense>
                                   
                                </li>
                            ))
                       
                        
                      }
                      {
                        checked ? 
                        (
                            <button  onClick={nextQuestion}
                            className="w-full mt-5 py-2 px-4 border  border-red-900  rounded-md  bg-red-900  text-white"
                            >
                                {activeQuestion === questions.length -1 ? "End" : "Next"}
                            </button>
                        ):(
                            <button  onClick={nextQuestion}
                            className="w-full mt-5 py-2 px-4 border  border-red-900  rounded-md  bg-red-900  text-white"
                            disabled>
                                {activeQuestion === questions.length -1 ? "End" : "Next"}
                            </button>
                        )
                      }
                    </div>
                   
                  ) :(
                 <div className="bg-zinc-600 w-full p-5 rounded-md">
                    <h3 className="text-xl font-bold text-red-900 text-center">Result</h3>
                    <h3 className="text-lg font-medium text-white p-2">
                        Overall {(result.score / 75) * 100}% of the questions have been true answered
                        </h3>
                    <p className="text-sm font-medium text-white pt-2" >All Questions: {questions.length} </p>
                    <p className="text-sm font-medium text-white pt-2" > Correct Answer :{result.correctAnswers} </p>
                    <p className="text-sm font-medium text-white pt-2" >Wrong Answer :{result.wrongAnswers} </p>
                    <p className="text-sm font-medium text-white pt-2">all Score :{result.score} </p>

                    <button onClick={()=>window.location.reload()}
                            className="w-full mt-5 py-2 px-4 border  border-red-900  rounded-md  bg-red-900  text-white"
                    > Try Again</button>
                 </div>
                  )}
            </div>
        </div>
    );
}