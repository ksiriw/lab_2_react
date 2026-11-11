import { useEffect, useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeagjeyl";

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("contactModalClosed")) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  function handleClose() {
    setIsOpen(false);
    sessionStorage.setItem("contactModalClosed", "true");
  }

  const inputClass =
    "rounded-md border border-teal-200 bg-white p-2 text-gray-800 focus:border-teal-700 focus:outline-none";

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
            <h2 className="mb-4 text-xl font-bold text-teal-800">
              Зворотний зв'язок
            </h2>

            <form
              action={FORMSPREE_ENDPOINT}
              method="POST"
              className="flex flex-col gap-3"
            >
              <label className="flex flex-col gap-1 text-sm text-gray-700">
                Ім'я
                <input type="text" name="name" required className={inputClass} />
              </label>
              <label className="flex flex-col gap-1 text-sm text-gray-700">
                Email
                <input type="email" name="email" required className={inputClass} />
              </label>
              <label className="flex flex-col gap-1 text-sm text-gray-700">
                Номер телефону
                <input type="tel" name="phone" required className={inputClass} />
              </label>
              <label className="flex flex-col gap-1 text-sm text-gray-700">
                Повідомлення
                <textarea
                  name="message"
                  rows="4"
                  required
                  className={inputClass}
                />
              </label>

              <div className="mt-2 flex gap-3">
                <button
                  type="submit"
                  className="flex-1 rounded-md bg-teal-700 px-4 py-2 font-semibold text-[#fff] hover:bg-teal-800"
                >
                  Надіслати
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="rounded-md border border-teal-300 px-4 py-2 text-teal-800 hover:bg-teal-50"
                >
                  Закрити
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
export default ContactForm;

