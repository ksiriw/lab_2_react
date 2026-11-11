function Header({ theme, onToggleTheme }) {
  return (
    <header className="relative bg-teal-100 px-5 py-8 text-center sm:px-8">
      <button
        type="button"
        onClick={onToggleTheme}
        className="mb-4 rounded-md border border-teal-300 bg-white px-3 py-1 text-sm font-semibold text-teal-800 hover:bg-teal-50 sm:absolute sm:right-4 sm:top-4 sm:mb-0"
      >
        {theme === "dark" ? "☀️ Денна тема" : "🌙 Нічна тема"}
      </button>

      <h1 className="mb-3 text-2xl font-bold text-teal-800 sm:text-3xl">
        Малофій Оксана Любомирівна
      </h1>
      <p className="mb-2 text-gray-700">
        <span className="font-semibold text-teal-800">Місто:</span>{" "}
        Львів, Україна
      </p>

      <p className="text-gray-700">
        <span className="font-semibold text-teal-800">Email:</span>{" "}
        <a
          className="text-teal-800 underline hover:text-orange-700"
          href="mailto:oksana.malofii.kb.2025@lpnu.ua"
        >
          oksana.malofii.kb.2025@lpnu.ua
        </a>
      </p>
    </header>
  );
}

export default Header;

