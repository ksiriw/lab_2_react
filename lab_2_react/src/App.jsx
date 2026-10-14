
import Header from "./components/header";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import References from "./components/References";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />

      <main>
        <section id="objective">
          <h2>Мета</h2>
          <p>
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
      </main>

      <Footer />
    </div>
  );
}

export default App;
