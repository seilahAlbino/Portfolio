import React from "react";
import Projects from "../../Data/Projects";
import ProjectCard from "../Cards/ProjectCard";

const ProjectsSection = () => (
    <section className="p-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary projectsTitle">Projetos</h2>
        <div className="flex flex-wrap gap-8 justify-center">
            {Projects.map((project) => (
                <ProjectCard
                    key={project.name}
                    name={project.name}
                    image={project.image}
                    projectType={project.projectType}
                    description={project.description}
                    github={project.github}
                    website={project.website}
                />
            ))}
        </div>
    </section>
);

export default ProjectsSection;
