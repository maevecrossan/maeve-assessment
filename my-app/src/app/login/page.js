"use client";

import { useState } from "react";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function LoginPage() {
    const [mode, setMode] = useState("login");

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); // 6+ characters minimum

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (mode === "signup" && !fullName.trim()) {
            return setError("Full name is required.");
        }
        if (!email.trim()) return setError("Email is required.");
        if (password.length < 6) return setError("Password must be at least 6 characters.");

        setLoading(true);

        try {
            if (mode === "signup") {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                await updateProfile(userCredential.user, { displayName: fullName });
            } else {
                await signInWithEmailAndPassword(auth, email, password);
            }

            router.push("/");
        } catch (err) {
            console.error(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mx-auto mt-32 text-center">
            <div className="p-8 border rounded-lg mt-16 shadow-lg inline-block text-left bg-gray-800 text-white">

                <h2 className="text-3xl font-extrabold mb-8 text-center">{mode === "login" ? "Login" : "Sign Up"}</h2>

                <form onSubmit={handleSubmit}>
                    {mode === "signup" && (
                        <div>
                            <label htmlFor="fullName" className="font-bold w-full">Full Name</label>
                            <input
                                required
                                id="fullName"
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="w-full border p-2 rounded mt-2 mb-4 bg-gray-700 text-white"
                            />
                        </div>
                    )}

                    <div>
                        <label htmlFor="email" className="font-bold w-full">Email</label>
                        <input
                            required
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border p-2 rounded mt-2 mb-4 bg-gray-700 text-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="font-bold w-full">Password</label>
                        <input
                            required
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border p-2 rounded mt-2 mb-4 bg-gray-700 text-white"
                        />
                    </div>

                    {/* Submit button with loading state */}
                    <button
                        type="submit" disabled={loading}
                        className="bg-green-500/60 hover:bg-green-500 cursor-pointer text-white px-4 py-2 rounded mt-4 w-full">
                            {loading ? "Please wait..." : mode === "login" ? "Login" : "Sign Up"}
                    </button>

                    {/* Error message */}
                    {error && <p style={{ color: "red" }}>{error}</p>}

                </form>

                {/* Mode toggle */}
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