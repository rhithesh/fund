import React, { useState } from "react";
import { InputField } from "./InputField";
import { Lock, Mail } from "lucide-react";
import { SubmitButton } from "./SubmitButton";
import { signIn } from "next-auth/react";

export const LoginForm = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    try {
      const res = await signIn("credentials", {
        redirect: true,
        email: formData.email,
        password: formData.password,
        callbackUrl: "/",
      });
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <InputField
          icon={Mail}
          type="email"
          id="email"
          onChange={handleInputChange}
          placeholder="Your email"
          isDarkMode={isDarkMode}
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-2">
          Password
        </label>
        <InputField
          icon={Lock}
          onChange={handleInputChange}
          type="password"
          id="password"
          placeholder="Your password"
          isDarkMode={isDarkMode}
        />
      </div>
      <SubmitButton
        type="submit"
        text="Log In"
        isDarkMode={isDarkMode}
        formData={formData}
        onSubmit={handleSubmit}
      />
    </form>
  );
};
