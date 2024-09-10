import React from "react";
import ProjectType from "../../Models/Project/ProjectType";

interface ProjectCardProps {
    name: string,
    image: string,
    projectType: ProjectType,
    description?: string,
    github?: string,
    website?: string,
}


function ProjectCard({ name, image, projectType, description, github, website }: ProjectCardProps) {
    return <div className="max-w-xl rounded-lg overflow-hidden mb-5">
        <span className="uppercase text-gray-400">{projectType}</span>
        <div className="relative">
            <a href={website ?? "#"} target={website ? "_blank" : ""} className={website ? "" : "pointer-events-none"} rel="noopener noreferrer">
                <img
                    src={`/projects/${image}`}
                    alt={name}
                    className="w-full h-96 object-cover"
                />
            </a>
            {github && (
                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 text-primary opacity-100 duration-300 ease-in-out hover:opacity-80"
                >
                    <i className="bi bi-github text-3xl"></i>
                </a>
            )}
        </div>
        <div className="py-6">
            <h3 className="text-2xl font-semibold mb-4">
                {name}
            </h3>
            <p className="text-base mb-4" dangerouslySetInnerHTML={{ __html: description || "" }}/>
            {website && (
                <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-bold hover:underline"
                >
                    Website
                </a>
            )}
        </div>
    </div>
}

export default ProjectCard;