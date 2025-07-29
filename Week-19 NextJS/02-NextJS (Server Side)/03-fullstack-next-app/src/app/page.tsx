import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      ToDo App
      <div className="flex gap-5 items-center justify-cente mt-8">
        <Link className="bg-blue-500 text-white px-5 py-2 rounded-md" href={'/signup'}>Signup</Link>
        <Link className="bg-blue-500 text-white px-5 py-2 rounded-md" href={'/signin'}>Signin</Link>
      </div>
    </div>
  );
}
