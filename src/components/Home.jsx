import {
  IconBrandAngular,
  IconBrandCss3,
  IconBrandGithub,
  IconBrandJavascript,
  IconBrandLinkedin,
  IconBrandMysql,
  IconBrandNodejs,
  IconBrandPhp,
  IconBrandPython,
  IconBrandReact,
  IconBrandTailwind,
} from "@tabler/icons-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Swal from "sweetalert2";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleAlert = () => {
    Swal.fire({
      icon: "info",
      title: "Estamos trabajando en ello :D",
    });
  };

  return (
    <section
      id="home"
      className="relative text-white h-screen items-start pt-10 sm:pt-[6.5rem] grid sm:grid-cols-[300px_1fr] sm:gap-8"
    >
      <div
        data-aos="fade-right"
        className=" rounded-full overflow-hidden flex justify-center items-center sm:pb-0"
      >
        <img
          src="./profile.png"
          alt=""
          className="max-w-[200px] sm:max-w-[350px] h-[300px] sm:h-[350px] object-cover "
        />
      </div>
      <div
        data-aos="fade-left"
        className="grid text-center  sm:text-start gap-4 px-4 md:pr-12 "
      >
        <div className="">
          <h1 className="text-[2rem] font-extrabold transition duration-300 dark:text-black">
            <span className="hover:text-[#842cd7] transition duration-200">
              J
            </span>
            <span className="hover:text-[#842cd7] transition duration-200">
              o
            </span>
            <span className="hover:text-[#842cd7] transition duration-200">
              s
            </span>
            <span className="hover:text-[#842cd7] transition duration-200">
              e
            </span>
            <span className="hover:text-[#842cd7] transition duration-200">
              p
            </span>
            <span className="hover:text-[#842cd7] transition duration-200">
              h
            </span>
            <span className="hover:text-[#842cd7] transition duration-200 pl-2">
              V
            </span>
            <span className="hover:text-[#842cd7] transition duration-200">
              á
            </span>
            <span className="hover:text-[#842cd7] transition duration-200">
              s
            </span>
            <span className="hover:text-[#842cd7] transition duration-200">
              q
            </span>
            <span className="hover:text-[#842cd7] transition duration-200">
              u
            </span>
            <span className="hover:text-[#842cd7] transition duration-200">
              e
            </span>
            <span className="hover:text-[#842cd7] transition duration-200">
              z
            </span>
          </h1>
          <h2 className="text-2xl pb-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#842cd7] to-[#21f5f1] pt-2">
            Full Stack Developer
          </h2>
        </div>
        <div className=" border-t-[1px] border-[#842cd7] w-[10rem] "></div>
        <p className="leading-[1.7rem] transition duration-300 dark:text-gray-900/90 text-gray-300 ">
         Para ser un buen programador se requiere de 5% de talento y de 97% de dedicación, esfuerzo y sacrificio.
        </p>
        <p className="leading-[1.7rem] transition duration-300 dark:text-gray-900/90 text-gray-300 ">- Edsger Dijkstra.</p>
        <div className="relative">
          <div className="border-t-[1px] right-0 justify-end border-[#842cd7] absolute w-[10rem]"></div>
        </div>

        <div className="sm:flex sm:justify-start justify-center items-center pt-2">
          <div className="flex justify-center">
            <a href="#" className="btn-a" onClick={handleAlert}>
              <div className="duration-500 gap-x-[2px] gap-y-[2px] dark:text-black dark:bg-[#bde5f8] dark:hover:bg-[rgba(248,248,248,0.9)] hover:bg-[#0d0f10cc] bg-[#0d0f10] rounded-[8px] [transition:background-color_.3s] flex justify-centeritems-center py-[.5rem] px-[2.5rem]">
                Descargar CV
              </div>
            </a>
          </div>

          <div className="flex dark:text-black transition duration-300 justify-center gap-[1.5rem] sm:gap-8 sm:pl-8 items-center pt-[3rem] sm:pt-0">
            <a
              className="hover:text-[#842cd7] transition-colors "
              target="_blanck"
              href="https://github.com/Joxxxeph"
            >
              <IconBrandGithub />
            </a>
            <a
              className="hover:text-[#842cd7] transition-colors"
              target="_blanck"
              href="https://www.linkedin.com/in/joseph-anthony-v%C3%A1squez-alvarez-841ab120a/?originalSubdomain=ve"
            >
              <IconBrandLinkedin />
            </a>
          </div>
        </div>
      </div>
      <IconBrandJavascript
        className="text-gray-500/20 dark:text-gray-500/50 transition duration-300 absolute translate-x-[1rem] translate-y-[5rem] -rotate-[15deg]"
        size={35}
      />
      <IconBrandReact
        className="text-gray-500/20 dark:text-gray-500/50 transition duration-300 hidden md:flex absolute translate-x-[42rem] translate-y-[11rem] rotate-[10deg]"
        size={40}
      />
      <IconBrandCss3
        className="text-gray-500/20 dark:text-gray-500/50 transition duration-300 absolute translate-x-[13rem] translate-y-[28rem] -rotate-[20deg]"
        size={32}
      />
      <IconBrandNodejs
        className="text-gray-500/20 dark:text-gray-500/50 transition duration-300 hidden sm:flex absolute translate-x-[35rem] -translate-y-[3rem] rotate-[10deg]"
        size={50}
      />
      <IconBrandGithub
        className="text-gray-500/20 dark:text-gray-500/50 transition duration-300 absolute hidden sm:flex translate-x-[36rem] translate-y-[34rem] rotate-[12deg]"
        size={45}
      />
      <IconBrandPython
        className="text-gray-500/20 dark:text-gray-500/50 transition duration-300 absolute translate-x-[17rem] translate-y-[9rem] -rotate-[9deg]"
        size={48}
      />
      <IconBrandTailwind
        className="text-gray-500/20 dark:text-gray-500/50 transition duration-300 hidden md:flex absolute translate-x-[47rem] translate-y-[25rem] rotate-[9deg]"
        size={36}
      />
      <IconBrandAngular
        className="text-gray-500/20 dark:text-gray-500/50 transition duration-300 hidden lg:flex absolute translate-x-[58rem] translate-y-[1rem] rotate-[9deg]"
        size={32}
      />
      <IconBrandPhp
        className="text-gray-500/20 hidden dark:text-gray-500/50 transition duration-300 lg:flex absolute translate-x-[61rem] translate-y-[30rem] rotate-[12deg]"
        size={38}
      />
      <IconBrandMysql
        className="text-gray-500/20 dark:text-gray-500/50 transition duration-300 absolute -translate-x-[4rem] translate-y-[32rem] -rotate-[10deg]"
        size={48}
      />
    </section>
  );
};
export default Home;
