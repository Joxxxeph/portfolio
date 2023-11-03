import projects from "../db/projects.json"
import ProjectsList from "./ProjectsList"

const Projects = () => {
  return (
    <section className="sm:pt-[4rem] pt-[4rem] pb-[4rem] " id="projects">
      <h1 data-aos="fade-right"  className="text-[2rem] transition duration-300 dark:text-black  text-center text-white">Mis Proyectos.</h1>
      <p data-aos="fade-right"  className="py-[1rem] transition duration-300 dark:text-gray-900/90 text-gray-300 text-center text-[1.2rem] tracking-[.03rem]">Si lo puedes <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#842cd7] to-[#21f5f1]">Imaginar</span> los puedes <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#842cd7] to-[#21f5f1]">Programar.</span></p>
      
        <ProjectsList projects={projects}/>
      
    </section>
  )
}
export default Projects