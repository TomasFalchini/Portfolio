import React from "react";

function ContactForm() {
  return (
    <section className="h-screen w-full">
      <div className="flex justify-center">
        <div
          id="drawer-contact"
          className=" z-40 mt-20 px-0  md:px-16 py-4 self-center min-w-fit max-w-max bg-gradient-to-r from-slate-800/50 to-slate-600/25 flex justify-center flex-col items-center rounded"
          tabIndex={-1}
          aria-labelledby="drawer-contact-label"
        >
          <h5
            id="drawer-label"
            className="inline-flex items-center mb-6 text-base font-semibold text-gray-50 uppercase "
          >
            <svg
              className="w-5 h-5 mr-2"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Contact me
          </h5>
          <form action="#" className=" w-96 max-w-screen px-2 mb-6">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-50 "
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-slate-900/90 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                placeholder="name@company.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-50 "
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="bg-slate-900/90 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-50 "
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-slate-900/90 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="mb-16 text-white bg-pink-600 hover:bg-pink-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
