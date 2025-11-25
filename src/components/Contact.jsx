import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    try {
      const result = await emailjs.sendForm(
        "service_xshx2xj",       // 🔥  EmailJS service ID
        "template_bn9i1j5",
        form,
        "1opaXUDnDSV13xAuE"   // 🔥 your EmailJS public key
      );

      alert("Message sent successfully!");

      form.reset();
    } catch (error) {
      console.error("FAILED...", error);
      alert("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 container mx-auto px-6 md:px-16 lg:px-24 py-16"
    >
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-sm text-gray-500 dark:text-gray-400">Let's Talk</p>
        <h2 className="text-4xl font-bold mt-2">Get in Touch</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          I'd love to hear about your project. Let's work together!
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-8 items-stretch">

        {/* LEFT CONTACT CARDS (UNCHANGED ❤️) */}
        <div className="space-y-6 h-full flex flex-col">

          <div className="p-6 rounded-2xl bg-white shadow hover:shadow-md transition flex flex-col flex-1 text-center">
            <div className="text-3xl mb-2">📧</div>
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="text-gray-600 text-sm ">rameshmuthu01996@gmail.com</p>
            <a
              href="mailto:rameshmuthu01996@gmail.com"
              className="text-sm mt-1 text-blue-500 hover:underline"
            >
              Write me →
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow hover:shadow-md transition flex flex-col flex-1 text-center">
            <div className="text-3xl mb-2">💬</div>
            <h3 className="text-lg font-semibold">WhatsApp</h3>
            <p className="text-gray-600 text-sm">+91 7010437218</p>
            <a
              href="https://wa.me/917010437218"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm mt-1 text-blue-500 hover:underline"
            >
              Chat now →
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow hover:shadow-md transition flex flex-col flex-1 text-center">
            <div className="text-3xl mb-2">🔗</div>
            <h3 className="text-lg font-semibold">LinkedIn</h3>
            <p className="text-gray-600 text-sm">Ramesh Muthu</p>
            <a
              href="https://www.linkedin.com/in/rameshmuthu-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm mt-1 text-blue-500 hover:underline"
            >
              Visit profile →
            </a>
          </div>

        </div>

        {/* RIGHT SIDE FORM WITH TRY–CATCH */}
        <div className="md:col-span-2 flex flex-col">
          <form
            onSubmit={sendEmail}
            className="bg-white p-6 rounded-2xl shadow-md flex flex-col space-y-5 h-full"
          >
            <div>
              <label className="block mb-1 text-sm font-medium">Your Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
                required
                className="w-full p-3 rounded-lg border bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Email Address</label>
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                required
                className="w-full p-3 rounded-lg border bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="flex-1">
              <label className="block mb-1 text-sm font-medium">Message</label>
              <textarea
                rows="4"
                name="message"
                placeholder="Write your message..."
                required
                className="w-full p-3 rounded-lg border bg-gray-50 h-full focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-black mt-6 text-white font-medium rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              {loading ? "Sending..." : "Send Message"} <span>📨</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
