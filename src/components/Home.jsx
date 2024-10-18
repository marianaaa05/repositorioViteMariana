import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import foto from "../assets/proyectos/foto.png"

const Home = () => {
  return (
    
    <div name="home" className="w-full h-screen bg-[#02302D] text-white">
      {/* Container */}
      <img 
        src= {foto}
        alt="Foto presentación portafolio"
        className="w-[400px] h-[400px] ml-28 rounded-full"
      />
      
      <div className="max-w-[1000px] ml-auto px-8 flex flex-col justify-center h-full">
        <p className="text-stone-900 font-bold text-4xl text-[#DF90AD] sm:text-7xl">Hola!.., soy</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#D96A9E]">Mariana Arredondo</h1>
        <h2 className="text-4xl sm:text-7xl font-bold">
          Me encuentro en constante aprendízaje sobre desarrollo .
        </h2>
        <p>2020-2024</p>
        <p className="py-4 max-w[700px] font-serif text-[#D37A0E]">
          Actualmente, me encuentro terminando mi posgrado en Ingeniería Informática.
          En el proceso he tenido la oportunidad de adquirir diferentes nociones sobre creación y desarrollo de sitios web dinámicos
          utilizando diversas tecnologías y herramientas de programación. En las cuales se destacan: React, Next.js, JavaScript, Tailwind CSS, Astro, Vite, Node.js, Github, y Vercel.
        </p>
        <div>
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
