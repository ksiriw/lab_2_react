import { useEffect, useState } from "react";

function Footer() {
  const [systemInfo, setSystemInfo] = useState({});

  useEffect(() => {
    localStorage.setItem("userAgent", navigator.userAgent);
    localStorage.setItem("platform", navigator.platform);

    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      data[key] = localStorage.getItem(key);
    }
    setSystemInfo(data);
  }, []);

  return (
    <footer className="border-t border-teal-200 bg-teal-100 px-5 py-4 text-center text-sm text-teal-800">
      <p>© 2026 Малофій Оксана</p>

      <div className="mt-3 text-left">
        <h3 className="mb-1 text-center font-semibold">
          Інформація про систему (localStorage)
        </h3>
        <ul className="space-y-1 break-words">
          {Object.entries(systemInfo).map(([key, value]) => (
            <li key={key}>
              <span className="font-semibold">{key}:</span> {value}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
export default Footer;



