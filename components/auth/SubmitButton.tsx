import React from "react";

export const SubmitButton = ({
  type,
  text,
  isDarkMode,
  formData,
  onSubmit,
}: {
  type: string;
  text: string;
  isDarkMode: boolean;
  formData: { [key: string]: string };
  onSubmit?: (type: string, data: { [key: string]: string }) => void;
}) => (
  <button
    type="button"
    onClick={() => onSubmit && onSubmit(type, formData)}
    className={`w-full p-3 rounded-lg ${
      isDarkMode
        ? "bg-blue-600 hover:bg-blue-700"
        : "bg-blue-500 hover:bg-blue-600"
    } text-white font-semibold transition duration-300 ease-in-out`}
  >
    {text}
  </button>
);
