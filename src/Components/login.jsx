import { Password } from "./password";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";

export function Login() {
  const email = useRef("");
  const password = useRef("");
  const navigate = useNavigate();
  const login = async () => {
    const Email = email.current.value;
    const PasswordValue = password.current.value;

    try {
      const response = await fetch(
        "jobtracker-backend.up.railway.app/user/login",
        {
          method: "POST",
          body: JSON.stringify({ email: Email, password: PasswordValue }),
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await response.json();
      if (data.message == "User Doesnt exsist") {
        console.log(data);
      }
      localStorage.setItem("token", data.token);
      if (data.Messsage === "Login Successfull") {
        navigate("/home");
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };
  return (
    <div className="bg-[#0f1420] w-full h-screen">
      <div className="flex flex-col items-center justify-center bg-[#0f1420] w-full h-full">
        <div className="w-xl h-2xl flex flex-col items-center p-10">
          <div className="text-[#f5fafa] text-7xl m-2">Jobs</div>
          <div className="text-[#f5fafa] text-5xl m-2">Let's get started</div>
          <div className="w-full text-white m-2">
            <p className="m-1">Work Email</p>
            <input
              className="bg-[#202831] rounded-lg w-full p-2"
              type="text"
              ref={email}
              placeholder="name@work.com"
            />
          </div>
          <div className="text-white w-full m-1">
            <p className="m-1">Password</p>
            <Password reference={password} />
          </div>
          <div className="text-white m-3">
            <p>
              By Signingup you agree to our &nbsp;
              <a href="" className="text-[#69679c] underline">
                Terms of Use&nbsp;
              </a>
              and &nbsp;
              <a href="" className="text-[#69679c] underline">
                Privacy policy
              </a>
            </p>
          </div>
          <button
            onClick={login}
            className="w-xs text-white rounded-lg bg-[#6763e6] p-3 m-2 text-center hover:bg-[#a88ffe]"
          >
            Login
          </button>
          <div className="p-4 text-white flex">
            <p>Don't have an account?</p>
            <Link className="text-[#69679c] underline" to="/">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
