
import Link from "next/link";

 

export default function Home() {
  return (
      <main>
        <div>
           <h1 className="text-3xl font-extrabold ">Quiz App</h1>
           <Link href={'/quiz'}>
             <button>start</button>
           </Link>
        </div>
      </main>
  );
}
