import React, { forwardRef, useRef } from "react";
import emailjs from "@emailjs/browser";

import Card from "../components/Card";
import "../style/details/ContactDetail.css";

const ContactDetail = forwardRef((props, ref) => {
  const form = useRef();
  const sendEmailHandler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.message);
          alert(
            "이메일 전송이 완료되었습니다! 빠른 시일 내에 답장 드리겠습니다."
          );
          form.current.name.value = "";
          form.current.email.value = "";
          form.current.message.value = "";
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };
  return (
    <div className="Contact" ref={ref}>
      <h1 className="contact-title">
        <a name="Contact">Contact</a>
      </h1>
      <p>
        <a href="mailto:leesengjie@jbnu.ac.kr" className="email-link">
          📧 leesengjie@jbnu.ac.kr
        </a>
      </p>
      <div className="contact-card-wrapper">
        <Card className="contact-card">
          <form className="contents" ref={form} onSubmit={sendEmailHandler}>
            <h3>Name</h3>
            <input type="text" name="name" />
            <h3>Email</h3>
            <input type="email" name="email" />
            <h3>Message</h3>
            <textarea name="message" />
            <div className="send-btn">
              <button type="submit">Send</button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
});
export default ContactDetail;
