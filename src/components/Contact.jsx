import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatusMessage({
        type: "error",
        text: "Please fill in your name, email, and message.",
      });
      return;
    }

    setLoading(true);
    setStatusMessage(null);

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: form.name,
            to_name: "Harshal Suryavanshi",
            from_email: form.email,
            to_email: "harshalsuryavanshi1106@gmail.com",
            message: form.message,
          },
          publicKey
        );
      } else {
        // Direct AJAX submission to harshalsuryavanshi1106@gmail.com via FormSubmit
        const response = await fetch(
          "https://formsubmit.co/ajax/harshalsuryavanshi1106@gmail.com",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              name: form.name,
              email: form.email,
              message: form.message,
              _subject: `New Portfolio Message from ${form.name}`,
              _template: "table",
            }),
          }
        );

        const result = await response.json();
        if (!response.ok || result.success === "false") {
          throw new Error(result.message || "Failed to send message");
        }
      }

      setLoading(false);
      setStatusMessage({
        type: "success",
        text: "Thank you! Your message has been sent to Harshal's email.",
      });
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.error(error);
      setStatusMessage({
        type: "error",
        text: "Could not send automatically. Opening your email client...",
      });
      const subject = encodeURIComponent(
        `Portfolio Inquiry from ${form.name}`
      );
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      );
      window.location.href = `mailto:harshalsuryavanshi1106@gmail.com?subject=${subject}&body=${body}`;
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-8 sm:gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-5 xs:p-6 sm:p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <div className='mt-4 text-secondary text-[13px] sm:text-[14px] flex flex-col gap-1'>
          <p>📍 Kolhapur, Maharashtra, India</p>
          <p className='break-all'>
            ✉️{" "}
            <a
              href='mailto:harshalsuryavanshi1106@gmail.com'
              className='text-white hover:underline'
            >
              harshalsuryavanshi1106@gmail.com
            </a>
          </p>
          <div className='flex flex-wrap gap-4 mt-2'>
            <a
              href='https://linkedin.com/in/harshalsuryavanshi-developer'
              target='_blank'
              rel='noreferrer'
              className='text-[#38bdf8] hover:underline font-medium'
            >
              LinkedIn
            </a>
            <a
              href='https://github.com/HarshAIverse'
              target='_blank'
              rel='noreferrer'
              className='text-[#38bdf8] hover:underline font-medium'
            >
              GitHub
            </a>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-8 sm:mt-12 flex flex-col gap-6 sm:gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3 sm:mb-4 text-[14px] sm:text-[16px]'>
              Your Name
            </span>
            <input
              type='text'
              name='name'
              required
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-3.5 px-4 sm:py-4 sm:px-6 placeholder:text-secondary text-white text-[14px] sm:text-[16px] rounded-lg outline-none border border-white/10 focus:border-[#38bdf8] font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3 sm:mb-4 text-[14px] sm:text-[16px]'>
              Your email
            </span>
            <input
              type='email'
              name='email'
              required
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-3.5 px-4 sm:py-4 sm:px-6 placeholder:text-secondary text-white text-[14px] sm:text-[16px] rounded-lg outline-none border border-white/10 focus:border-[#38bdf8] font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3 sm:mb-4 text-[14px] sm:text-[16px]'>
              Your Message
            </span>
            <textarea
              rows={6}
              name='message'
              required
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-3.5 px-4 sm:py-4 sm:px-6 placeholder:text-secondary text-white text-[14px] sm:text-[16px] rounded-lg outline-none border border-white/10 focus:border-[#38bdf8] font-medium'
            />
          </label>

          {statusMessage && (
            <p
              className={`text-[14px] font-medium ${
                statusMessage.type === "success"
                  ? "text-[#10b981]"
                  : "text-[#f87171]"
              }`}
            >
              {statusMessage.text}
            </p>
          )}

          <button
            type='submit'
            disabled={loading}
            className='bg-tertiary hover:bg-[#1e293b] border border-[#38bdf8]/40 transition-colors py-3 px-8 rounded-xl outline-none w-full sm:w-fit text-white font-bold shadow-md shadow-primary cursor-pointer'
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] sm:h-[400px] h-[280px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
