import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Home = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="home"
      className="text-white h-screen items-start pt-10 sm:pt-[6.5rem] grid sm:grid-cols-[300px_1fr] sm:gap-8"
    >
      <div data-aos="fade-right" className=" rounded-full overflow-hidden flex justify-center items-center pb-8 sm:pb-0">
        <img
          src="./profile.png"
          alt=""
          className="max-w-[200px] sm:max-w-[350px] h-[300px] sm:h-[350px] object-cover "
        />
      </div>
      <div data-aos="fade-left" className="grid text-center sm:text-start gap-4 px-8 md:pr-12 ">
        <div className="">
          <h1 className="text-[2rem] font-extrabold transition duration-300 dark:text-black">
            <span className="hover:text-[#842cd7] transition duration-200">J</span>
            <span className="hover:text-[#842cd7] transition duration-200">o</span>
            <span className="hover:text-[#842cd7] transition duration-200">s</span>
            <span className="hover:text-[#842cd7] transition duration-200">e</span>
            <span className="hover:text-[#842cd7] transition duration-200">p</span>
            <span className="hover:text-[#842cd7] transition duration-200">h</span>
            <span className="hover:text-[#842cd7] transition duration-200 pl-2">V</span>
            <span className="hover:text-[#842cd7] transition duration-200">á</span>
            <span className="hover:text-[#842cd7] transition duration-200">s</span>
            <span className="hover:text-[#842cd7] transition duration-200">q</span>
            <span className="hover:text-[#842cd7] transition duration-200">u</span>
            <span className="hover:text-[#842cd7] transition duration-200">e</span>
            <span className="hover:text-[#842cd7] transition duration-200">z</span>
          </h1>
          <h2 className="text-2xl pb-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#842cd7] to-[#21f5f1] pt-2">
            Full Stack Developer
          </h2>
        </div>
        <div className=" border-t-[1px] border-[#842cd7] w-[10rem] "></div>
        <p className="leading-[1.7rem] transition duration-300 dark:text-gray-900/90 text-gray-300 ">
          Desarrollo Web práctico y autodidacta, disciplinado, responsable,
          dedicado a cualquier labor a desempeñar, me adapto a cualquier entorno
          de trabajo, facilidad al momento del aprendizaje y buena manejabilidad
          del trabajo bajo presión.
        </p>
        <div className="relative">
        <div className="border-t-[1px] right-0 justify-end border-[#842cd7] absolute w-[10rem]"></div>
        </div>

        <div className="sm:flex sm:justify-start justify-center items-center pt-2">
          <div className="flex justify-center">
            <a href="#" className="btn-a">
              <div className="btn-all items-center py-[.5rem] px-[2.5rem]">Descargar CV</div>
            </a>
          </div>

          <div className="flex dark:text-black transition duration-300 justify-center gap-[1.5rem] sm:gap-8 sm:pl-8 items-center pt-[3rem] sm:pt-0">
            <a className="hover:text-[#842cd7] transition-colors " target="_blanck" href="https://github.com/Joxxxeph">
              <IconBrandGithub />
            </a>
            <a className="hover:text-[#842cd7] transition-colors" target="_blanck" href="https://www.linkedin.com/in/joseph-anthony-v%C3%A1squez-alvarez-841ab120a/?originalSubdomain=ve">
              <IconBrandLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home