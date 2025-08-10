import React from "react";

const About = () => {
  const features = [
    {
      title: "Full CRUD Functionality",
      desc: "Add, edit, update, and delete service listings with ease using our intuitive interface.",
    },
    {
      title: "User Authentication",
      desc: "Secure sign-up and login system powered by Firebase for safe user access.",
    },
    {
      title: "Search & Filter",
      desc: "Find exactly what you need with powerful search and advanced filtering options.",
    },
    {
      title: "Responsive Design",
      desc: "Seamlessly usable on desktops, tablets, and mobile devices of all sizes.",
    },
    {
      title: "Dynamic UI",
      desc: "Enjoy an interactive, modern interface designed for smooth user experience.",
    },
    {
      title: "Review System",
      desc: "Leave and read service reviews to ensure quality and trust in every transaction.",
    },
  ];

  return (
    <section className="bg-white dark:bg-[#121721] min-h-screen text-[#242B3A] dark:text-white py-16 transition-colors duration-300">
      <div className="max-w-9/12 max-lg:max-w-10/12 max-md:w-11/12 mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-6">
          About <span className="text-[#FF008A]">ServView</span>
        </h1>
        <p className="text-center text-[#656B76] dark:text-gray-300 max-w-3xl mx-auto mb-12">
          ServView is a feature-rich service listing platform that connects
          providers and clients in one easy-to-use place. Whether you’re
          offering services or looking for them, ServView makes the process
          seamless, fast, and transparent.
        </p>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1C2230] border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-[#FF008A]">
                {feature.title}
              </h3>
              <p className="text-[#656B76] dark:text-gray-300">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
