import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => { alert("Message sent!"); }, (error) => { alert("Error!"); });
    e.target.reset();
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="grid gap-6">
          <input className="p-4 bg-gray-800 rounded" placeholder="Name" name="user_name" required />
          <input className="p-4 bg-gray-800 rounded" placeholder="Email" name="user_email" required />
          <textarea rows="5" className="p-4 bg-gray-800 rounded" placeholder="Message" name="message" required />
          <button className="bg-indigo-600 py-3 rounded hover:bg-indigo-700">Send Message</button>
        </form>
      </div>
    </section>
  );
}
