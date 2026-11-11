
import { useState } from "react";
import { Link } from "react-router";

const contactDetails = [
  {
    icon: "✉",
    title: "Email us",
    description: "Have a question? Send us an email.",
    value: "hello@taskflow.ai",
    href: "mailto:hello@taskflow.ai",
    color: "bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400",
  },
  {
    icon: "💬",
    title: "Live support",
    description: "We're here to help you get started.",
    value: "Start a conversation",
    href: "mailto:support@taskflow.ai",
    color: "bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400",
  },
  {
    icon: "🌍",
    title: "Our community",
    description: "Connect with other productivity lovers.",
    value: "Join our community",
    href: "#community",
    color: "bg-pink-100 text-pink-600 dark:bg-pink-500/10 dark:text-pink-400",
  },
];

const faqs = [
  {
    question: "What is TaskFlow AI?",
    answer:
      "TaskFlow AI is a productivity platform that helps you organize tasks, build habits, track progress, and plan your goals.",
  },
  {
    question: "Is TaskFlow AI free to use?",
    answer:
      "TaskFlow AI is designed to make productivity accessible. Check the available plans and features on our platform.",
  },
  {
    question: "Can I track my daily habits?",
    answer:
      "Yes! You can create daily habits, track your consistency, and monitor your progress over time.",
  },
  {
    question: "How can I get technical support?",
    answer:
      "You can contact our support team using the contact form or email address listed above.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect this form to your backend or email service later.
    console.log("Contact form data:", formData);

    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="overflow-hidden bg-white text-gray-900 dark:bg-gray-950 dark:text-white transition-colors duration-300">

      {/* HERO SECTION */}
      <section className="relative px-6 py-24 sm:py-28">
        <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl dark:bg-violet-600/10" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl dark:bg-pink-600/10" />

        <div className="relative mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-300">
            <span>✦</span> We'd love to hear from you
          </span>

          <h1 className="mt-7 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Let's make something
            <span className="block bg-gradient-to-r from-violet-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              amazing together.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
            Have a question, an idea, or just want to say hello?
            We're always happy to connect with people who love making
            every day count.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#contact-form"
              className="rounded-xl bg-violet-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-violet-600/20 transition duration-300 hover:-translate-y-1 hover:bg-violet-700"
            >
              Send us a message →
            </a>

            <a
              href="mailto:hello@taskflow.ai"
              className="rounded-xl border border-gray-200 px-7 py-3.5 font-semibold text-gray-700 transition duration-300 hover:border-violet-400 hover:text-violet-600 dark:border-gray-800 dark:text-gray-300 dark:hover:text-violet-400"
            >
              Email us
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {contactDetails.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/5 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-violet-500/40"
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${item.color}`}>
                {item.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

              <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                {item.description}
              </p>

              <p className="mt-5 font-semibold text-violet-600 transition group-hover:text-violet-700 dark:text-violet-400">
                {item.value} →
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section id="contact-form" className="px-6 py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
              Get in touch
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Every great idea starts with a
              <span className="text-violet-600 dark:text-violet-400">
                {" "}conversation.
              </span>
            </h2>

            <p className="mt-5 max-w-lg leading-8 text-gray-600 dark:text-gray-400">
              Whether you need help, have feedback, or want to share an
              exciting idea, drop us a message. Fill out the form and
              we'll be happy to hear from you.
            </p>

            <div className="mt-10 rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 p-7 dark:border-gray-800 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
              <div className="flex items-center gap-4">
                <img
                  src="/images/mascots/star-holding-boy.png"
                  alt="TaskFlow mascot"
                  className="h-24 w-24 object-contain"
                />

                <div>
                  <h3 className="text-lg font-bold">
                    We're listening! ✨
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    Your thoughts help us make TaskFlow AI better every day.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-400">
                ✓
              </span>
              We appreciate every message and suggestion.
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl shadow-gray-200/40 dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/20 sm:p-9">
            <h3 className="text-2xl font-bold">Send us a message</h3>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Fill in the details below and let us know how we can help.
            </p>

            {submitted && (
              <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700 dark:border-green-500/20 dark:bg-green-500/10 dark:text-green-400">
                Thank you! Your message has been submitted in this demo.
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder-gray-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder-gray-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option value="General question">General question</option>
                  <option value="Technical support">Technical support</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Your message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us what's on your mind..."
                  required
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder-gray-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-4 font-bold text-white shadow-lg shadow-violet-600/20 transition duration-300 hover:-translate-y-1 hover:from-violet-700 hover:to-purple-700"
              >
                Send Message →
              </button>

              <p className="text-center text-xs text-gray-400">
                Your information is only used to respond to your message.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-gray-50 px-6 py-20 dark:bg-gray-900/50">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
              Need some help?
            </span>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Frequently asked questions
            </h2>

            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Here are a few answers to help you get started.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-violet-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-violet-500/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
                  {faq.question}

                  <span className="text-xl text-violet-600 transition duration-300 group-open:rotate-45 dark:text-violet-400">
                    +
                  </span>
                </summary>

                <p className="mt-4 pr-8 text-sm leading-7 text-gray-500 dark:text-gray-400">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-24">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500 px-7 py-16 text-center text-white shadow-2xl shadow-violet-500/20 sm:px-14">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute -bottom-28 -right-16 h-80 w-80 rounded-full border border-white/10" />

          <div className="relative">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Let's build better habits together.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-white/80">
              Your next productive chapter starts with one small step.
              Let's make it count!
            </p>

            <Link
              to="/signup"
              className="mt-8 inline-flex rounded-xl bg-white px-8 py-4 font-bold text-violet-700 transition duration-300 hover:-translate-y-1 hover:bg-violet-50"
            >
              Get Started Today →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
