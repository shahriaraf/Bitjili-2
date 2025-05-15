// Components/LanguageSwitcher.jsx
import { useState } from "react";

const languages = [
  { 
    code: "en", 
    name: "English", 
    flag: "https://i.ibb.co/DH7WGsbZ/country-united-kingdom-united-kingdom-flag-vector-illustration-601298-5197.jpg" 
  },
  { code: "bn", name: "বাংলা", flag: "https://betjiliaffiliates.com/wp-content/uploads/2024/04/BD-1.png" },
  { code: "hi", name: "हिन्दी", flag: "https://betjiliaffiliates.com/wp-content/uploads/2024/04/IN-1.png" },
  { code: "ur", name: "اردو", flag: "https://betjiliaffiliates.com/wp-content/uploads/2024/04/PK-1.png" },
  { code: "ne", name: "नेपाली", flag: "https://betjiliaffiliates.com/wp-content/uploads/2024/04/NP-1.png" },
  { code: "th", name: "ไทย", flag: "https://betjiliaffiliates.com/wp-content/uploads/2025/01/betjili-Thailand-icon.png" },
  { code: "my", name: "မြန်မာ", flag: "https://betjiliaffiliates.com/wp-content/uploads/2024/10/Betjili-MMK-Icon.png" },
  { code: "fil", name: "Filipino", flag: "https://betjiliaffiliates.com/wp-content/uploads/2024/04/PH-1.png" },
];


const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  const changeLanguage = (langCode) => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event("change"));
    }
  };

  const handleSelect = (lang) => {
    setSelectedLang(lang);
    setIsOpen(false);
    changeLanguage(lang.code);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 text-white rounded"
      >
        <img src={selectedLang.flag} alt={selectedLang.name} className="w-8 h-8" />
      </button>

      {isOpen && (
        <div className="absolute z-10 right-0 mt-2 w-28 bg-gray-600 rounded-2xl shadow-lg">
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className="flex items-center gap-2 px-4 py-2 rounded-2xl hover:bg-gray-500 cursor-pointer"
            >
              <img src={lang.flag} alt={lang.name} className="w-5 h-5" />
              <span>{lang.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
