import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="bg-darkpurplecustom h-screen w-screen flex items-center justify-center ">
      <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 max-w-md w-full text-center shadow-2xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white">
          🧠 Memory Flip
        </h1>
        <p className="text-gray-300 mb-6">
          Train your memory with themed decks, timers, and progressive difficulty.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/game"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
          >
            ▶ Start Game
          </Link>
          <Link
            to="/about"
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
