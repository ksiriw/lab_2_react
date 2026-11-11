function Education() {
  return (
    <section className="rounded-lg border border-teal-200 p-4">
      <h2 className="mb-3 border-b border-teal-200 pb-2 text-xl font-bold text-teal-800">
        Освіта
      </h2>

      <div className="space-y-4">
        <div className="rounded-md border border-teal-100 bg-teal-50 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:bg-teal-100 hover:shadow-md">
          <h3 className="font-semibold text-gray-800">
            Бурштинський ліцей імені Ольги Басараб
          </h3>
          <p className="mt-1 text-sm text-teal-700">2014–2025</p>
          <p className="mt-1 text-gray-700">
            Повна загальна середня освіта
          </p>
        </div>

        <div className="rounded-md bg-teal-50 p-3">
          <h3 className="font-semibold text-gray-800">
            Національний університет «Львівська політехніка»
          </h3>
          <p className="mt-1 text-sm text-teal-700">2025–2029</p>
          <p className="mt-1 text-gray-700">
            Спеціальність «Кібербезпека та захист інформації»
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
