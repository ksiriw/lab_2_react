function Skills() {
  return (
    <section className="rounded-lg border border-teal-200 p-4">
      <h2 className="mb-3 border-b border-teal-200 pb-2 text-xl font-bold text-teal-800">
        Навички та вміння
      </h2>

      <div className="mb-4 rounded-md bg-teal-50 p-4">
        <h3 className="mb-2 font-semibold text-teal-800">
          Технічні навички
        </h3>
        <ul className="list-disc space-y-2 pl-5 text-gray-700">
          <li>Основи аудиту інформаційної безпеки</li>
          <li>Основи програмування (C#, Python)</li>
          <li>Знання нормативно-правового забезпечення кібербезпеки</li>
        </ul>
      </div>

      <div className="rounded-md bg-teal-50 p-4">
        <h3 className="mb-2 font-semibold text-teal-800">
          Особисті якості
        </h3>
        <ul className="list-disc space-y-2 pl-5 text-gray-700">
          <li>Вміння працювати в команді</li>
          <li>Відповідальність та уважність до деталей</li>
          <li>Здатність швидко опановувати нові технології</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
