import { useRef } from "react";
import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {

  const formRef = useRef();
  const {reset} = useForm();

  const handleAlert = () => {
    Swal.fire ({
      icon: 'success',
      title: 'Good Job!',
      timer: 1300,
    })   
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const servideId = "service_bebf326";
    const templateId = "template_v6n17l3";
    const API_KEY = "nskwPzrvn2ffwTj1K";

    emailjs.sendForm(servideId, templateId, formRef.current, API_KEY)
      .then(() => {
        handleAlert(),
        reset()
      })
      .catch((error) => console.log(error))
  }

  return (
    <section
      className="h-screen flex flex-col justify-center gap-8 px-4 sm:grid sm:grid-cols-2 sm:items-center sm:pt-[20rem] pt-[21rem]"
      id="contact"
    >
      <div className="animate-left-rigth" data-aos="fade-right" >
        <h1 className="text-white text-[1.5rem] sm:text-[2rem] text-center">
          <span className="text-[#842cd7] text-[2rem] sm:text-[2.5rem]">¡</span>{" "}
          Trabajemos juntos{" "}
          <span className="text-[#842cd7] text-[2rem] sm:text-[2.5rem]">!</span>
        </h1>
        <p className="text-white text-center text-[.9rem] sm:text-[1.2rem]">
          Cuéntame tu idea y <span className="text-[#21f5f1]">juntos</span> lo
          haremos <span className="text-[#21f5f1]">posible.</span>
        </p>
      </div>

      <div data-aos="fade-left"  className="animate-rigth-left border-div w-[min(100%,350px)] sm:w-[min(100%,500px)] mx-auto sm:mx-0">
        <form
          ref={formRef}
          action=""
          className="p-8 bg-div  flex flex-col text-white "
          onSubmit={handleSubmit}
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