import { Open_Sans, Roboto } from "next/font/google";
import Link from "next/link";

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});
export const metadata ={
  title: 'About', 
  description: 'Next Hero about'
}
const About = () => {
  return (
    <div className={`h-screen ${openSans.className}`}>
      <h2 className="text-5xl bg-slate-800 text-center font-semibold text-white p-6 rounded-md mx-12 mt-16">
        This is about
      </h2>
      <h2
        className={`text-5xl bg-slate-800 text-center font-semibold text-white p-6 rounded-md mx-12 mt-16 ${roboto.className}`}
      >
        This is about
      </h2>
      <div className="flex flex-row justify-center space-x-8">
        <div className="mt-8 mx-12 w-32 px-4 py-2 bg-slate-800 text-white rounded-md text-center cursor-pointer">
          <Link href={"/about/history"}>History</Link>
        </div>
        <div className="mt-8 mx-12 w-32 px-4 py-2 bg-slate-800 text-white rounded-md text-center cursor-pointer">
          <Link href={"/about/mission"}>Mission</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
