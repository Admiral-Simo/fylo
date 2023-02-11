import React from "react";

const Footer = () => {
  return (
    <footer className="bg-darkBlue2 font-opensans relative">
      <NewsLetter />
      <div className="pt-72 container mx-auto flex flex-col px-5 md:flex-row justify-between pb-28">
        <Contacts />
        <div className="md:space-x-8 flex flex-col md:flex-row">
          <Route1 />
          <Route2 />
        </div>
        <Socials />
      </div>
    </footer>
  );
};

const NewsLetter = () => {
  return (
    <div className="px-5 md:px-20 font-opensans text-center py-10 space-y-6 mx-6 md:mx-48 rounded-xl bg-darkBlue1 absolute -top-36 left-0 right-0">
      <h1 className="font-bold text-2xl">Get early acess today</h1>
      <p className="text-sm">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <div className="flex flex-col md:flex-row gap-7 md:gap-3">
        <input
          type="text"
          placeholder="email@example.com"
          className="py-3 px-10 focus:outline-none text-black flex-1 rounded-lg"
        />
        <button className="btn bg-cyan-500 rounded-lg px-10 transition duration-500 hover:opacity-70">
          Get Started For Free
        </button>
      </div>
    </div>
  );
};

const Contacts = () => {
  return (
    <div className="space-y-6 mb-20 md:mb-0">
      <div className="flex flex-row items-center">
        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17 12.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H1C.4 0 0 .4 0 1c0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM16 9h2c0-5-4-9-9-9v2c3.9 0 7 3.1 7 7zm-4 0h2c0-2.8-2.2-5-5-5v2c1.7 0 3 1.3 3 3z"
            fill="#FFF"
            fill-rule="evenodd"
          />
        </svg>
        <p className="ml-4">+1-543-123-4567</p>
      </div>
      <div className="flex flex-row items-center">
        <svg width="20" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path d="M-2-4h24v24H-2z" />
            <path
              d="M18 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 14h-2V5.2L10 9 4 5.2V14H2V2h1.2L10 6.2 16.8 2H18v12z"
              fill="#FFF"
            />
          </g>
        </svg>
        <p className="ml-4">example@fylo.com</p>
      </div>
    </div>
  );
};

const Route1 = () => {
  return (
    <div className="space-y-3 flex flex-col text-xl">
      <a href="#">About</a>
      <a href="#">Jobs</a>
      <a href="#">Press</a>
      <a href="#">Blog</a>
    </div>
  );
};

const Route2 = () => {
  return (
    <div className="space-y-3 mt-10 md:mt-0 flex flex-col text-xl">
      <a href="#">Contact Us</a>
      <a href="#">Terms</a>
      <a href="#">Privacy</a>
    </div>
  );
};

const Socials = () => {
  return (
    <div className="flex space-x-3 items-center mt-24 self-center md:self-start md:mt-0">
      <div className="p-2 rounded-full bg-darkBlue3 group hover:bg-green-500 transition duration-500 cursor-pointer">
        <svg
          className="text-white group-hover:text-green-300"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="0.5"
          stroke="#ffffff"
          fill="#ffffff"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
        </svg>
      </div>
      <div className="p-2 rounded-full bg-darkBlue3 group hover:bg-green-500 transition duration-500 cursor-pointer">
        <svg
          className="text-white group-hover:text-green-300"
          xmlns="http://www.w3.org/2000/svg"
          class=""
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="0.5"
          stroke="#ffffff"
          fill="#ffffff"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
        </svg>
      </div>
      <div className="p-2 rounded-full bg-darkBlue3 group hover:bg-green-500 transition duration-500 cursor-pointer">
        <svg
          className="text-white group-hover:text-green-300"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ffffff"
          fill="transparent"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3" />
          <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
        </svg>
      </div>
    </div>
  );
};

export default Footer;
