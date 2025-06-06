import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function ResumeWebsite() {
  const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer border-b border-gray-700 py-4"
      >
        <h3 className="text-xl font-medium flex justify-between items-center">
          {question}
          <span>{isOpen ? "−" : "+"}</span>
        </h3>
        {isOpen && <p className="mt-2 text-gray-300">{answer}</p>}
      </div>
    );
  };
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <div className="bg-black text-white min-h-screen font-sans scroll-smooth">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md p-4 flex items-center justify-between text-sm">
        {/* Left placeholder (can be empty or used for something else) */}
        <div className="w-1/3">PYJTuition</div>

        {/* Center logo */}
        <div className="w-1/3 flex justify-center">
          <img
            src="/logo/pyj.png" // change path as needed
            alt="PYJTuition Logo"
            className="h-8 md:h-10 object-contain"
          />
        </div>

        {/* Right nav */}
        <nav className="w-1/3 flex justify-end space-x-4">
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#experience" className="hover:text-gray-400">
            Testimonials
          </a>
          <a href="#resource" className="hover:text-gray-400">
            Resources
          </a>
          <a href="#faq" className="hover:text-gray-400">
            FAQ
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf6K8KNlTXAPtp4Ax-_x8AToHITSPi1KLBung75Xlx6NNeGug/viewform?usp=header"
            className="hover:text-gray-400 font-bold text-red-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign Up Here!
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 md:px-20 gap-4 md:gap-8"
        id="home"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          transition={{ delay: 0.4, duration: 1 }}
          className="w-40 h-40 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-lg md:mr-6"
        >
          <img
            src="my photo.jpeg" // Make sure this path is correct
            alt="Gorden's portrait"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Hi, I'm Gorden
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-4 text-xl md:text-2xl text-gray-400"
          >
            Mathematics, Biology, Chemistry Tutor
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ delay: 1, duration: 1 }}
            className="mt-4 text-xl md:text-2xl text-gray-400"
          >
            Specialising in O/A-Level and IB levels.
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section
        className="py-32 px-6 md:px-32 bg-zinc-900 text-white"
        id="about"
      >
        <h2 className="text-4xl font-semibold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          I’ve been tutoring for over 7 years, specializing in Biology,
          Chemistry, and Math at the O-Level, A-Level, and IB levels. My
          approach focuses on building strong conceptual understanding and exam
          readiness through clear explanations, targeted practice, and
          personalized guidance. Many of my students have improved not just in
          their grades, but also in their confidence and ability to tackle
          challenging questions. Whether you’re aiming to catch up, solidify
          foundations, or push for distinction, I’m here to help you achieve
          your academic goals.
        </p>

        <p className="text-lg leading-relaxed text-gray-300 py-10">
          I offer classes through a flexible hybrid model designed to
          accommodate diverse learning preferences. Students can opt for live
          online instruction via Zoom, conducted in small group settings of at
          most five students per session for focused interaction. Alternatively,
          personalized one-on-one in-person classes are available at your
          residence for tailored support.
        </p>
      </section>

      {/* Testimonials Section */}
      <section
        className="py-32 px-6 md:px-32 bg-black text-white"
        id="experience"
      >
        <h2 className="text-4xl font-semibold mb-12">Student Testimonials</h2>
        <div className="overflow-x-auto">
          <div className="flex gap-6 w-max">
            {/* Example testimonial image */}
            <div className="min-w-[300px] h-[350px] border border-gray-700 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="/testimonials/testi1.jpg"
                alt="testimonial 1"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="min-w-[300px] h-[350px] border border-gray-700 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="/testimonials/testi2.jpg"
                alt="testimonial 2"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="min-w-[300px] h-[350px] border border-gray-700 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="/testimonials/testi3.jpg"
                alt="testimonial 3"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="min-w-[300px] h-[350px] border border-gray-700 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="/testimonials/testi4.jpg"
                alt="testimonial 4"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="min-w-[300px] h-auto border border-gray-700 rounded-lg overflow-hidden">
              <img
                src="/testimonials/testimonial5.jpg"
                alt="Testimonial 5"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="min-w-[300px] h-auto border border-gray-700 rounded-lg overflow-hidden">
              <img
                src="/testimonials/testimonial6.jpg"
                alt="Testimonial 6"
                className="w-full h-auto object-contain"
              />
            </div>
            {/* Add more images as needed */}
          </div>
        </div>
      </section>

      {/* Resource Library Section */}
      <section
        className="py-32 px-6 md:px-32 bg-zinc-900 text-white"
        id="resource"
      >
        <h2 className="text-4xl font-semibold mb-12">Resource Library</h2>
        <p className="text-lg leading-relaxed text-gray-300 py-10">
          To support student success, I've established a robust academic
          resource platform, including a Google Drive and a Telegram channel.
          The Google Drive serves as a central repository for essential learning
          materials, such as detailed class notes, practice homework with
          solutions, and a curated archive of past year papers with
          comprehensive solutions. Complementing this, the exclusive Telegram
          channel actively addresses student needs by sharing insights on
          commonly encountered questions and common errors, thereby proactively
          guiding students to avoid pitfalls and deepen their understanding.
        </p>

        <p className="text-lg leading-relaxed text-gray-300 py-5">
          To ensure all students feel comfortable participating, our Zoom
          classes incorporate an interactive Poll Everywhere platform, enabling
          all students to anonymously submit questions throughout the session
          without hesitation.
        </p>
        <div className="overflow-x-auto">
          <div className="flex gap-6 w-max">
            {/* Example testimonial image */}
            <div className="min-w-[300px] h-[350px] border border-gray-700 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="/resource/resource1.png"
                alt="resource 1"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="min-w-[100px] h-[350px] border border-gray-700 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="/resource/resource2.png"
                alt="resource 2"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="min-w-[100px] h-[350px] border border-gray-700 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="/resource/resource3.png"
                alt="resource 3"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="min-w-[100px] h-[350px] border border-gray-700 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="/resource/resource4.png"
                alt="resource 4"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="min-w-[100px] h-[350px] border border-gray-700 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="/resource/resource5.png"
                alt="resource 5"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="min-w-[300px] h-auto border border-gray-700 rounded-lg overflow-hidden">
              <img
                src="/resource/resource6.jpg"
                alt="resource 6"
                className="w-full h-auto object-contain"
              />
            </div>
            {/* Add more images as needed */}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 md:px-32 bg-black text-white" id="faq">
        <h2 className="text-4xl font-semibold mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            {
              question: "When will I be billed?",
              answer: "You will be billed at the end of every calendar month.",
            },
            {
              question: "How would payment be made?",
              answer:
                "Payment is through PayNow, PayLah, Cash, or direct bank transfer.",
            },
            {
              question: "Do you provide free trial classes?",
              answer:
                "No. All classes are chargeable. However, students may choose to discontinue after the first lesson if they find it unsuitable.",
            },
            {
              question: "What subjects do you offer?",
              answer:
                "I specialize in Mathematics, Biology, and Chemistry at the O-Level, A-Level, and IB levels.",
            },
            {
              question: "How are online classes conducted?",
              answer:
                "Online lessons are conducted via Zoom in small groups (up to 5 students) with interactive tools like Poll Everywhere to encourage participation.",
            },
            {
              question: "What is the class size for Group Zoom classes?",
              answer:
                "Group classes are capped at 5 students to ensure personalised attention and meaningful interaction.",
            },
            {
              question: "What is your cancellation or rescheduling policy?",
              answer:
                "Please inform me at least 24 hours in advance for any rescheduling. Make-up classes will be arranged where possible.",
            },
            {
              question: "Do you provide notes or resources?",
              answer:
                "Yes! Students get access to a resource library on Google Drive and curated updates via Telegram, including notes, homework, and past-year solutions.",
            },
            {
              question: "Do you offer 1-on-1 tuition?",
              answer:
                "Yes, I offer personalised one-on-one classes both online and in-person for students who prefer tailored support.",
            },
            {
              question: "How do I sign up?",
              answer:
                "You can sign up using the form linked on the website or contact me directly via WhatsApp or Telegram for a quick consultation.",
            },
          ].map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="py-32 px-6 md:px-32 bg-zinc-900 text-white"
        id="contact"
      >
        <h2 className="text-4xl font-semibold mb-6">Get in Touch</h2>
        <p className="text-lg mb-4 text-gray-400">
          I’m open for either physical or virtual classes!
        </p>

        {/* Phone number and WhatsApp icon */}
        <div className="flex items-center gap-3 mb-4">
          <p className="text-lg text-gray-400">+65 9146 6875</p>
          <a
            href="https://wa.me/6591466875"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/logo/whatsapp-icon.png"
              alt="Chat on WhatsApp"
              className="w-6 h-6 hover:opacity-80 transition-opacity"
            />
          </a>
          <a
            href="https://t.me/peewhyjay"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/logo/tele-icon.png"
              alt="Chat on Telegram"
              className="w-7 h-7 hover:opacity-80 transition-opacity"
            />
          </a>
        </div>

        <a
          href="mailto:gordenpey@gmail.com"
          className="text-blue-400 text-xl underline hover:text-blue-600"
        >
          gordenpey@gmail.com
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 text-sm bg-zinc-900">
        © {new Date().getFullYear()} PYJTuition. All rights reserved.
      </footer>
    </div>
  );
}
