export default function Result({result , questionCount , dict}){
    return(<>
      <div className="bg-zinc-600 w-full p-5 rounded-md">
                    <h3 className="text-xl font-bold text-red-900 text-center">{dict['quiz'].result}</h3>
                    <h3 className="text-lg font-medium text-white p-2">
                         {dict['quiz'].resultScoreMsg1}{' '}
                         {Math.floor((result.score / 75) * 100)}% {' '}
                         {dict['quiz'].resultScoreMsg2}
                        </h3>
                    <p className="text-sm font-medium text-white pt-2" > 
                           {dict['quiz'].quizCount} {' '} :
                           {questionCount}
                     </p>
                    <p className="text-sm font-medium text-white pt-2">
                          {dict['quiz'].quizScore} {' '}:{result.score} 
                    </p>
                    <p className="text-sm font-medium text-white pt-2" > 
                    {dict['quiz'].quizCorrect} {' '} :{result.correctAnswers} </p>
                    <p className="text-sm font-medium text-white pt-2" >
                        {dict['quiz'].quizWrong} {' '} :{result.wrongAnswers}
                     </p>

                    <button onClick={()=>window.location.reload()}
                            className="w-full mt-5 py-2 px-4 border  border-red-900  rounded-md  bg-red-900  text-white"
                    > {dict['quiz'].quizRestart} </button>
                 </div>
    </>);
}