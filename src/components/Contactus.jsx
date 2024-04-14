import React from "react";
import { Formik } from 'formik';
import ContactForm from "./ContactForm";

const Contactus = () => {
  return (
    <section className="contact-us">
      <div className="container mx-auto">
        <div className="headings">
          <small>Reach Out to Us</small>
          <h2>
            <span>Connect</span> with Us
          </h2>
        </div>
        <div className="form-wrap">
            <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contactus;
