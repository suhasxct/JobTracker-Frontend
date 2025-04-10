import { useEffect, useRef, useState } from "react";
import { Password } from "./password";
import { Link, useNavigate } from "react-router-dom";
export function Signup() {
  const email = useRef("");
  const password = useRef("");
  const firstname = useRef("");
  const lastname = useRef("");
  const navigate = useNavigate();
  const signup = async () => {
    const Email = email.current.value;
    const PasswordValue = password.current.value;
    const Firstname = firstname.current.value;
    const Lastname = lastname.current.value;
    try {
      localStorage.setItem("name", Firstname);
      const response = await fetch(
        "jobtracker-backend.up.railway.app/user/signup",
        {
          method: "POST",
          body: JSON.stringify({
            email: Email,
            password: PasswordValue,
            firstname: Firstname,
            lastname: Lastname,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      if (data.message == "Signedin Successfully") {
        navigate("/login");
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
          <div className="flex justify-between w-full gap-4">
            <div className="text-white w-md">
              <p className="m-1">First Name</p>
              <input
                className="bg-[#202831] rounded-lg w-full p-2"
                type="text"
                ref={firstname}
                placeholder="First Name"
              />
            </div>
            <div className="text-white w-md">
              <p className="m-1">Last Name</p>
              <input
                className="bg-[#202831] rounded-lg w-full p-2"
                type="text"
                ref={lastname}
                placeholder="Last Name"
              />
            </div>
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
            onClick={signup}
            className="w-xs text-white rounded-lg bg-[#6763e6] p-3 m-2 text-center"
          >
            Signup
          </button>
          <div className="p-4 text-white flex">
            <p>Already have an account?</p>
            <Link className="text-[#69679c] underline" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
