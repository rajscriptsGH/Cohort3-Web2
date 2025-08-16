// "use client"
import { getServerSession } from "next-auth";

// import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

// export default function Home() {
//   return (
//     <SessionProvider>
//       <RealHome />
//     </SessionProvider>
//   );
// }


// function RealHome() {
//   const session = useSession()

//   return (
//     <div className="min-h-screen flex justify-center items-center">
//       {session.status == "authenticated" &&
//         <button className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
//           onClick={() => signOut()}>Logout</button>}
//       {session.status == "unauthenticated" &&
//         <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
//           onClick={() => signIn()}>signin</button>}
//     </div>
//   )
// }

export default async function Home() {
  const session = await getServerSession()
  return (
    <div>
      {JSON.stringify(session)}
    </div>
  );
}


