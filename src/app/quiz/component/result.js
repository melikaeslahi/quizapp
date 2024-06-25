export default function Result({result , questionCount}){
    return(<>
      <div className="bg-zinc-600 w-full p-5 rounded-md">
                    <h3 className="text-xl font-bold text-red-900 text-center">Result</h3>
                    <h3 className="text-lg font-medium text-white p-2">
                        Overall {(result.score / 75) * 100}% of the questions have been true answered
                        </h3>
                    <p className="text-sm font-medium text-white pt-2" >All Questions: {questionCount} </p>
                    <p className="text-sm font-medium text-white pt-2" > Correct Answer :{result.correctAnswers} </p>
                    <p className="text-sm font-medium text-white pt-2" >Wrong Answer :{result.wrongAnswers} </p>
                    <p className="text-sm font-medium text-white pt-2">all Score :{result.score} </p>

                    <button onClick={()=>window.location.reload()}
                            className="w-full mt-5 py-2 px-4 border  border-red-900  rounded-md  bg-red-900  text-white"
                    > Try Again</button>
                 </div>
    </>);
}