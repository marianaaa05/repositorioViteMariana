import React from "react";

const About = () => {
  return (
    // 
      // <div name="about" className="flex flex-col w-full bg-[#059F9B] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2px">
      //   <div className="max-w-[1500px] w-full grid sm:grid-cols-2 gap-20 px-40">
      <div name="works" className="w-full text-slate-900 bg-[#0B594B]">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="sm:text-right pb-8">
            <p className="text-4xl font-bold inline border-b-4 text-white border-[#DF90AD]">
              Acerca de mí ...
            </p>
          </div>
        <div className="flex flex-col justify-center">
          <div className="text-3xl font-bold sm:text-2xl">
            <p className="font-mono text-[#02302D] leading-relaxed">
              En este momento me encuentro cursando el octavo semestre de Ingeniería Informática en la Corporación Universitaria Autónoma de Nariño, en Pasto, Colombia.
              En mi labor como estudiante, he trabajado en el desarrollo de sitios web dinámicos utilizando React, Next.js, JavaScript, Tailwind CSS, Astro, Vite, Node.js, Github, Html, CSS y Vercel.
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

        export default About;
