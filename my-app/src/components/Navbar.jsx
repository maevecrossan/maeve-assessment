"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function Navbar() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        return onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, []);

    const handleLogout = async () => {
        await signOut(auth);
    };

    return (
        <nav className="w-full p-4 bg-gray-800 text-white">
            <a href="/">
                <h1 className="text-2xl font-bold m-2">My App</h1>
            </a>

            {/* Conditional rendering based on user authentication */}
            <div className="absolute top-4 right-4">
                {user ? (
                    <button
                        onClick={handleLogout}
                        className="px-3 py-2 rounded bg-red-200 text-red-700"
                    >
                        Logout
                    </button>
                ) : (
                    <Link href="/login" className="block px-3 py-2 rounded bg-green-200 text-green-700">
                        Login
                    </Link>
                )}
            </div>
        </nav>
    );
}