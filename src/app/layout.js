import { Edu_QLD_Beginner } from "next/font/google";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css"

const  eduQLD =  Edu_QLD_Beginner(
  { subsets: ["latin"] ,
    display: "swap"
 });

export const metadata = {
  title: "Quiz App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={eduQLD.className}>{children}</body>
    </html>
  );
}
