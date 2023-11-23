"use client";

import Link from "next/link";
import cx from "classnames";
import { ELSE_ITEMS, PERSONAL_INFO_ITEMS } from "@/app/data";
import { useEffect, useState } from "react";

const ContactForm = ({
  inView,
  scrollingUp,
}: {
  inView: boolean;
  scrollingUp: boolean;
}) => {
  // States for form values and validity
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formValidity, setFormValidity] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  // Email validation regex pattern
  const emailRegex =
    /^[A-Za-z0-9]+([_\-\.][A-Za-z0-9]+)*@([A-Za-z0-9]+([\-]*[A-Za-z0-9]+)*\.)+[A-Za-z]{2,6}$/;

  // Validates a single field
  const validateField = (fieldName: string, value: string) => {
    let isValid = value.trim() !== "";
    if (fieldName === "email") {
      isValid = emailRegex.test(value);
    }
    setFormValidity((prev) => ({ ...prev, [fieldName]: isValid }));
  };

  // Updates form values on input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  // Checks if all fields in the form are valid
  const validateForm = () => {
    return Object.values(formValidity).every(Boolean);
  };

  // Handles form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAttemptedSubmit(true); // Indicates that a submit attempt was made

    // Validate all fields before submission
    Object.keys(formValues).forEach((key) => {
      validateField(key, formValues[key as keyof typeof formValues]);
    });

    if (!validateForm()) {
      // If any field is invalid, prevent form submission
      return;
    }

    // Process form submission if all fields are valid
    console.log("Submitted:", formValues);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });

    if (res.ok) {
      // Handle successful submission, like showing a confirmation message
      alert(
        `Hey, I've successfully got your message and will reply to you very shortly!`
      );
    } else {
      // Handle errors
      console.log("error", res);
      // This will activate the closest `error.js` Error Boundary
      // throw new Error('Failed to fetch data')
    }

    // Reset form fields and validity state after successful submission
    setFormValues({ name: "", email: "", message: "" });
    setFormValidity({ name: false, email: false, message: false });
    setAttemptedSubmit(false); // Reset the submission attempt state
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cx(
        "w-1/2 py-2 flex flex-col gap-8",
        inView && !scrollingUp && "animate-slideLeft"
      )}
    >
      {/* Name */}
      <div className="flex flex-col">
        <label htmlFor="name" className="font-medium text-ocean-500 mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formValues.name}
          onChange={handleInputChange}
          className={cx(
            "p-2 bg-transparent rounded-md border text-slate-800 dark:text-slate-100 transition-colors duration-700",
            formValidity.name || !attemptedSubmit
              ? "border-slate-200 dark:border-slate-500 focus:border-ocean-500 focus:ring-ocean-500"
              : "border-red-400 focus:border-red-400 focus:ring-red-400 dark:border-red-300 dark:focus:ring-red-300"
          )}
        />
        <div className="h-1">
          {!formValidity.name && attemptedSubmit && (
            <p className="text-xs mt-1 text-red-400 dark:text-red-300 transition-colors duration-700">
              ! Your name is required.
            </p>
          )}
        </div>
      </div>
      {/* Email */}
      <div className="flex flex-col">
        <label htmlFor="email" className="font-medium text-ocean-500 mb-2">
          Your Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formValues.email}
          onChange={handleInputChange}
          className={cx(
            "p-2 bg-transparent rounded-md border text-slate-800 dark:text-slate-100 transition-colors duration-700",
            formValidity.email || !attemptedSubmit
              ? "border-slate-200 dark:border-slate-500 focus:border-ocean-500 focus:ring-ocean-500"
              : "border-red-400 focus:border-red-400 focus:ring-red-400 dark:border-red-300 dark:focus:ring-red-300"
          )}
        />
        <div className="h-1">
          {!formValidity.email && attemptedSubmit && (
            <p className="text-xs mt-1 text-red-400 dark:text-red-300 transition-colors duration-700">
              ! Please enter a valid email address.
            </p>
          )}
        </div>
      </div>
      {/* Message */}
      <div className="flex flex-col">
        <label htmlFor="message" className="font-medium text-ocean-500 mb-2">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={10}
          value={formValues.message}
          onChange={handleInputChange}
          className={cx(
            "p-2 bg-transparent rounded-md border text-slate-800 dark:text-slate-100 transition-colors duration-700",
            " ",
            formValidity.message || !attemptedSubmit
              ? "border-slate-200 dark:border-slate-500 focus:border-ocean-500 focus:ring-ocean-500"
              : "border-red-400 focus:border-red-400 focus:ring-red-400 dark:border-red-300 dark:focus:ring-red-300"
          )}
        ></textarea>
        <div className="h-1">
          {!formValidity.message && attemptedSubmit && (
            <p className="text-xs mt-1 text-red-400 dark:text-red-300 transition-colors duration-700">
              ! Please type your message here.
            </p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className={cx(
          "w-auto px-8 py-4 self-start rounded-full font-medium tracking-widest transition-colors duration-700",
          formValidity.name && formValidity.email && formValidity.message
            ? "bg-slate-300 dark:bg-ocean-500 text-ocean-500 dark:text-slate-100"
            : "bg-gray-300 text-gray-500 "
        )}
      >
        <span>SUBMIT MESSAGE</span>
      </button>
    </form>
  );
};

export default function ContactMeView({
  inView,
  scrollingUp,
}: {
  inView: boolean;
  scrollingUp: boolean;
}) {
  return (
    <div className="flex gap-20">
      <div className="w-1/2 flex flex-col gap-10">
        {/* Personal Info */}
        <div
          className={cx(
            "flex flex-col gap-8",
            inView && !scrollingUp && "animate-slideRight"
          )}
        >
          <span
            className={cx(
              "py-2 border-b font-medium text-ocean-500",
              "border-slate-200 dark:border-slate-500 transition-colors duration-700"
            )}
          >
            Personal
          </span>
          <div className="flex flex-col gap-4">
            {PERSONAL_INFO_ITEMS.map(({ id, icon: Icon, details }) => {
              return (
                <div key={id} className="flex items-center gap-4">
                  <div
                    className={cx(
                      "p-4 rounded-lg flex justify-center items-center",
                      "bg-slate-200 dark:bg-slate-900 transition-colors duration-700"
                    )}
                  >
                    <Icon className="text-ocean-500 dark:text-slate-500 transition-colors duration-700" />
                  </div>
                  <div>
                    <span>{details}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Elsewhere */}
        <div
          className={cx(
            "flex flex-col gap-8",
            inView && !scrollingUp && "animate-slideRight"
          )}
          style={{ animationDelay: "0.5s" }}
        >
          <span
            className={cx(
              "py-2 border-b font-medium text-ocean-500",
              "border-slate-200 dark:border-slate-500 transition-colors duration-700"
            )}
          >
            Elsewhere
          </span>
          <div className="flex flex-col gap-4">
            {ELSE_ITEMS.map(({ id, icon: Icon, path, info }) => {
              return (
                <Link
                  key={id}
                  href={path}
                  className="py-1 flex items-center hover:text-cerulean-400 dark:hover:text-brick-300"
                >
                  <Icon fontSize="small" className="mx-2" />
                  <span>{info}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      {/* Message form */}
      <ContactForm inView={inView} scrollingUp={scrollingUp} />
    </div>
  );
}
