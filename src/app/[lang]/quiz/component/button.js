export default function Button({checked , nextQuestion , activeQuestion , dict , questionsCont}){
    return(
        
            checked ? 
            (
                <button  onClick={nextQuestion}
                className="w-full mt-5 py-2 px-4 border  border-red-900  rounded-md  bg-red-900  text-white"
                >
                    {activeQuestion === questionsCont -1 ? 
                    dict['quiz'].finishBtn :
                     dict['quiz'].nextBtn}
                </button>
            ):(
                <button  onClick={nextQuestion}
                className="w-full mt-5 py-2 px-4 border  border-red-900  rounded-md  bg-red-900  text-white"
                disabled>
                     {activeQuestion === questionsCont -1 ? 
                    dict['quiz'].finishBtn :
                     dict['quiz'].nextBtn}
                </button>
            )
          
    )
}