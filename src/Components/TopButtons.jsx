import { useNavigate } from "react-router-dom";

export function TopButton() {
  const navigate = useNavigate();
  function toggle() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  const user = localStorage.getItem("name");

  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <div className="font-sans text-4xl text-center text-black bold pt-0 p-2">
          Welcome Back !!
        </div>
        <div className="font-sans text-4xl text-center text-[#684EED] bold pt-0 p-2">
          {user}
        </div>
      </div>

      <button
        onClick={toggle}
        className="w-40 h-10  shadow-xl hover:bg-[#9a72fd] shadow-2xl flex gap-2 bg-[#684EED] rounded-lg text-white p-2 justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
          />
        </svg>
      </button>
    </div>
  );
}
