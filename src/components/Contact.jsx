import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pt-14 pb-28">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <div className="text-center tracking-wide">
        <div className="flex justify-center gap-7 ">
          <p className="my-4 ">
            <a href="https://github.com/Kavilash-R">
              <FiGithub className="size-6 cursor-pointer dark:hover:text-blue-700 hover:text-teal-700" />
            </a>
          </p>
          <p className="my-4 ">
            <a href="https://www.linkedin.com/in/kavilash-ravi-2b5020234/">
              <FaLinkedinIn className="size-6 cursor-pointer dark:hover:text-blue-700 hover:text-teal-700" />
            </a>
          </p>
          <p className="my-4 ">
            <a href="https://mail.google.com/mail/u/1/#inbox?compose=CllgCKCDlVbwcKcwVJvgnLVrvLQbStPRCFpHFBjmPXnGqvzJKRrKSpKgNqfHhbzKlPSKJQgvkWL"></a>
            <CiMail className="size-6 cursor-pointer dark:hover:text-blue-700 hover:text-teal-700" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
