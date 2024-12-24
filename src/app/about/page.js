import Link from "next/link";


const About = () => {
    return (
        <div>
            <h2 className="text-5xl bg-slate-800 text-center font-semibold text-white p-6 rounded-md mx-12 mt-16">
                This is about
            </h2>
            <div className="mt-8 mx-12 w-32 px-4 py-2 bg-slate-800 text-white rounded-md text-center cursor-pointer">
                <Link href={'/'}>Home</Link>
            </div>
        </div>
    );
};

export default About;