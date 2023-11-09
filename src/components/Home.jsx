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
      className="relative text-white h-screen items-start pt-10 sm:pt-0 grid sm:grid-cols-[400px_1fr] sm:gap-8"
    >
      <div
        data-aos="fade-right"
        className=" overflow-hidden flex sm:pt-[4rem] justify-center items-center"
      >
        <img
          src="./home-4.png"
          alt=""
          className="max-w-[200px] sm:max-w-[400px] h-[300px] sm:h-[400px] object-cover "
        />
      </div>
      <div
        data-aos="fade-left"
        className="grid text-center sm:pt-[6rem] sm:text-start gap-4 px-4 md:pr-[1.5rem] "
        >
        <div className="">
          <h1 className="text-[2.5rem] font-extrabold transition duration-300 dark:text-black">
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
          <h2 className="text-2xl pb-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#842cd7] to-[#21f5f1] pt-2">
            Full Stack Developer
          </h2>
        </div>
        <div className=" border-t-[1px] border-[#842cd7] w-[10rem] "></div>
        <p className="leading-[1.7rem] text-[1.1rem] transition duration-300 dark:text-gray-900/90 text-gray-300 ">
          Para ser un buen programador se requiere de 5% de talento y de 97% de
          dedicación, esfuerzo y sacrificio.
        </p>
        {/* <p className="leading-[1.7rem] transition duration-300 dark:text-gray-900/90 text-gray-300 ">
          La única forma de hacer un gran trabajo es amar lo que haces.
        </p> */}
        <p className="leading-[1.7rem] text-[1.1rem] transition duration-300 dark:text-gray-900/90 text-gray-300 ">
          - Edsger Dijkstra.
        </p>
        <div className="relative">
          <div className="border-t-[1px] right-0 justify-end border-[#842cd7] absolute w-[10rem]"></div>
        </div>

        <div className="sm:flex sm:justify-start justify-center items-center pt-7">
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
        className=" text-gray-500/20 dark:text-gray-500/50 transition duration-300 absolute translate-x-[1rem] translate-y-[3rem] -rotate-[15deg] animate-fade-in3"
        size={35}
      />
      <IconBrandMysql
        className=" text-gray-500/20 dark:text-gray-500/50 transition duration-300 absolute -translate-x-[4rem] translate-y-[35rem] -rotate-[10deg] animate-fade-in1"
        size={48}
      />
      <IconBrandPython
        className=" text-gray-500/20 dark:text-gray-500/50 transition duration-300 absolute translate-x-[21rem] translate-y-[6rem] -rotate-[9deg] animate-fade-in2"
        size={48}
      />
      <IconBrandCss3
        className=" text-gray-500/20 dark:text-gray-500/50 transition duration-300 absolute translate-x-[15rem] translate-y-[29rem] -rotate-[20deg] animate-fade-in3"
        size={32}
      />
      <IconBrandNodejs
        className=" text-gray-500/20 dark:text-gray-500/50 transition duration-300 hidden sm:flex absolute translate-x-[35rem] -translate-y-[3rem] rotate-[10deg] animate-fade-in1"
        size={50}
      />
      <IconBrandGithub
        className=" text-gray-500/20 dark:text-gray-500/50 transition duration-300 absolute hidden sm:flex translate-x-[34rem] translate-y-[34rem] rotate-[12deg] animate-fade-in3"
        size={45}
      />
      <IconBrandReact
        className=" text-gray-500/20 dark:text-gray-500/50 transition duration-300 hidden md:flex absolute translate-x-[45rem] translate-y-[10rem] rotate-[10deg] animate-fade-in3"
        size={40}
      />
      <IconBrandTailwind
        className=" text-gray-500/20 dark:text-gray-500/50 transition duration-300 hidden md:flex absolute translate-x-[49rem] translate-y-[26rem] rotate-[9deg] animate-fade-in2"
        size={36}
      />
      <IconBrandAngular
        className=" text-gray-500/20 dark:text-gray-500/50 transition duration-300 hidden lg:flex absolute translate-x-[58rem] translate-y-[1rem] rotate-[9deg] animate-fade-in2"
        size={32}
      />
      <IconBrandPhp
        className=" text-gray-500/20 hidden dark:text-gray-500/50 transition duration-300 lg:flex absolute translate-x-[61rem] translate-y-[32rem] rotate-[12deg] animate-fade-in1"
        size={38}
      />
    </section>
  );
};
export default Home;
