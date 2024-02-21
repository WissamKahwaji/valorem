import React, { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

const LanguageButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const langList = ["en", "ar"];
  return (
    <div className="relative flex flex-col items-center  rounded-lg">
      <button
        className="bg-blue-200 capitalize px-3 py-1 w-full h-full flex items-center justify-between font-serif text-sm rounded-lg tracking-wider border-transparent active:border-white duration-300 active:text-white"
        onClick={() => setIsOpen(prev => !prev)}
      >
        {lang}
        {!isOpen ? (
          <AiOutlineCaretDown className="h-2" />
        ) : (
          <AiOutlineCaretUp className="h-2" />
        )}
      </button>
      {isOpen && (
        <div className="bg-blue-200 absolute  w-full top-8 rounded-lg flex flex-col items-center  p-1  ">
          {langList.map((lang, index) => (
            <div
              key={index}
              className="w-full flex hover:bg-blue-300 justify-center rounded-r-lg border-l-transparent hover:border-l-white border-l-2 cursor-pointer "
              onClick={() => {
                setLang(lang);
                setIsOpen(prev => !prev);
              }}
            >
              <h3 className="capitalize font-header ">{lang}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageButton;
