import { useEffect, useState } from "react";
import Header from "./components/header";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import References from "./components/References";
import Reviews from "./components/Reviews";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const hours = new Date().getHours();
    setTheme(hours >= 7 && hours < 21 ? "light" : "dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <div className="min-h-screen bg-teal-50 px-4 py-8 text-gray-800 transition-colors duration-300">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-teal-200 bg-white shadow-lg">
        <Header theme={theme} onToggleTheme={toggleTheme} />

        <main className="flex flex-col gap-4 p-5 sm:p-8">
          <section
            id="objective"
            className="rounded-lg bg-teal-50 p-4"
          >
            <h2 className="mb-3 border-b border-teal-200 pb-2 text-2xl font-bold text-teal-800">
              Мета
            </h2>
            <p className="text-base leading-7">
              Здобути посаду фахівця з кібербезпеки, де я зможу
              застосувати свої знання з інформаційної безпеки,
              зробити внесок у захист систем та розвиватися
              професійно.
            </p>
          </section>

          <Education />
          <Experience />
          <Skills />
          <References />
          <Reviews />
        </main>

        <Footer />
      </div>

      <ContactForm />
    </div>
  );
}
export default App;

