"use client";

export default function Navbar() {
    return (
        <nav className="w-full p-4 bg-gray-800 text-white">
            <a href="/">
                <h1 className="text-2xl font-bold m-2">My App</h1>
            </a>

            {/* Placeholder */}
            <div className="absolute top-4 right-4 mt-2.5">
                <a href="/login" className="px-3 py-2 rounded bg-green-200 text-green-700">
                    Login
                </a>
            </div>
        </nav>
    );
}