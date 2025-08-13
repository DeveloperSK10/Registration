export default function Header({ onRegisterClick }) {
  return (
    <div className="relative h-screen bg-[url('/banner.jpg')] bg-cover bg-center bg-fixed flex flex-col justify-center items-center text-white text-center px-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
          Welcome to Mind Mesh IT Symposium
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl drop-shadow-md max-w-2xl">
          Where Innovation Meets Intelligence
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button
            onClick={onRegisterClick}
            className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-800 rounded-lg shadow-lg transition"
          >
            Register Now
          </button>

          <a
            href="/rules/Rules.pdf" // Keep your rules file inside public/rules/
            download
            className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-800 rounded-lg shadow-lg transition text-center"
          >
            Download Rules
          </a>
        </div>
      </div>
    </div>
  );
}
