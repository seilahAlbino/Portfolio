import React from "react";
import Technologies from "../../Data/Technologies";
import TechnologyCard from "../Cards/TechnologyCard";

function About() {
    return (
        <section className="p-8 px-12">
            <h2 className="text-4xl font-bold mb-12 text-center text-primary aboutTitle">Sobre</h2>
            <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
                <div className="lg:w-1/2 mb-6 lg:mb-0 aboutText">
                    <h3 className="text-2xl font-semibold mb-4">Mais sobre mim</h3>
                    <p className="text-md md:text-lg">
                        Atualmente, estou a estudar Engenharia Informática blablablablablab<br/>lablablablabla<br/>blablablablablabla<br/>blablablabla<br/>blablablablablablablabla
                    </p>
                </div>
                <div className="lg:w-1/2 tecnologias">
                    <h3 className="text-2xl font-semibold mb-4">Tecnologias</h3>
                    <ul className="flex flex-wrap gap-4 list-none">
                        {Technologies.map(tecnology =>
                            <li key={tecnology.name}>
                                <TechnologyCard
                                    name={tecnology.name}
                                    icon={tecnology.icon} />
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;
