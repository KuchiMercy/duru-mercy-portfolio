import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsWhatsapp } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import CV from "../assets/DuruMercy.pdf";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');

    emailjs
      .sendForm(
        "service_ts08ap7",
        "template_yggjqo9",
        form.current,
        "2uHV3bPpsJ-5_yDTi"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <h1 className="text-3xl md:text-3xl lg:text-4xl text-secondary uppercase mx-6 font-inknut">
        Contact
      </h1>
      <h2 className="text-center font-hanuman text-2xl md:text-3xl lg:text-3xl pt-4 text-amber-100 font-bold mx-6">
        Send Me a Message
      </h2>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around gap-8">
        <div className="">
          <h2 className="mx-2 text-secondary py-2 md:py-6 text-xl font-inknut lg:text-l">
            Getting in touch is easy!
          </h2>
          <p className="mx-2 text-orange-300 py-2 text-sm font-inknut lg:text-l md:py-1">
            Same Global Estate, <br />
            Lokogoma, <br />
            Abuja.
          </p>

          <p className="mx-2 text-orange-300 py-2 md:py-2 text-sm font-inknut lg:text-l">
            +234 805 736 1735
          </p>

          <p className="mx-2 text-orange-300 py-2 md:py-2 text-sm font-inknut lg:text-l">
            durumercy206@gmail.com
          </p>

          <a
            href={CV}
            download="Duru-Mercy-CV"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <button className="py-1 px-4 mx-2 md:mt:4 bg-secondary border-secondary border-2 text-primary font-bold outline-none font-hanuman rounded hover:bg-transparent transition ease-out duration-500 hover:text-secondary hover:border-secondary">
              Download CV
            </button>{" "}
          </a>

          <div className="flex py-4 ">
            <a
              href="https://wa.link/9x7rna"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsWhatsapp className="text-amber-100 mx-2 w-6 h-6 ml-2 md:mr-4 lg:mr-6 cursor-pointer transition ease-out duration-500 outline-none hover:text-secondary" />
            </a>
            <a href="mailto:durumercy206@gmail.com">
              <BiLogoGmail className="text-amber-100 mx-2  w-6 h-6 md:mr-4 lg:mr-6 cursor-pointer transition ease-out duration-500 outline-none hover:text-secondary" />
            </a>
            <a
              href="www.linkedin.com/in/mercy-duru"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="text-amber-100 mx-2  w-6 h-6 md:mr-4 lg:mr-6 cursor-pointer transition ease-out duration-500 outline-none hover:text-secondary" />
            </a>
          </div>
        </div>

        <div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Your Name"
              onChange={(event) => setName(event.target.value)}
              className="bg-transparent border-2 border-secondary text-amber-100 placeholder:italic font-hanuman py-2 px-10 mb-2 rounded-lg outline-none"
            />{" "}
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your Email"
              className="bg-transparent border-2 border-secondary text-amber-100 font-hanuman py-2 px-10 rounded-lg mb-2 outline-none placeholder:italic"
            />
            <br />
            <textarea
              type="message"
              id="message"
              name="message"
              value={message}
              placeholder="Write us about any Project. We'd love to work with you."
              onChange={(event) => setMessage(event.target.value)}
              className="bg-transparent text-amber-100 font-hanuman border-2 border-secondary py-2 px-8 rounded-lg mb-2 outline-none placeholder:italic "
            ></textarea>{" "}
            <br />
            <button className="py-1 px-4 mx-3 bg-secondary border-secondary border-2 text-primary font-bold outline-none font-hanuman mb-4 rounded hover:bg-transparent transition ease-out duration-500 hover:text-secondary hover:border-secondary">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
