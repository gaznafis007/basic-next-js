import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen">
      <h2 className="text-4xl mx-12 rounded-md font-semibold text-zinc-900 text-center mt-16 p-6 border border-zinc-800">
        Welcome to Next Hero
      </h2>
      <div className="mt-8 ml-12">
      <Link href={'/about'}>About</Link>
      </div>
    </div>
  );
}
