import { useContext, useRef } from "react";
import { InputContext } from "../context";

export function Input() {
  const company = useRef("");
  const role = useRef("");
  const status = useRef("");
  const url = useRef("");
  const {
    inputvisible,
    setinputvisible,
    name,
    setname,
    key,
    setreloadTrigger,
    reloadTrigger,
  } = useContext(InputContext);

  async function send() {
    setinputvisible(!inputvisible);
    const response = await fetch(`http://localhost:3000/user/${name}Job`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
        id: key,
      },
      body: JSON.stringify({
        Company: company.current.value,
        Role: role.current.value,
        status: status.current.value,
        url: url.current.value,
      }),
    });

    const resData = await response.json();
    setreloadTrigger(!reloadTrigger);
  }

  if (!inputvisible) return null;

  return (
    <div className="bg-[#0f1420] p-15 ease-in-out rounded-lg duration-1000 transition-all flex flex-col w-xl">
      {["Company", "Role", "Status", "Url"].map((field) => (
        <div key={field} className="text-white w-md">
          <p className="m-1">{field}</p>
          <input
            className="bg-[#202831] rounded-lg w-full p-2"
            type="text"
            ref={
              field === "Company"
                ? company
                : field === "Role"
                ? role
                : field === "Status"
                ? status
                : url
            }
            placeholder={`Enter ${field.toLowerCase()}`}
          />
        </div>
      ))}
      <div className="flex justify-around">
        <button
          onClick={() => {
            setname("add");
            send();
          }}
          className="w-46 mt-4 p-2 rounded-lg bg-white"
        >
          {name}
        </button>
      </div>
    </div>
  );
}
