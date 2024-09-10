import ProjectType from "./ProjectType";

interface Project {
    name: string,
    image: string,
    projectType: ProjectType,
    description?: string,
    github?: string,
    website?: string,
}

export default Project;