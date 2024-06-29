import Loading from "@/app/[lang]/quiz/loading";
import { Suspense } from "react";
 

export default function Answer ({answers ,  selectedAnswerIndex , onAnswerSelected }){
    return(<>
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
    </>)
}