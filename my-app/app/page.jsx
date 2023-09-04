"use client";

import AlertDialog from "../components/alertdialog";
import Link from "next/link";
import { useFormData } from "../formDetails";

export default function Home() {
  const { formdata, addFormData } = useFormData();
  return (
    <div className=" flex flex-col items-start justify-center p-5">
      <div className="flex items-center justify-between w-full mb-10">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
          Make It Better
        </h1>
        <AlertDialog></AlertDialog>
      </div>
      <div className="flex gap-3">
        {formdata.map((i, idx) => {
          return (
            <Link key={i.name} href={`/editor/?index=${idx}`}>
              <div
                className=" flex flex-col shadow-lg p-5 rounded-lg border w-56 gap-4"
                onClick=""
              >
                <h1 className="font-bold text-2xl">{i.name}</h1>

                {i.id.map((item) => {
                  return (
                    <div className="">
                      <h1 className="text-sm">{item.entry_name} : {item.entry_id}</h1>
                    </div>
                  );
                })}
                <a href={i.url} className=" overflow-clip text-sm">
                  form url
                </a>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
