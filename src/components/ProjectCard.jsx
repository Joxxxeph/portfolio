import { IconBrandGithub } from "@tabler/icons-react";

const ProjectCard = ({ project }) => {
  return (
    <a
      data-aos="fade-up"
      href={project.url}
      target="blank"
      className="content flex flex-col-reverse md:flex-none transition duration-300 relative shadow-xl w-[300px] rounded-xl overflow-hidden"
      >
      <article className="content-info justify-center gap-4 flex flex-col items-center px-2 dark:bg-gray-500/60 dark:text-black dark:md:bg-black/80 dark:md:text-white bg-black/80 text-white">
        <h4 className="text-[1.3rem] text-[#21f5f1]">{project.name}</h4>
        <p className="text-center">{project.description}</p>
        <h5>Tech Stack:</h5>
        <div className="flex gap-2">
          {project.stacks.map((stack) => (
            <img key={stack} src={stack} className="w-[45px]" alt="" />
          ))}
        </div>
        <div className="border-t border-[#21f5f1] w-[6rem]"></div>
        <div className="flex justify-end items-end w-full pb-2">
          <a href={project.urlGit} className="px-4 text-[#21f5f1] hover:text-white transition-colors" title="Ver repositorio">
            <IconBrandGithub size={23}/>
          </a>
        </div>
      </article>
      <img
        src={project.img}
        className="img-app bg-cover bg-center h-[200px] md:h-[300px] object-cover"
        alt=""
      />
    </a>
  );
}
export default ProjectCard