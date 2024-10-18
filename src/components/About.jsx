import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#02302D] text-#D37A0E">
      <div name="about" className="w-full bg-[#059F9B] text-white">
        <div className="max-w-[1500px] w-full grid sm:grid-cols-2 gap-20 px-40">
          <div className="sm:text-right pb-8">
            <p className="text-4xl font-bold inline border-b-4 text-[#DF90AD] border-slate-900">
              Acerca de mí ...
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-4xl font-bold">
            <p className="font-mono text-[#02302D]">
              En este momento me encuentro cursando el octavo semestre de Ingeniería Informática en la Corporación Universitaria Autónoma de Nariño, en Pasto, Colombia.
              En mi labor como estudiante, he trabajado en el desarrollo de sitios web dinámicos utilizando React, Next.js, JavaScript, Tailwind CSS, Astro, Vite, Node.js, Github, Html, CSS y Vercel.
              <br />
              <br />
            </p>
            <h1> A continuación, presentaré algunos de mis proyectos</h1>
          </div>
        </div>
        );
      </div>
    </div>
  );
};

        export default About;
