import { useContext } from "react";
import { InputContext } from "../context";

export function CreateButton() {
  const { inputvisible, setinputvisible, name, setname } =
    useContext(InputContext);
  function toggle() {
    setinputvisible(!inputvisible);
    setname("add");
  }
  return (
    <>
      <button
        onClick={toggle}
        className=" p-3 w-full shadow-xs border-2 border-slate-200 flex justify-center hover:bg-[#c8b8ff] cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </>
  );
}
