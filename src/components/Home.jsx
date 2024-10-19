import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import foto from "../assets/proyectos/foto.png"

const Home = () => {
  return (

    // <div name="home" className="w-full h-screen bg-[#02302D] text-white flex flex-col items-center justify-center lg:flex-row">
    <div name="home" className="w-full h-[1500px] md:h-[1000px] bg-[#02302D] text-white flex flex-col items-center justify-center lg:flex-row">
      {/* Container 400  */}
      <div className="w-[300px] md:w-[700px] flex flex-col justify-center items-center lg:ml-20 lg:-mt-40 mb-8 lg:mb-0 pt-80 md:pt-3">
        <img
          src={foto}
          alt="Foto presentación portafolio"
          className="w-[300px] md:w-[400px] lg:w-[400px] h-auto rounded-full border-4 border-[#D96A9E] hover:border-[#059F9B] transition duration-300"
        />
      </div>


      <div className="max-w-[1000px] mr-20 ml-auto flex flex-col justify-center h-full lg:-mt-40">
        <p className="text-stone-90 sm:text-5xl font-bold text-4xl text-[#DF90AD]">Hola!..,</p>
        <h1 className="text-2xl sm:text-5xl font-bold text-[#D96A9E]">Soy Mariana Arredondo</h1>
        <h2 className="text-2xl sm:text-5xl font-bold">
          Me encuentro en constante aprendízaje sobre desarrollo web.
        </h2>
        <p>2020-2024</p>
        <p className="py-4 max-w[700px] font-serif text-[#D37A0E]">
          Actualmente, me encuentro terminando mi posgrado en Ingeniería Informática.
          En el proceso he tenido la oportunidad de adquirir diferentes nociones sobre creación y desarrollo de sitios web dinámicos
          utilizando diversas tecnologías y herramientas de programación. En las cuales se destacan: React, Next.js, JavaScript, Tailwind CSS, Astro, Vite, Node.js, Github, Html, CSS y Vercel.
        </p>
        <div className="flex justify-center lg:justify-end">
          <Link to="works" smooth={true} duration={500}>
            <button className="text-white group border-4 px-6 py-3 my-2 flex items-center hover:bg-[#059F9B] hover:border-[#D96A9E]">
              Ver Proyectos
              {/* icono arrow realice una rotación */}
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>


      </div>
    </div>
  );
};


export default Home;
