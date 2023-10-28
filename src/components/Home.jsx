import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react"


const Home = () => {
  return (
    <section
      id="home"
      className="text-white pt-16 md:pt-[7rem] grid sm:grid-cols-[300px_1fr] gap-8"
      >
      <div className="flex justify-center items-center">
        <img src="./users.png" alt="" className="max-w-[300px] " />
      </div>
      <div className="grid text-center sm:text-start gap-4 px-8 md:pr-12">
        <div className="">
          <h1 className="text-[2rem] font-extrabold">Joseph Vásquez</h1>
          <h2 className="text-2xl pb-2 font-bold text-blue-500 pt-2">
            Full Stack Developer
          </h2>
        </div>
        <div className=" border-t-[1px] border-blue-500 w-32 "></div>
        <p className="leading-[1.7rem] text-gray-300 leading-[]5rem">
          Desarrollo Web práctico y autodidacta, disciplinado, responsable,
          dedicado a cualquier labor a desempeñar, me adapto a cualquier entorno
          de trabajo, facilidad al momento del aprendizaje y buena manejabilidad
          del trabajo bajo presión.
        </p>
        <div className="border-t-[1px] border-blue-500 w-32"></div>
        <div className="flex sm:justify-start justify-center items-center pt-2">
          <button className="text-sm flex justify-center items-center px-8 py-2 rounded-full bg-blue-500 hover:bg-blue-700 transition-colors text-white">
            Descargar CV
          </button>
          <a className="px-6 hover:text-blue-500 transition-colors" href="#">
            <IconBrandGithub />
          </a>
          <a className="hover:text-blue-500 transition-colors" href="">
            <IconBrandLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
export default Home