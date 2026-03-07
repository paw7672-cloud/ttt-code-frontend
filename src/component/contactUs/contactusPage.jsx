import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import fbImg from "../../assets/facebook.jpeg";
import twImg from "../../assets/twitter.jpeg";
import ytImg from "../../assets/youtube.jpeg";
import igImg from "../../assets/instagram.jpeg";
import lnImg from "../../assets/linkedin.jpeg";

const ContactUs = () => {
  const socials = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      img: fbImg,
      color: "text-blue-600",
      link: "https://www.facebook.com/TheTrueTopper",
    },
    {
      name: "Twitter",
      icon: <FaXTwitter />,
      img: twImg,
      color: "text-black",
      link: "https://x.com/TheTrueTopper",
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      img: ytImg,
      color: "text-red-600",
      link: "https://www.youtube.com/channel/UCuhOvW3kyngZhp8J3q54QHA",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      img: igImg,
      color: "text-pink-600",
      link: "https://www.instagram.com/thetruetopper",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      img: lnImg,
      color: "text-blue-700",
      link: "https://www.linkedin.com/company/thetruetopper/",
    },
  ];

  return (
    <div className="relative bg-white py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Contact Card */}
        <div className="bg-gray-50 rounded-2xl p-6 md:p-10 shadow-lg">

          {/* Title */}
          <h3 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-10">
            Get in Contact With Us
          </h3>

          {/* Phone + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">

            {/* Phone */}
            <div className="flex items-center gap-4 bg-white p-5 md:p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="bg-blue-500 text-white p-3 md:p-4 rounded-full text-lg md:text-xl">
                <FaPhoneAlt />
              </div>

              <div>
                <h4 className="font-semibold text-lg">Phone Number</h4>
                <p className="text-gray-600 text-sm md:text-base">
                  +91 XXXXX XXXXX
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 bg-white p-5 md:p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="bg-pink-500 text-white p-3 md:p-4 rounded-full text-lg md:text-xl">
                <FaEnvelope />
              </div>

              <div>
                <h4 className="font-semibold text-lg">Mail ID</h4>
                <p className="text-gray-600 text-sm md:text-base">
                  info@thetruetopper.com
                </p>
              </div>
            </div>
          </div>

          {/* Social Heading */}
          <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mt-16 mb-10">
            Social Media
          </h2>

          {/* Social Media Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

            {socials.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="bg-white border rounded-xl shadow-md overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col">

                  {/* Icon + Name */}
                  <div
                    className={`flex items-center gap-3 p-4 font-semibold text-lg ${item.color}`}
                  >
                    <span className="text-xl group-hover:scale-110 transition">
                      {item.icon}
                    </span>
                    {item.name}
                  </div>

                  {/* Image */}
                  <div className="w-full h-44 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>

                </div>
              </a>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;