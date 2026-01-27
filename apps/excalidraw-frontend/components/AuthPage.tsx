"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HTTP_BACKEND } from "@/config";

export function AuthPage({ isSignin }: {
    isSignin: boolean
}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async () => {
        if (!email || !password || (!isSignin && !name)) {
            setError("Please fill in all fields");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const endpoint = isSignin ? "/signin" : "/signup";
            const payload = isSignin ? {
                username: email,
                password
            } : {
                username: email,
                password,
                name
            };

            const response = await axios.post(`${HTTP_BACKEND}${endpoint}`, payload);

            if (isSignin) {
                // Signin flow
                const token = response.data.token;
                localStorage.setItem("token", token);
                router.push("/dashboard");
            } else {
                // Signup flow
                // Automatically log in or redirect to signin
                // For now, redirect to signin to keep it simple, or auto-login if backend returns token
                // Based on index.ts, signup returns userId, so let's redirect to signin
                router.push("/signin");
            }

        } catch (e: any) {
            setError(e.response?.data?.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-gray-50">
            <div className="p-8 m-6 bg-white rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    {isSignin ? "Sign In" : "Sign Up"}
                </h2>

                {error && (
                    <div className="mb-4 p-3 bg-red-100 text-red-700 rounded text-sm">
                        {error}
                    </div>
                )}

                {!isSignin && (
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                )}

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSubmit();
                            }
                        }}
                    />
                </div>

                <div className="mb-4">
                    <button
                        className={`w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {loading ? "Processing..." : (isSignin ? "Sign In" : "Sign Up")}
                    </button>
                </div>

                <div className="text-center text-sm text-gray-600">
                    {isSignin ? (
                        <p>
                            Don't have an account?{" "}
                            <Link href="/signup" className="text-blue-600 hover:text-blue-800 font-semibold">
                                Sign up
                            </Link>
                        </p>
                    ) : (
                        <p>
                            Already have an account?{" "}
                            <Link href="/signin" className="text-blue-600 hover:text-blue-800 font-semibold">
                                Sign in
                            </Link>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}