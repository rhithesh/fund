import React from "react";

export const InputField = ({
  icon: Icon,
  type,
  id,
  placeholder,
  isDarkMode,
  onChange,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  type: string;
  id: string;
  placeholder: string;
  isDarkMode: boolean;
  onChange?: (id: string, value: string) => void;
}) => (
  <div className="relative">
    <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
    <input
      type={type}
      onChange={(e) => onChange && onChange(id, e.target.value)}
      id={id}
      className={`pl-10 w-full p-3 rounded-lg ${
        isDarkMode
          ? "bg-neutral-700 focus:bg-neutral-600"
          : "bg-neutral-100 focus:bg-white"
      } focus:outline-none focus:ring-2 focus:ring-neutral-500`}
      placeholder={placeholder}
    />
  </div>
);
