import React, { useState } from "react";
import { InputField } from "./InputField";
import { SubmitButton } from "./SubmitButton";
import { Mail, User, Lock } from "lucide-react";
import createUser from "./prismaAuth";

export const SignupForm = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (
    type: string,
    data: { [key: string]: string }
  ) => {
    if (type === "signup") {
      //   try {
      //     const result = await signIn("credentials", {
      //       redirect: false,
      //       ...data,
      //     });
      //     if (result?.error) {
      //       console.error("Signup failed:", result.error);
      //     } else {
      //       console.log("Signup successful");
      //     }
      //   } catch (error) {
      //     console.error("Signup error:", error);
      //   }
      // }
      try {
        const formdata = {
          name: data.name,
          email: data.email,
          password: data.password,
        };
        const result = await createUser({ formdata });
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <InputField
          onChange={handleInputChange}
          icon={User}
          type="text"
          id="name"
          placeholder="Your name"
          isDarkMode={isDarkMode}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <InputField
          onChange={handleInputChange}
          icon={Mail}
          type="email"
          id="email"
          placeholder="Your email"
          isDarkMode={isDarkMode}
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-2">
          Password
        </label>
        <InputField
          onChange={handleInputChange}
          icon={Lock}
          type="password"
          id="password"
          placeholder="Your password"
          isDarkMode={isDarkMode}
        />
      </div>
      <SubmitButton
        type="signup"
        text="Sign Up"
        isDarkMode={isDarkMode}
        formData={formData}
        onSubmit={handleSubmit}
      />
    </form>
  );
};
