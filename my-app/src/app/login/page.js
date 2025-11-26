"use client";

import { useState } from "react";

export default function LoginPage() {
    const [mode, setMode] = useState("login");

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); // 6+ characters minimum

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    return (
        <div className="max-w-3xl mx-auto mt-32 text-center">
            <div className="p-8 border rounded mt-16 shadow-lg inline-block text-left bg-white">
                <h1 className="text-3xl font-extrabold mb-8 text-center">{mode === "login" ? "Login" : "Sign Up"}</h1>
                <form>
                    {mode === "signup" && (
                        <div>
                            <label className="font-bold">Full Name</label>
                            <input
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="border ml-3 p-1 rounded mb-4"
                            />
                        </div>
                    )}
                    <div>
                        <label className="font-bold">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border ml-3 p-1 rounded mb-4"
                        />
                    </div>
                    <div>
                        <label className="font-bold">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border ml-3 p-1 rounded mb-4"
                        />
                    </div>
                    <button
                        type="submit" disabled={loading}
                        className="bg-green-500/60 hover:bg-green-500 cursor-pointer text-white px-4 py-2 rounded mt-4 w-full">
                            {mode === "login" ? "Login" : "Sign Up"}
                    </button>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                </form>
                <button
                    onClick={() =>
                        setMode(mode === "login" ? "signup" : "login")
                    }
                    className="mt-4 text-blue-500 underline"
                >
                    {mode === "login"
                        ? "Don't have an account? Sign Up"
                        : "Already have an account? Login"}
                </button>
            </div>
        </div>
    )
};