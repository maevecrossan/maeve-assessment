export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-green-50 font-sans">
      <main className="flex min-h-screen w-full items-center justify-between py-32 px-16 bg-white sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h2 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black">
            Welcome!
          </h2>
          <p className="max-w-sm text-lg leading-7 text-gray-700">  
            Please log in or create an account to continue.
          </p>
          <div className="flex gap-4">
            <a href="/login" className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700">
              Log In
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
