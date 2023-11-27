"use client";

import cx from "classnames";
import { useState } from "react";
import RotateRightIcon from "@mui/icons-material/RotateRight";

export default function ContactForm({
  inView,
  scrollingUp,
}: {
  inView: boolean;
  scrollingUp: boolean;
}) {
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

  const [isSubmitting, setIsSubmitting] = useState(false); // Additional state for loading indication

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

    // Set the loading state
    setIsSubmitting(true);

    // Process form submission if all fields are valid
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (res.ok) {
        // Reset form fields and validity state after successful submission
        setFormValues({ name: "", email: "", message: "" });
        setFormValidity({ name: false, email: false, message: false });
        // Show success message
        alert(
          `Submitted! I've successfully got your message and will reply to you very shortly!`
        );
      } else {
        // Handle errors
        console.log("error", res);
        alert("There was a problem submitting your form. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting your form.");
    } finally {
      setIsSubmitting(false); // Reset the loading state
      setAttemptedSubmit(false); // Reset the submission attempt state
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cx(
        "w-1/2 py-2 flex flex-col gap-8",
        inView && !scrollingUp && "animate-slideLeft"
      )}
    >
      {isSubmitting ? (
        <div
          className={cx(
            "w-full h-full flex flex-col items-center justify-center gap-4",
            "text-cerulean-500 dark:text-brick-400 transition-colors duration-700"
          )}
        >
          <RotateRightIcon fontSize="large" className="animate-spinner" />
          <p className="">Submitting Your Message...</p>
        </div>
      ) : (
        <>
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
            <label
              htmlFor="message"
              className="font-medium text-ocean-500 mb-2"
            >
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
              "w-auto px-8 py-4 self-start rounded-full font-medium tracking-widest",
              " text-gray-500 transition-all duration-700",
              formValidity.name && formValidity.email && formValidity.message
                ? "bg-ocean-400 text-slate-50 hover:bg-ocean-700"
                : "bg-slate-200 dark:bg-slate-900 text-slate-50 dark:text-slate-600"
            )}
          >
            <span>SUBMIT MESSAGE</span>
          </button>
        </>
      )}
    </form>
  );
}
