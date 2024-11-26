"use client";

function Typing() {
  const textsArr = ["Extroverted <FrontEnd/> Developer", "Based in Tehran."];
  const currentText = textsArr[0];
  return (
    <p className="text-sm font-light text-center text-gray-700 tracking-[-1]">
      {currentText}
    </p>
  );
}

export default Typing;
