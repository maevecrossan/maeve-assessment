import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-green-50 font-sans">
      <main className="flex min-h-screen w-full items-center justify-between py-32 px-16 bg-white sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h2 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black">
            Welcome!
          </h2>
        </div>
      </main>
    </div>
  );
}
