import ProjectCard from "./ProjectCard"

const ProjectsList = ({projects}) => {
  return (
    <div className="pt-8 grid grid-cols-[repeat(auto-fit,_300px)] items-center justify-center gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.url} project={project} />
      ))}
    </div>
  );
}
export default ProjectsList