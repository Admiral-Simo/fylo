import React from 'react'

const Productive = () => {
    return (
      <section id="productive" className="bg-darkBlue">
        <div className="container flex flex-col pb-44 md:items-center md:flex-row mx-auto py-10 px-5 space-y-12 md:space-y-0">
          <img
            src={require("../../images/illustration-stay-productive.png")}
            alt=""
          />
          <div className="space-y-5">
            <h1 className="text-3xl font-bold">
              Stay productive, wherever you are
            </h1>
            <p className="text-xl">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="text-xl">
              Securely share files and folders with friends, family and colleagues
              for live collaboration. No email attachments required.
            </p>
            <a
              href="#"
              className="mt-5 text-xl border-b text-cyan-400 block w-fit border-cyan-300"
            >
              See how Flyo works
            </a>
          </div>
        </div>
      </section>
    );
  };

export default Productive