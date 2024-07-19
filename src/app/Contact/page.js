"use client";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as yup from "yup";

export default function Contact() {
  const [toast, setToast] = useState({
    message: "",
    isBool: false,
    action: "",
  });
  useEffect(() => {
    if (toast.isBool) {
      setTimeout(() => {
        setToast({ message: "", isBool: false, action: "" });
      }, 3000);
    }
  }, [toast.isBool]);
  const handleFormSubmit = (values) => {
    console.log(values);
    setToast((prev) => ({
      message: "Message sent successfully.",
      isBool: true,
      action: "success",
    }));
    resetForm();
  };

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
    values,
    errors,
    touched,
  } = useFormik({
    onSubmit: handleFormSubmit,
    initialValues: { fullName: "", email: "", subject: "", message: "" },
    validationSchema: yup.object({
      fullName: yup
        .string()
        .trim()
        .min(3, "Full Name must be at least 3 characters")
        .max(64, "You have reached your maximum limit of characters allowed")
        .required("Full Name is required"),
      email: yup
        .string()
        .email("Must be a valid email")
        .max(64, "You have reached your maximum limit of characters allowed")
        .required("Email is required"),
      subject: yup.string().required("Subject is required"),
      message: yup.string().trim().required("Message is required"),
    }),
  });

  return (
    <section>
      <div className="2xl:container mx-auto bg-white md:p-20 sm:p-10 p-5 py-10">
        <div className="lg:w-4/6 mx-auto flex flex-col gap-y-14">
          <div className="text-center flex flex-col gap-y-6">
            <div
              style={{
                fontSize: "16px",
                fontWeight: 900,
                lineHeight: "20px",
                letterSpacing: "3px",
              }}
            >
              Contact us
            </div>
            <div className="h1-bold">Let’s Start a Conversation</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </div>
          </div>
          <div className="color-primary p-10 pb-20">
            <div className="body-reg text-white border-b border-white py-3 opacity-60">
              Working hours
            </div>
            <div className="text-white my-4">
              <div className="h5-bold mb-2">Monday To Friday</div>
              <div className="h5-bold mb-2">9:00 AM to 8:00 PM </div>
              <div className="body-med opacity-60">
                Our Support Team is available 24/7
              </div>
            </div>
            <div className="body-reg text-white border-b border-white py-3 opacity-60">
              Contact Us
            </div>
            <div className="text-white mt-4">
              <div className="h5-bold mb-2">0999 999 9999</div>
              <div className="h5-bold mb-2">0999 999 9999</div>
              <div className="body-reg opacity-60">hello@finsweet.com</div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
              <label className="form-control w-full">
                <input
                  type="text"
                  name="fullName"
                  value={values.fullName}
                  placeholder="Full Name*"
                  className={`input input-bordered input-lg w-full bg-transparent rounded-md ${
                    errors.fullName && touched.fullName && "input-error"
                  }`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.fullName && touched.fullName && (
                  <div className="label">
                    <span className="label-text-alt text-red-500">
                      {errors.fullName}
                    </span>
                  </div>
                )}
              </label>
              <label className="form-control w-full">
                <input
                  type="text"
                  name="email"
                  value={values.email}
                  placeholder="Your Email*"
                  className={`input input-bordered input-lg w-full bg-transparent rounded-md ${
                    errors.email && touched.email && "input-error"
                  }`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && (
                  <div className="label">
                    <span className="label-text-alt text-red-500">
                      {errors.email}
                    </span>
                  </div>
                )}
              </label>
              <label className="form-control w-full">
                <select
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`select select-bordered bg-transparent select-lg w-full rounded-md body-reg ${
                    errors.subject && touched.subject && "select-error"
                  }`}
                >
                  <option disabled selected value={""}>
                    Who shot first?*
                  </option>
                  <option value={"Han Solo"}>Han Solo</option>
                  <option value={"Greedo"}>Greedo</option>
                </select>
                {errors.subject && touched.subject && (
                  <div className="label">
                    <span className="label-text-alt text-red-500">
                      {errors.subject}
                    </span>
                  </div>
                )}
              </label>
              <label className="form-control w-full">
                <textarea
                  name="message"
                  value={values.message}
                  placeholder="Message*"
                  className={`textarea textarea-bordered textarea-lg w-full bg-transparent rounded-md ${
                    errors.message && touched.message && "textarea-error"
                  }`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.message && touched.message && (
                  <div className="label">
                    <span className="label-text-alt text-red-500">
                      {errors.message}
                    </span>
                  </div>
                )}
              </label>
              <button className="btn color-yellow w-full text-black hover:text-white border-none rounded-sm">
                Send Message
              </button>
              {toast.isBool && (
                <div
                  role="alert"
                  className={`alert alert-${toast.action} rounded-sm`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{toast.message}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
