import React from "react";

const Contact = () => {
  return (
    <div className="container flex flex-col gap-4" id="contact">
      <div className="flex flex-col gap-1 mb-4">
        <h2 className="heading">Contact Us</h2>
        <h3 className="sub-heading">
          Reach out to us for more information on our exquisite hampers.
        </h3>
      </div>
      <div className="flex flex-col md:flex-row gap-12 text-sm">
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-gray-500">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-400 p-2 placeholder-gray-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-gray-500">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-400 p-2 placeholder-gray-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="text-gray-500">
              Phone number
            </label>
            <input
              type="text"
              placeholder="Phone number"
              className="border border-gray-400 p-2 placeholder-gray-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-gray-500">
              Message
            </label>
            <textarea
              placeholder="Your message"
              className="border border-gray-400 p-2 placeholder-gray-400 h-[200px] resize-none"
            ></textarea>
          </div>

          <button className="btn border hover:border-[var(--primary)] hover:text-[var(--primary)] bg-[var(--primary)] hover:bg-white text-white transition-all cursor-pointer">
            Send
          </button>
        </div>

        <div className="w-full">
          <div className="w-full flex flex-col gap-1 text-sm border-b border-gray-100 pb-6">
            <h4 className="uppercase mb-4 ">Customer Care & Wholesale</h4>
            <p className="text-gray-600">Mon - Fri: 9am - 5pm AEST</p>
            <p className="text-gray-600 hover:text-black transition-all cursor-pointer">
              info@basketsbliss.com
            </p>
          </div>

          <div className="w-full flex flex-col gap-1 text-sm border-b border-gray-100 pt-6 pb-6">
            <h4 className="uppercase mb-4 ">Partnerships</h4>
            <p className="text-gray-600 hover:text-black transition-all cursor-pointer">
              partnerships@basketsbliss.com
            </p>
          </div>

          <div className="w-full flex flex-col gap-1 text-sm border-b border-gray-100 pt-6 pb-6">
            <h4 className="uppercase mb-4 ">Online returns</h4>
            <p className="text-gray-600">
              Please email us to organise your refund. All requests must be made
              within 14 days of purchase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
