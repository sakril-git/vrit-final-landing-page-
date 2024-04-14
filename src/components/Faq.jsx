import React, { useState } from "react";
import faqimg from "../assets/images/faq-img.jpg";
import { FaPlus, FaMinus } from "react-icons/fa6";
import {FaTimes} from "react-icons/fa";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faqs">
      <div className="container mx-auto">
        <div className="headings">
          <small>FAQ</small>
          <h2>
            <span>Frequently</span> Asked Questions
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="faq-wrap order-2 lg:order-1 lg:col-start-1 lg:col-end-8">
            {faqData.map((faq, index) => (
              <div className="faq-card" key={index}>
                <div className="faq-head" onClick={() => toggleFaq(index)}>
                  <h4>{faq.question}</h4>
                  <span>{openIndex === index ? <FaTimes /> : <FaPlus />}</span>
                </div>
                <div
                  className={`faq-body ${
                    openIndex === index ? "open" : "closed"
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="faq-img order-1 lg:order-2 lg:col-start-8 lg:col-end-13">
            <div className="img-wrap">
              <img src={faqimg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

// Sample FAQ data
const faqData = [
  {
    question: "Gorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    question: "Norem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    question: "Norem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    question: "Norem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  // Add more FAQ items as needed
];
