import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-Neutral-100 my-10 text-center">
        Contact us !
      </h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.8687765823825!2d74.18825878827133!3d30.155167510067166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3917a7975b2b1207%3A0x95f82a819910bf1e!2sVishal%20Mega%20Mart!5e0!3m2!1sen!2sin!4v1689186106547!5m2!1sen!2sin"
        width="600"
        height="450"
        title="map"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-screen"
      ></iframe>
      <div className="mb-32">
          <form className="grid justify-center my-16" action="https://formspree.io/f/xyyqgwwd" method="POST">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
              className="border-2 py-2 px-4 my-4"
            />
            <input
              type="email"
              placeholder="Email"
              name="Email"
              required
              autoComplete="off"
              className="border-2 py-2 px-4 my-4"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              cols="25"
              rows="5"
              required
              autoComplete="off"
              className="border-2 py-2 px-4 my-4"
            ></textarea>
            <input className="bg-blue-400 px-4 cursor-pointer py-2 text-white-100 font-bold text-lg" type="submit" value="send" />
          </form>
        </div>
    </div>
  );
};

export default Contact;