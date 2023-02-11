import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-darkBlue">
      <div className="grid container pb-96 px-4 mx-auto gap-10 grid-cols-1 md:grid-cols-3 relative">
        <img className="absolute left-10 md:-left-3 -top-10 scale-150" src={require("../../images/bg-quotes.png")} alt="" />
        <div className="py-12 px-8 bg-darkBlue3 rounded-xl">
          <p className="text-xl font-opensans mb-8">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="flex space-x-3 items-center">
            <img className="w-12 h-12 rounded-full" src={require('../../images/profile-1.jpg')} alt="" />
            <div>
                <h4 className="font-bold ">Satish Patel</h4>
                <p>Founder & CEO. Huddle</p>
            </div>
          </div>
        </div>
        <div className="py-12 px-8 bg-darkBlue3 rounded-xl">
          <p className="text-xl font-opensans mb-8">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="flex space-x-3 items-center">
            <img className="w-12 h-12 rounded-full" src={require('../../images/profile-2.jpg')} alt="" />
            <div>
                <h4 className="font-bold ">Bruce McKenzie</h4>
                <p>Founder & CEO. Huddle 2</p>
            </div>
          </div>
        </div>
        <div className="py-12 px-8 bg-darkBlue3 rounded-xl">
          <p className="text-xl font-opensans mb-8">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="flex space-x-3 items-center">
            <img className="w-12 h-12 rounded-full" src={require('../../images/profile-3.jpg')} alt="" />
            <div>
                <h4 className="font-bold ">Eva Boyd</h4>
                <p>Founder & CEO. Huddle 3</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
