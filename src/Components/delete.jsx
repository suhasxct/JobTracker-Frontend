import { useEffect, useContext } from "react";
import { InputContext } from "../context";

export function Delete() {
  const { name, key, setname, setkey } = useContext(InputContext);
  useEffect(() => {
    async function send() {
      const response = await fetch(
        `https://jobtracker-backend.up.railway.app/user/${name}Job`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("token"),
            id: key,
          },
        }
      );
      console.log(response);
    }
    send();
    return () => {
      setkey("");
      setname("");
    };
  }, [name, key]);
  return <></>;
}
