import React, { useState } from "react";
import { ReactTyped } from "react-typed";

function Introduction() {
  const [nameTyped, setNameTyped] = useState<boolean>(false);

  const typeSpeed = 80;

  return (
    <section id="introduction" className="flex items-center justify-center h-screen p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-7 gap-4">
        <div className="col-span-5 flex flex-col justify-center items-start">
          <div id="profile" className="space-y-4 uppercase mb-12 md:m-0">
            <h1 className="text-primary text-4xl md:text-5xl lg:text-7xl">
              <ReactTyped
                strings={["Joaquim Pereira"]}
                typeSpeed={typeSpeed}
                onComplete={(self) => {
                  self.cursor.remove();
                  setNameTyped(true);
                }}
              />
            </h1>
            <p className="text-xl md:text-2xl lg:text-4xl">
              {nameTyped &&
                <ReactTyped
                  strings={["Desenvolvedor Full-Stack"]}
                  typeSpeed={typeSpeed}
                />
              }
            </p>
            <div id="social-media">
              <a className="mx-2 text-md md:text-xl lg:text-2xl" href="https://github.com/seilahAlbino" target="_blank" rel="noreferrer">
                <i className="bi bi-github"></i>
              </a>
              <a className="mx-2 text-md md:text-xl lg:text-2xl" href="#linkedin" target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex flex-col justify-center items-start">
          <p className="text-md md:text-lg mt-10">
            Olá!<br />Seja bem vindo ao meu porfólio.<br /><br />Aqui poderá conhecer o meu trabalho e a minha participação em alguns projetos.<br /><br />Apresento abaixo mais algumas informações sobre mim.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Introduction;