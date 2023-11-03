const AboutMe = () => {
  return (
    <section
      className=" flex flex-col items-center px-4 text-white text-center sm:pt-[19rem] pt-[13rem]"
      id="about-me"
    >
      <h1
        data-aos="fade-right"
        className="transition duration-300 dark:text-black text-[2rem] pb-[3rem]"
      >
        Más sobre mí...
      </h1>
      <div
        data-aos="zoom-in"
        className="border-t-[2px] border-[#842cd7] w-[10rem] sm:w-[20rem]"
      ></div>
      <p
        data-aos="fade-right"
        className="py-[2rem] text-[1.1rem] transition duration-300 dark:text-gray-900/90"
      >
        Ingeniero en Sistemas especializado en el desarrollo de{" "}
        <span className="text-[#21f5f1] dark:text-[#842cd7] transition duration-300">
          Aplicaciones Web.
        </span>{" "}
        Cuento con disponibilidad a tiempo completo, con experiencia de más de
        un año en el ámbito laboral. Me considero apasionado, dedicado y
        comprometido con todo trabajo a realizar. Cuento con la habilidad de trabajar en equipo. Soy tolerante a la presión
        laboral, proactivo, dinámico, con capacidad de {" "}
        <span className="text-[#21f5f1] dark:text-[#842cd7] transition duration-300">
          aprendizaje rápido.
        </span>{" "}
        Soy una persona con una vida deportiva-activa, con metas claras, enfocado y{" "}
        <span className="text-[#21f5f1] dark:text-[#842cd7] transition duration-300">
          no pienso redirme{" "}
        </span>{" "}
        hasta lograrlas.
      </p>
      <div
        data-aos="zoom-in"
        className="border-t-[2px] border-[#842cd7] w-[10rem] sm:w-[20rem] "
      ></div>
    </section>
  );
}
export default AboutMe