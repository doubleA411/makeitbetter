"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { useFormData } from "../../formDetails";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function Editor() {
  const handleClick = (e) => {
    e.preventDefaults();
  };

  const searchParams = useSearchParams();
  const idx = searchParams.get("index");
  const { formdata, addFormData } = useFormData();

  return (
    <div className="flex flex-col p-5 items-start">
      <h1 className="text-3xl font-bold">Editor</h1>

      <div className=" flex w-full">
        <div className=" flex-1 bg-slate flex flex-col gap-5 p-5">
          <h2>Name: {formdata[idx].name}</h2>
          <h2 className="text-sm">
            URL: <a href={formdata[idx].url}>Form Url</a>
          </h2>
          <div className="flex flex-col">
            {formdata[idx].id.map((i) => {
              return (
                <h2>
                  {i.entry_name} : {i.entry_id}
                </h2>
              );
            })}
          </div>
        </div>
        <div className=" flex flex-col flex-1 bg-slate-200 rounded-xl p-10">
          <form action={formdata[idx].url}>
            <div className="flex flex-col gap-5">
              {formdata[idx].id.map((i) => {
                return (
                  <div className="flex flex-col gap-3">
                    <Label>{i.entry_name}</Label>
                    <Input name={i.entry_id}></Input>
                  </div>
                );
              })}
              <Button type="submit" onClick={handleClick}>
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Editor;
