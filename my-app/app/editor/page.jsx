"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { useFormData } from "../../formDetails";

function Editor() {
  const searchParams = useSearchParams();
  const idx = searchParams.get("index");
  const { formdata, addFormData } = useFormData();
  return (
    <div className="flex flex-col p-5 items-start">
      <h1 className="text-3xl font-bold">Editor</h1>
      <h2>Name: {formdata[idx].name}</h2>
      <h2 className="text-sm">URL: {formdata[idx].url}</h2>
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
  );
}
export default Editor;
