const Contact = () => {
  return (
    <section
      className="h-screen flex flex-col justify-center gap-8 px-4 sm:grid sm:grid-cols-2 sm:items-center sm:pt-[20rem] pt-[21rem]"
      id="contact"
    >
      <h1 className="text-white text-[1.5rem] sm:text-[2rem] text-center">
        <span className="text-[#842cd7] text-[2rem] sm:text-[2.5rem]">¡</span>{" "}
        Trabajemos juntos{" "}
        <span className="text-[#842cd7] text-[2rem] sm:text-[2.5rem]">!</span>
      </h1>

      <div className="border-div w-[min(100%,350px)] sm:w-[min(100%,500px)] mx-auto sm:mx-0">
        <form
          action=""
          className="p-8 bg-div  flex flex-col text-white "
        >
          <input
            className="border-b focus:border-[#21f5f1] transition duration-300 border-[#842cd7] outline-none bg-transparent p-1 pt-8 "
            type="text"
            placeholder="Tu nombre"
            name="name"
            autoComplete="off"
          />
          <input
            className="border-b border-[#842cd7] focus:border-[#21f5f1] transition duration-300 outline-none bg-transparent p-1 pt-8"
            type="email"
            placeholder="Tu correo"
            name="email"
            autoComplete="off"
          />
          <textarea
            className="border-b resize-none border-[#842cd7] focus:border-[#21f5f1] transition duration-300 outline-none bg-transparent p-1 pb-20 pt-8"
            placeholder="Deja un mansaje"
            name="message"
            autoComplete="off"
          />

          <div className="pt-8 flex justify-center items-center">
            <button className="btn-a">
              <div className="btn-all py-[.5rem] px-[2.5rem]">Enviar</div>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Contact