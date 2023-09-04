"use client";

import React, { createContext, useContext, useState } from "react";

const FormDataContext = createContext();

export function FormDataProvider({ children }) {
  const [formdata, setFormData] = useState([
    {
      name: "Form 1",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSfe_E9xfKNW5ZksXG9jZKgZK16-gCtYBdEfd-t4j97fwIA4MQ/formResponse",
      id: [
        {
          entry_name: "Name",
          entry_id: "entry.1579058291",
        },
        {
          entry_name: "Email",
          entry_id: "entry.1050726868",
        },
      ],
    },
  ]);

  const addFormData = (newRecord) => {
    setFormData((prevData) => [...prevData, newRecord]);
  };

  return (
    <FormDataContext.Provider value={{ formdata, addFormData }}>
      {children}
    </FormDataContext.Provider>
  );
}

export function useFormData() {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error("useFormData must be used within a FormDataProvider");
  }
  return context;
}

// ["entry.1579058291", "entry.1050726868"];
