"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import ContactForm from "./ContactForm";

const EmailSection = () => {
  // const [emailSubmitted, setEmailSubmitted] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = {
  //     email: e.target.email.value,
  //     subject: e.target.subject.value,
  //     message: e.target.message.value,
  //   };
  //   const JSONdata = JSON.stringify(data);
  //   const endpoint = "/api/send";

  //   // Form the request for sending data to the server.
  //   const options = {
  //     // The method is POST because we are sending data.
  //     method: "POST",
  //     // Tell the server we're sending JSON.
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     // Body of the request is the JSON data we created above.
  //     body: JSONdata,
  //   };

  //   const response = await fetch(endpoint, options);
  //   console.log(response, "response");
  //   const resData = await response.json();
  //   console.log(resData, "resData");

  //   if (response.status === 200) {
  //     console.log(response, "response");
  //     console.log("Message sent.");
  //     setEmailSubmitted(true);
  //   }
  // };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative  "
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/abhishekkbxr">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://linkedin.com/in/abhishek-kumar-4b994922a">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        {/* email form */}
        <ContactForm />
        <div className=" w-full text-white items-center flex my-2 justify-center py-4">
          <p className="font-bold font-sans text-lg">OR</p>
        </div>

        <div className="flex flex-wrap  ">
          <Link
            href="https://wa.me/917462062717"
            target="_blank"
            className="bg-primary-500  hover:bg-primary-600 flex w-full items-center justify-center py-2.5 px-3 text-white font-medium my-2 rounded-lg "
          >
            <span>
              <WhatsAppIcon /> <span className="mx-2">Whatapp</span>
            </span>
          </Link>
          {/* <button className="bg-primary-500 hover:bg-primary-600 w-full text-white font-medium  py-2.5 px-3 rounded-lg my-2">
            <CallIcon /> <span className="mx-2">+917462062717</span>
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
