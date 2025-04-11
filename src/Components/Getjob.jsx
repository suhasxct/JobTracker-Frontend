import { useContext, useState, useEffect } from "react";
import { InputContext } from "../context";
import { useNavigate } from "react-router-dom";

export function Getjob({ type }) {
  const { name, key, reloadTrigger } = useContext(InputContext);
  const [data, setdata] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function get() {
      try {
        const response = await fetch(
          "https://jobtracker-backend.up.railway.app/user/",
          {
            method: "GET",
            headers: {
              token: localStorage.getItem("token"),
              type: type,
            },
          }
        );

        const res = await response.json();

        if (
          res.Message === "Invalid Login" ||
          res.Message === "Invalid Token"
        ) {
          localStorage.removeItem("token");
          navigate("/login");
        } else if (res.message === "NO DATA FOUND") {
          setdata([]);
        } else {
          setdata(res);
        }
      } catch (err) {
        console.error("Fetch failed", err);
      }
    }
    get();
  }, [name, key, type, navigate, reloadTrigger]);

  if (data.length == 0) {
    return (
      <div className="m-20 text-black bg-white p-4 rounded-md text-center shadow-md w-fit mx-auto">
        No Jobs with Status&nbsp;:&nbsp;{type}&nbsp; found
      </div>
    );
  }
  try {
    return (
      <div className="overflow-y-auto max-h-[650px]">
        {data.map((obj) => (
          <ToComp obj={obj} key={obj._id} />
        ))}
      </div>
    );
  } catch (e) {
    console.log(e); //Debugging
  }
}

function ToComp({ obj }) {
  const { setname, inputvisible, setkey, setinputvisible } =
    useContext(InputContext);

  return (
    <div className="shadow-xl border-1 m-5 flex border-slate-200 hover:border-2 border-blue-900 shadow-5xl">
      <div className="w-1 bg-red-300 h-xl"></div>
      <div className="w-full h-full flex flex-col gap-3">
        <div className="text-black font-mono p-5">
          <div>CompanyName:&nbsp;&nbsp;{obj.Company}</div>
          <div>Role:&nbsp;&nbsp;{obj.Role}</div>
          <div>Status:&nbsp;&nbsp;{obj.status}</div>
          <div>Date:&nbsp;&nbsp;{obj.DateOfApplication?.split("T")[0]}</div>
          <div>Link:&nbsp;&nbsp;{obj.url}</div>
        </div>
        <div className="flex gap-5 p-2">
          <button
            onClick={() => {
              setname("update");
              setkey(obj._id);
              setinputvisible(!inputvisible);
            }}
            className="flex-1 bg-green-200 rounded-lg hover:bg-green-400"
          >
            update
          </button>
          <button
            onClick={() => {
              setname("del");
              setkey(obj._id);
            }}
            className="flex-1 bg-red-200 rounded-lg hover:bg-red-400"
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
}
