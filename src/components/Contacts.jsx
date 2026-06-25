import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        "service_zwepzbf",
        "template_soldhe2", // ✅ Your template ID
        templateParams, // ✅ Parameters
        "5n-EWqcovDQvZPJSE", // ✅ Public key
      )
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setSubmitStatus("success");

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      })
      .catch((error) => {
        console.error("Email send failed:", error);
        console.error("Error details:", {
          status: error.status,
          text: error.text,
          message: error.message,
        });
        setSubmitStatus("error");

        // Clear error message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen overflow-hidden py-20 px-6 md:px-16 lg:px-32"
    >
      <div className="absolute inset-0 bg-slate-950/95"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.12),transparent_24%)] pointer-events-none"></div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm uppercase tracking-[0.28em] text-blue-300 shadow-sm shadow-blue-500/10">
            Contact
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-semibold text-white mb-4">
            Let's Create Something Great
          </h2>
          <p className="mx-auto max-w-3xl text-gray-300 text-lg leading-relaxed">
            I'm always open to new opportunities and collaborations. Reach out
            to discuss your next project or just to say hello.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-start">
          <div className="space-y-8">
            <div className="rounded-[32px] bg-white/5 border border-white/10 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Let's Connect
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or
                simply want to say hello, I’d love to hear from you. Send a
                message and I’ll get back to you soon.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                {
                  icon: <FaEnvelope className="text-white text-xl" />,
                  label: "Email",
                  value: "yayehasres1221@gmail.com",
                },
                {
                  icon: <FaPhone className="text-white text-xl" />,
                  label: "Phone",
                  value: "+251962710015",
                },
                {
                  icon: <FaMapMarkerAlt className="text-white text-xl" />,
                  label: "Location",
                  value: "Bahir Dar, Ethiopia",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-lg shadow-slate-950/20"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-500/10">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-[32px] bg-white/5 border border-white/10 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex flex-wrap gap-4">
                {[
                  {
                    href: "https://github.com/betsiha1994",
                    icon: <FaGithub className="text-white text-lg" />,
                  },
                  {
                    href: "https://www.linkedin.com/in/asres-yayeh-524424350/",
                    icon: <FaLinkedin className="text-white text-lg" />,
                  },
                  {
                    href: "https://twitter.com/",
                    icon: <FaTwitter className="text-white text-lg" />,
                  },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 border border-white/10 transition duration-300 hover:bg-blue-500"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Send Me a Message
            </h3>

            {submitStatus === "success" && (
              <div className="rounded-3xl bg-emerald-500/15 border border-emerald-500 text-emerald-100 p-4 mb-6">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="rounded-3xl bg-red-500/15 border border-red-500 text-red-100 p-4 mb-6">
                Failed to send message. Please try again or email me directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-blue-500 px-6 py-3 text-white font-semibold shadow-lg shadow-blue-500/20 transition duration-300 hover:bg-blue-600 disabled:bg-blue-400"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
