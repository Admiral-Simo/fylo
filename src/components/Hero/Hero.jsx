import React from "react";

function Hero() {
  return (
    <section id="hero" className="bg-darkBlue">
      <div className="container font-opensans text-center mx-auto md:mt-16 pb-10">
        <img
          src={require("../../images/illustration-intro.png")}
          className="z-10 mx-auto mb-10"
          alt=""
        />
        <h2 className="text-4xl mb-8 font-bold">
          All your files in one secure location,
          <br />
          accessible anywhere
        </h2>
        <p className="text-lg max-w-xl mx-auto mb-10">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button className="btn text-lg font-semibold">Get Started</button>
      </div>
    </section>
  );
}

export default Hero;
