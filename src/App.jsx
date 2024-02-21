import React, { useState } from "react";

function App() {
  const [para, setPara] = useState("");
  const [inputvalue, setInputValue] = useState("");

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }
function deleteParagraph() {
    setPara("");
  }

  function generateParagraph() {
    const words = [
      "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur",
      "adipiscing", "elit", "sed", "do", "eiusmod", "tempor",
      "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua"
    ];

    let generatedPara = "";
    for (let i = 0; i < inputvalue; i++) {
      generatedPara += words[Math.floor(Math.random() * words.length)] + " ";
    }
    setPara(generatedPara);
  }

  return (
    <div className="flex flex-col items-center justify-center bg-slate-800 h-screen text-white">
      <div className="bg-red-400 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl mb-4">Paragraph Generator</h1>
        <div className="flex flex-row justify-center mb-4">
          <input type="number" className="bg-white text-black p-2 rounded mr-2 flex-grow" onChange={handleInputChange} value={inputvalue} />
          <button className="bg-red-600 p-2 rounded text-white" onClick={generateParagraph}>Generate</button>
          <button className="bg-red-600 p-2 rounded text-white ml-2" onClick={deleteParagraph}>Delete</button>
        </div>
        <div className=" ">
        <p className="whitespace-pre-line max-h-48 overflow-auto">{para}</p>
        </div>
    
      </div>
    </div>
  );
}

export default App;