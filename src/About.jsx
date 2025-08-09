import React from "react";

const About = () => {
  const features = [
    {
      title: "Full CRUD Functionality",
      desc: "Add, edit, update, and delete service listings with ease using our intuitive interface."
    },
    {
      title: "User Authentication",
      desc: "Secure sign-up and login system powered by Firebase for safe user access."
    },
    {
      title: "Search & Filter",
      desc: "Find exactly what you need with powerful search and advanced filtering options."
    },
    {
      title: "Responsive Design",
      desc: "Seamlessly usable on desktops, tablets, and mobile devices of all sizes."
    },
    {
      title: "Dynamic UI",
      desc: "Enjoy an interactive, modern interface designed for smooth user experience."
    },
    {
      title: "Review System",
      desc: "Leave and read service reviews to ensure quality and trust in every transaction."
    }
  ];

  return (
    <section className="bg-white min-h-screen text-[#242B3A] py-16">
      <div className="max-w-9/12 max-lg:max-w-10/12 max-md:w-11/12 mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-6">
          About <span className="text-[#FF008A]">ServView</span>
        </h1>
        <p className="text-center text-[#656B76] max-w-3xl mx-auto mb-12">
          ServView is a feature-rich service listing platform that connects providers and clients in one easy-to-use place.
          Whether you’re offering services or looking for them, ServView makes the process seamless, fast, and transparent.
        </p>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3 text-[#FF008A]">
                {feature.title}
              </h3>
              <p className="text-[#656B76]">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="/contact"
            className="bg-[#FF008A] hover:bg-inherit border-2 border-[#FF008A] hover:text-[#242B3A] text-white px-8 py-3 rounded-full font-medium shadow-md hover:opacity-90 duration-150 ease-in"
          >
            Get in Touch
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;
