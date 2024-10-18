import React from "react";
import HTML from "../assets/html5.svg";
import CSS from "../assets/css.svg";
import JS from "../assets/javascript.svg";
import TAILWINDCSS from "../assets/tailwindcss.svg";
import nextjs from "../assets/nextjs.svg";
import astro from "../assets/astro.svg";
import vercel from "../assets/vercel.svg";
import vite from "../assets/vite.svg";
import nodejs from "../assets/nodejs.svg";
import react from "../assets/react.svg";


const Skills = () => {
  return (
      <div name="skills" className="w-full bg-[#0B594B]">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-[#DF90AD]">
              Tecnologías
            </p>
            <p className="py-4">
              Estas son algunas tecnologías que he utilizado y que hasta el momento sigo aprendiendo:
            </p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8">
            <div className="shadow-md shadow-[#04c16] hover:scale-110 duration-500 border-4 border-[#DF90AD]">
              <img className="w-25 mx-auto " src={HTML} alt="HTML icon" />
              <p className="my-4 font-bold">HTML</p>
            </div>
            <div className="shadow-md shadow-[#04c16] hover:scale-110 duration-500 border-4 border-[#DF90AD]">
              <img className="w-25 mx-auto" src={CSS} alt="CSS icon" />
              <p className="my-4 font-bold">CSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 border-4 border-[#DF90AD]">
              <img className="w-25 mx-auto" src={react} alt="React icon" />
              <p className="my-4 font-bold">React</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 border-4 border-[#DF90AD]">
              <img className="w-25 mx-auto" src={JS} alt="JAVASCRIPT icon" />
              <p className="my-4 font-bold">JavaScript</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 border-4 border-[#DF90AD]">
              <img className="w-25 mx-auto" src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'} alt='GITHUB Icon'/>
              <p className="my-4 font-bold">Github</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 border-4 border-[#DF90AD]">
              <img className="w-25 mx-auto" src={nextjs} alt='Next.js Icon'/>
              <p className="my-4 font-bold">Next.js</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 border-4 border-[#DF90AD]">
              <img className="w-25 mx-auto" src={astro} alt='Astro Icon'/>
              <p className="my-4 font-bold">Astro</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 border-4 border-[#DF90AD]">
              <img className="w-25 mx-auto" src={vercel} alt='Vercel Icon'/>
              <p className="my-4 font-bold">Vercel</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 border-4 border-[#DF90AD]">
              <img className="w-40 mx-auto" src={vite} alt='Vite Icon'/>
              <p className="my-4 font-bold">Vite</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 border-4 border-[#DF90AD]">
              <img className="w-25 mx-auto" src={nodejs} alt='Node.js Icon'/>
              <p className="my-4 font-bold">Node.js</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 border-4 border-[#DF90AD]">
              <img className="w-25 mx-auto" src={TAILWINDCSS} alt="Tailwind CSS icon" />
              <p className="my-4 font-bold">Tailwind CSS</p>
            </div>
          </div>

        </div>
      </div>
  );
};

export default Skills;
