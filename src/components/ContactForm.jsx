import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaArrowRight } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Name is required";
        }
        if (!values.email) {
          errors.email = "Email is required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        if (!values.phone) {
          errors.phone = "Phone number is required";
        }
        if (!values.subject) {
          errors.subject = "Subject is required";
        }
        if (!values.message) {
          errors.message = "Message is required";
        }
        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        // Handle form submission logic here
        console.log(values);
        resetForm();
      }}
    >
      <Form className="grid grid-cols-1 gap-x-32 sm:grid-cols-2">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <Field className="w-full" type="text" id="name" name="name" />
          <ErrorMessage
            name="name"
            component="div"
            className="error-message"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Field className="w-full" type="email" id="email" name="email" />
          <ErrorMessage
            name="email"
            component="div"
            className="error-message"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <Field className="w-full" type="tel" id="phone" name="phone" />
          <ErrorMessage
            name="phone"
            component="div"
            className="error-message"
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <Field className="w-full" type="text" id="subject" name="subject" />
          <ErrorMessage
            name="subject"
            component="div"
            className="error-message"
          />
        </div>
        <div className="form-group col-span-2">
          <label htmlFor="message">Message</label>
          <Field className="w-full" as="textarea" id="message" name="message" />
          <ErrorMessage
            name="message"
            component="div"
            className="error-message"
          />
        </div>
        <div className="form-group col-span-2 text-center">
          <button type="submit" className="btn">
            Submit
            <span>
              <FaArrowRight />
            </span>
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
