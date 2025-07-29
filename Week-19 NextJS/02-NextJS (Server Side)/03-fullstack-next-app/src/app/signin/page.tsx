"use client"
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-6 w-80">
                <h1 className="text-2xl font-semibold text-center mb-4">Sign Ip</h1>
                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        onClick={() => {
                            axios
                                .post("http://localhost:3000/api/v1/signup", {
                                    username,
                                    password,
                                })
                                .then(() => router.push("/signin"));
                        }}
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
}