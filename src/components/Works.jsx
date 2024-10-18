import React from "react";

import portafolio from "../assets/proyectos/portafolio.jpeg"
import Tienda from "../assets/proyectos/tienda.jpeg"
import demoapi from "../assets/proyectos/demoapi.jpeg"
import apicrud from "../assets/proyectos/apicrud.jpeg";
import maquillajeonline from "../assets/proyectos/maquillajeonline.jpeg"
import apichatgpt from "../assets/proyectos/apichatgpt.jpeg"
import appheroes from "../assets/proyectos/appheroes.jpeg"

const Works = () => {
  const proyectos = [
    {
      id: 1,
      src: portafolio,
      demo: "https://diegovistoso.netlify.app/",
      code: "https://github.com/marianaaa05/repositorioViteMariana",
      texto: "Portafolio",
    },
    {
      id: 2,
      src: Tienda,
      demo: "https://tienda-ochre.vercel.app/",
      code: "https://github.com/marianaaa05/tienda",
      texto: "Comercio Electrónico",
    },
    {
      id: 3,
      src: demoapi,
      demo: "https://apimovie-theta.vercel.app/",
      code: "https://github.com/marianaaa05/apimovie",
      texto: "API Movie",
    },
    {
      id: 4,
      src: apicrud,
      demo: "https://api-crud-sigma.vercel.app/?vercelToolbarCode=PpMoXhk5WYq_5uf",
      code: "https://github.com/marianaaa05/API_CRUD",
      texto: "API CRUD",
    },
    {
      id: 5,
      src: maquillajeonline,
      demo: "https://maquillaje-online-avc7.vercel.app/",
      code: "https://github.com/marianaaa05/MaquillajeOnline",
      texto: "Tienda de Maquillaje Online",
    },
    {
      id: 6,
      src: apichatgpt,
      demo: "https://chat-gpt-theta.vercel.app/",
      code: "https://github.com/marianaaa05/Chat-gpt",
      texto: "Api de Chat GPT",
    },
    {
      id: 7,
      src: appheroes,
      demo: "https://app-de-heroes.vercel.app/marvel",
      code: "https://github.com/marianaaa05/App-de-heroes",
      texto: "App de Heroes",
    },
  ];

  return (
    <div name="works" className="w-full text-slate-900 bg-[#dfe0e2]">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-900 border-slate-900">
            Proyectos
          </p>
          <p className="py-6">Revisa algunos de mis proyectos</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-12 sm:px-0 ">
          {proyectos.map(({ id, src, demo, code, texto }) => (
            <div key={id} className="shadow-md shadow-[#0B594B] rounded-lg bg-[#059F9B]">
              <img
                src={src}
                alt="Imagenes de referencia"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="p-4 text-center">
                <p className="text-2xl font-bold">{texto}</p>
              </div>
              <div className="flex items-center justify-center">
                {demo && (
                  <a href={demo}>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg">
                      Ver
                    </button>
                  </a>
                )}
                <a href={code}>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg">
                   Encontrar en Github
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
