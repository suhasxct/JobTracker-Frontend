import { Sidebar } from "./Sidebar";
import { MainComponent } from "./MainComponent";
import { Input } from "./Input";
import { InputContext } from "../context";
import { useContext } from "react";
import { Delete } from "./delete";
export function Home() {
  const { name } = useContext(InputContext);
  return (
    <div className="flex flex-1 relative overflow-y-hidden">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1 pt-3 pl-3 pr-10">
        <MainComponent />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Input />
      </div>
      {name === "del" ? <Delete /> : null}
    </div>
  );
}
