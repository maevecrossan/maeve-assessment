"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function Home() {

	const [user, setUser] = useState(null);
	const router = useRouter();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			if (!currentUser) {
				router.push('/login');
			} else {
				setUser(currentUser);
			}
		});

		return () => unsubscribe();
	}, [router]);

	// Logout Handler
	const handleLogout = async () => {
		try {
			await signOut(auth);
			router.push('/login');
		}
		catch (error) {
			console.error("Error signing out: ", error);
		}
	};

	// Prevent UI from rendering before Firebase responds
	if (!user) return <p className="p-5">Loading...</p>;

	return (
		<div className="flex items-center justify-center bg-green-50 font-sans">
			<main className="flex w-full items-center justify-center py-42 px-16 bg-white">
				<div className="flex flex-col items-center gap-6 text-center">
					<h2 className="max-w-lg text-3xl font-semibold leading-10 tracking-tight text-black">
						Hey, {user.displayName}! You&apos;re successfully logged in 🎉
					</h2>

					<p className="max-w-lg text-lg leading-7 text-gray-700">
						Welcome back.
					</p>

					<button
						onClick={handleLogout}
						className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
					>
						Logout
					</button>
				</div>
			</main>
		</div>
	);
}
