import { CreateButton } from "./CreateButton";
import { Getjob } from "./Getjob";
import { TopButton } from "./TopButtons";
export function MainComponent() {
  return (
    <div className="w-full">
      <div className="p-3 h-20 m-2 w-full">
        <TopButton />
      </div>
      <div className="p-3 grid grid-cols-4 gap-1 h-[210px]">
        <div className="col-span-1 border-r border-slate-200 p-2">
          <div className="mb-3 text-xl font-serif bold text-blue-500 ">
            Recent
          </div>
          <CreateButton />
          <Getjob type={"recent"} />
        </div>
        <div className="col-span-1 border-r border-slate-200 p-2">
          <div className="mb-3 text-xl font-serif bold text-orange-500 ">
            Applied
          </div>
          <CreateButton />
          <Getjob type={"apply"} />
        </div>
        <div className="col-span-1 border-r border-slate-200 p-2">
          <div className="mb-3 text-xl font-serif bold text-green-500 ">
            Offered
          </div>
          <CreateButton />
          <Getjob type={"offer"} />
        </div>
        <div className="col-span-1 border-r border-slate-200 p-2">
          <div className="mb-3 text-xl font-serif bold text-red-500 ">
            Rejected
          </div>
          <CreateButton />
          <Getjob type={"reject"} />
        </div>
      </div>
    </div>
  );
}
