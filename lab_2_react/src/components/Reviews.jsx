import { useEffect, useState } from "react";

const VARIANT = 16;
function Reviews() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getComments() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`
        );
        if (!response.ok) {
          throw new Error("HTTP " + response.status);
        }
        const data = await response.json();
        setComments(data);
      } catch (err) {
        console.error(err);
        setError("Не вдалося завантажити відгуки.");
      } finally {
        setLoading(false);
      }
    }
    getComments();
  }, []);

  return (
    <section className="rounded-lg border border-teal-200 p-4">
      <h2 className="mb-3 border-b border-teal-200 pb-2 text-xl font-bold text-teal-800">
        Відгуки попередніх роботодавців
      </h2>

      {loading && <p className="text-gray-700">Завантаження відгуків...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div className="space-y-3">
        {comments.map((comment) => (
          <article
            key={comment.id}
            className="rounded-md border-l-4 border-teal-300 bg-teal-50 p-4"
          >
            <h3 className="font-semibold capitalize text-gray-800">
              {comment.name}
            </h3>
            <p className="mb-2 text-sm text-teal-700">{comment.email}</p>
            <p className="leading-7 text-gray-700">{comment.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Reviews;


