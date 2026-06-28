import { useState } from "react";
import gameIcon from "../assets/apple.svg";
/*
  LoginPage is a dummy login screen.

  For now, it does not talk to a database.
  It only checks that the username and password boxes are not empty.
*/
export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!username.trim() || !password.trim()) {
      setError("Type a name and password.");
      return;
    }

    setError("");
    onLogin(username.trim());
  }

  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-amber-200 via-lime-100 to-sky-200 px-4 py-8">
      <section className="pointer-events-none fixed inset-0 opacity-30">
        <span className="absolute left-[8%] top-[12%] text-7xl">🍎</span>
        <span className="absolute right-[12%] top-[16%] text-7xl">🍌</span>
        <span className="absolute bottom-[16%] left-[14%] text-7xl">⭐</span>
        <span className="absolute bottom-[12%] right-[12%] text-7xl">➕</span>
      </section>

      <section className="relative w-full max-w-md rounded-[2rem] bg-white/90 p-6 text-center shadow-2xl shadow-slate-400/30 ring-4 ring-white sm:p-8">
        {/* <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-[1.75rem] bg-yellow-100 text-6xl shadow-inner">
          🔢
        </div> */}
        <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-[1.75rem] bg-yellow-100 shadow-inner">
      
      {/* 2. Use it like a regular image! */}
      <img src={gameIcon} alt="Game Icon" className="w-12 h-12" />
      
    </div>

        <h1 className="text-4xl font-black text-slate-900">Fruit Game</h1>

        <p className="mt-2 text-lg font-black text-slate-600">
          Sign in to play.
        </p>

        <form onSubmit={handleSubmit} className="mt-7 space-y-4 text-left">
          <label className="block">
            <span className="mb-2 block text-sm font-black uppercase tracking-wide text-slate-600">
              Username
            </span>
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="w-full rounded-2xl border-4 border-slate-100 bg-white px-4 py-4 text-xl font-black text-slate-900 outline-none transition focus:border-fuchsia-300"
              placeholder="Your name"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-black uppercase tracking-wide text-slate-600">
              Password
            </span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-2xl border-4 border-slate-100 bg-white px-4 py-4 text-xl font-black text-slate-900 outline-none transition focus:border-fuchsia-300"
              placeholder="Any password"
            />
          </label>

          <p className="min-h-7 text-center text-lg font-black text-rose-600">
            {error}
          </p>

          <button
            type="submit"
            className="w-full rounded-[1.5rem] bg-fuchsia-500 px-6 py-4 text-2xl font-black text-white shadow-lg shadow-fuchsia-200 transition hover:-translate-y-1 hover:bg-fuchsia-600"
          >
            Play
          </button>
        </form>
      </section>
    </main>
  );
}
