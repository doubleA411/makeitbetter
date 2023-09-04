"use client";

import { React, useState } from "react";
import { Button } from "@/components/ui/button";
import { useFormData } from "../formDetails";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function AlertDialog() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { formdata, addFormData } = useFormData();

  const handleClick = function () {
    var data = preprocess(url);
    const record = {
      name: name,
      url: data.og_url,
      id: data.uniq_ids,
    };

    addFormData(record);

    console.log(formdata);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  function preprocess(url) {
    var split_up = url.split("?");

    var og_url = split_up[0].replace("viewform", "formResponse");

    var uniq_ids = split_up[1]
      .split("&")
      .slice(1)
      .map((i) => {
        const id = i.split("=");
        return { entry_name: id[1].replace("+", " "), entry_id: id[0] };
      });

    return { og_url, uniq_ids };
  }

  return (
    <Dialog>
      <DialogTrigger>
        <Button>Add form</Button>
      </DialogTrigger>
      <DialogContent className="w-[300px]">
        <DialogHeader>
          <DialogTitle>Make forms better</DialogTitle>
          <DialogDescription>
            Paste the pre-filled link of the google form
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-5 items-start">
          <div className="flex flex-col items-start gap-3">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={handleNameChange}
              className="w-[400px]"
            ></Input>
          </div>
          <div className="flex flex-col items-start gap-3">
            <Label htmlFor="url">Form url</Label>
            <Input
              id="url"
              value={url}
              onChange={handleUrlChange}
              className="w-[400px]"
            ></Input>
          </div>
          <DialogFooter className="">
            <Button type="submit" onClick={handleClick}>
              Add
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
export default AlertDialog;
