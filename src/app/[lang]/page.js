
import Link from "next/link";
import { getLangs } from "./lang";

 

export default async function Home({params}) {
  const dict = await getLangs(params.lang);

  return (
      <main className="w-full">
        <div className="container w-full flex flex-col justify-center items-center my-auto">
           <h1 className="text-3xl text-white p-5 font-extrabold "> {dict['main'].appName}  </h1>
           <Link href={'/quiz'} className="w-full flex justify-center">
             <button  className="w-2/4 mt-5  py-2 px-4 border  border-red-900  rounded-md  bg-red-900  text-white">
              {dict['main'].appStartBtn}
             </button>
           </Link>
        </div>
      </main>
  );
}
