"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  fullName: string;
  email: string;
  company: string;
  message: string;
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Form submitted:", data);
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className="mx-auto px-12 py-8 bg-gradient-to-tr from-[#001f3f] via-[#41729f] to-[#e1f1ff]"
    >
      <motion.h2
        variants={itemVariants}
        className="text-3xl md:text-4xl font-bold text-gray-200 mb-8"
      >
        Get in touch
      </motion.h2>

      <div className="flex items-center justify-evenly gap-8 flex-col md:flex-row">
        {/* Contact Information */}
        <motion.div variants={itemVariants} className="space-y-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-300">
            For general enquiries
          </h3>

          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold text-gray-200 uppercase">
                Address
              </h4>
              <p className="text-gray-300">
                110, 16th Road, Chembur,
                <br />
                Mumbai - 400071
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-gray-200 uppercase">Phone</h4>
              <p className="text-gray-300">+91 22 25208822</p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-gray-200 uppercase">Email</h4>
              <p className="text-gray-300">info@supremegroup.co.in</p>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          variants={itemVariants}
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-lg p-6 "
        >
          <motion.div variants={itemVariants} className="mb-4">
            
            <input
              id="fullName"
              type="text"
              placeholder="Full Name"
              {...register("fullName", { required: "Full name is required" })}
              className={`w-full px-4 py-2 border-b ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.fullName.message}
              </p>
            )}
          </motion.div>

          <motion.div variants={itemVariants} className="mb-4">
            
            <input
              id="email"
              type="email"
              placeholder="Enter email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className={`w-full px-4 py-2 border-b  ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </motion.div>

          <motion.div variants={itemVariants} className="mb-4 ">
            
            <input
              id="company"
              type="text"
              placeholder="Company name (optional)"
              {...register("company")}
              className="w-full px-4 py-2 border-b "
            />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-4">
            <textarea
              id="message"
              rows={4}
              placeholder="Your message"
              {...register("message", { required: "Message is required" })}
              className={`w-full px-4 py-2 border-b ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">
                {errors.message.message}
              </p>
            )}
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={` px-6 py-2 rounded-full text-white border border-md font-medium cursor-pointer ${
                isSubmitting
                  ? "bg-primary-light"
                  : "bg-primary hover:bg-primary-dark"
              } transition-colors`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send"
              )}
            </motion.button>
          </motion.div>

          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-green-100 text-green-700 rounded-md top-0 right-0"
            >
              Thank you! Your message has been sent successfully.
            </motion.div>
          )}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;