const Projects = () => {
  return (
    <section className="sm:pt-[4rem] pt-[4rem] pb-[4rem]" id="projects">
      <h1 data-aos="fade-right"  className="text-[2rem] transition duration-300 dark:text-black  text-center text-white">Mis Proyectos.</h1>
      <p data-aos="fade-right"  className="py-[1rem] transition duration-300 dark:text-gray-900/90 text-gray-300 text-center text-[1.2rem] tracking-[.03rem]">Si lo puedes <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#842cd7] to-[#21f5f1]">Imaginar</span> los puedes <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#842cd7] to-[#21f5f1]">Programar.</span></p>
      <div className="pt-8 grid grid-cols-[repeat(auto-fit,_300px)] items-center justify-center gap-6">
        
        <a data-aos="fade-up"  href="https://rick-and-morty-app-swart-tau.vercel.app/" target="blank" className="content relative shadow-xl w-[300px] rounded-xl overflow-hidden">
          <article className="absolute content-info w-[100%] h-[100%] justify-center gap-4 flex flex-col items-center px-2 bg-black/80 text-white">
            <h4 className="text-[1.3rem] text-[#21f5f1]">Rick & Morty App</h4>
            <p className="text-center">En esta app se puede visualizar la información de las locaciones de la serie y cada uno de sus residentes.</p>
            <h5>Tech Stack:</h5>
            <div className="flex gap-2">
              <img src="./stacksImage/react.png" className="w-[45px]" alt="" />
              <img src="./stacksImage/tailwind.png" className="w-[45px]" alt="" />
              <img src="./stacksImage/javascript.png" className="w-[45px]" alt="" />
              <img src="./stacksImage/css.png" className="w-[45px]" alt="" />
            </div>
            <div className="border-t border-[#21f5f1] w-[6rem]"></div>
          </article>
          <img src="./proyectsImage/rickAndMorty.jpeg" className="img-app bg-cover bg-center h-[300px] object-cover" alt="" /> 
        </a>

        <a data-aos="fade-up"  href="https://joxxxeph.github.io/e-commerce/" target="blank" className="content relative shadow-xl w-[300px] rounded-xl overflow-hidden">
          <article className="absolute content-info w-[100%] h-[100%] justify-center gap-4 flex flex-col items-center px-2 bg-black/80 text-white">
            <h4 className="text-[1.3rem] text-[#21f5f1]">E-Commerce</h4>
            <p className="text-center">Tienda virtual para franelas y sueters estampados con carrito de compras y persistencia de datos.</p>
            <h5>Tech Stack:</h5>
            <div className="flex gap-2">
              <img src="./stacksImage/javascript.png" className="w-[45px]" alt="" />
              <img src="./stacksImage/html.png" className="w-[45px]" alt="" />
              <img src="./stacksImage/css.png" className="w-[45px]" alt="" />
            </div>
            <div className="border-t border-[#21f5f1] w-[6rem]"></div>
          </article>
          <img src="./proyectsImage/ecomerce.jpeg" className="img-app bg-cover bg-center h-[300px] object-cover" alt="" /> 
        </a>

        <a data-aos="fade-up"  href="https://pokedex-joxxxeph.vercel.app/" target="blank" className="content relative shadow-xl w-[300px] rounded-xl overflow-hidden">
          <article className="absolute content-info w-[100%] h-[100%] justify-center gap-4 flex flex-col items-center px-2 bg-black/80 text-white">
            <h4 className="text-[1.3rem] text-[#21f5f1]">Pokedex App</h4>
            <p className="text-center">Aplicación en el cual se puede ver información sobre los Pokémons, mediante búsquedas por nombre y tipos.</p>
            <h5>Tech Stack:</h5>
            <div className="flex gap-2">
              <img src="./stacksImage/react.png" className="w-[45px]" alt="" />
              <img src="./stacksImage/javascript.png" className="w-[45px]" alt="" />
              <img src="./stacksImage/tailwind.png" className="w-[45px]" alt="" />
              <img src="./stacksImage/css.png" className="w-[45px]" alt="" />
            </div>
            <div className="border-t border-[#21f5f1] w-[6rem]"></div>
          </article>
          <img src="./proyectsImage/pokedex.jpeg" className="img-app bg-cover bg-center h-[300px] object-cover" alt="" /> 
        </a>

        <a data-aos="fade-up"  href="https://weather-app-nu-ivory.vercel.app/" target="blank" className="content relative shadow-xl w-[300px] rounded-xl overflow-hidden">
          <article className="absolute content-info w-[100%] h-[100%] justify-center gap-4 flex flex-col items-center px-2 bg-black/80 text-white">
            <h4 className="text-[1.3rem] text-[#21f5f1]">Wheater App</h4>
            <p className="text-center">Aplicación del clima en donde se refleja los datos climatológicos de tu región o ciudad, te permite buscar una localización en específico.</p>
            <h5>Tech Stack:</h5>
            <div className="flex gap-2">
              <img src="./stacksImage/react.png" className="w-[45px]" alt="" />
              <img src="./stacksImage/javascript.png" className="w-[45px]" alt="" />
              <img src="./stacksImage/tailwind.png" className="w-[45px]" alt="" />
            </div>
            <div className="border-t border-[#21f5f1] w-[6rem]"></div>
          </article>
          <img src="./proyectsImage/wheater.jpeg" className="img-app bg-cover bg-center h-[300px] object-cover" alt="" /> 
        </a>

        <a data-aos="fade-up"  href="https://crud-app-joxxxeph.vercel.app/" target="blank" className="content relative shadow-xl w-[300px] rounded-xl overflow-hidden">
          <article className="absolute content-info w-[100%] h-[100%] justify-center gap-4 flex flex-col items-center px-2 bg-black/80 text-white">
            <h4 className="text-[1.3rem] text-[#21f5f1]">CRUD de Usuarios</h4>
            <p className="text-center">Aplicación que te permite crear, listar, actualizar y eliminar usarios mediante un formulario de registro.</p>
            <h5>Tech Stack:</h5>
            <div className="flex gap-2">
              <img src="./stacksImage/react.png" className="w-[45px]" alt="" />
              <img src="./stacksImage/javascript.png" className="w-[45px]" alt="" />
              <img src="./stacksImage/tailwind.png" className="w-[45px]" alt="" />
              <img src="./stacksImage/css.png" className="w-[45px]" alt="" />
            </div>
            <div className="border-t border-[#21f5f1] w-[6rem]"></div>
          </article>
          <img src="./proyectsImage/crud.jpeg" className="img-app bg-cover bg-center h-[300px] object-cover" alt="" /> 
        </a>

        <a data-aos="fade-up"  href="https://primer-entregable-react-p5766kbge-joxxxeph.vercel.app/" target="blank" className="content relative shadow-xl w-[300px] rounded-xl overflow-hidden">
          <article className="absolute content-info w-[100%] h-[100%] justify-center gap-4 flex flex-col items-center px-2 bg-black/80 text-white">
            <h4 className="text-[1.3rem] text-[#21f5f1]">Frases Filosóficas App</h4>
            <p className="text-center">Frases icónicas de los filósofos más reconocidos de la historia, puedes cambiar las frases mediante un botón.</p>
            <h5>Tech Stack:</h5>
            <div className="flex gap-2">
              <img src="./stacksImage/react.png" className="w-[45px]" alt="" />
              <img src="./stacksImage/javascript.png" className="w-[45px]" alt="" />
              <img src="./stacksImage/html.png" className="w-[45px]" alt="" />
              <img src="./stacksImage/css.png" className="w-[45px]" alt="" />
            </div>
            <div className="border-t border-[#21f5f1] w-[6rem]"></div>
          </article>
          <img src="./proyectsImage/phrase.jpeg" className="img-app bg-cover bg-center h-[300px] object-cover" alt="" /> 
        </a>

        <a data-aos="fade-up"  href="https://joxxxeph.github.io/contadornuevo/" target="blank" className="content relative shadow-xl w-[300px] rounded-xl overflow-hidden">
          <article className="absolute content-info w-[100%] h-[100%] justify-center gap-4 flex flex-col items-center px-2 bg-black/80 text-white">
            <h4 className="text-[1.3rem] text-[#21f5f1]">Contador App</h4>
            <p className="text-center">Contador básico con animación y botones de interacción.</p>
            <h5>Tech Stack:</h5>
            <div className="flex gap-2">
              <img src="./stacksImage/javascript.png" className="w-[45px]" alt="" />
              <img src="./stacksImage/html.png" className="w-[45px]" alt="" />
              <img src="./stacksImage/css.png" className="w-[45px]" alt="" />
            </div>
            <div className="border-t border-[#21f5f1] w-[6rem]"></div>
          </article>
          <img src="./proyectsImage/contador.jpeg" className="img-app bg-cover bg-center h-[300px] object-cover" alt="" /> 
        </a>

        <a data-aos="fade-up"  href="https://servicios-app.vercel.app/" target="blank" className="content relative shadow-xl w-[300px] rounded-xl overflow-hidden">
          <article className="absolute content-info w-[100%] h-[100%] justify-center gap-4 flex flex-col items-center px-2 bg-black/80 text-white">
            <h4 className="text-[1.3rem] text-[#21f5f1]">Servicios web App</h4>
            <p className="text-center">Landing Page de servicios web.</p>
            <h5>Tech Stack:</h5>
            <div className="flex gap-2">
              <img src="./stacksImage/javascript.png" className="w-[45px]" alt="" />
              <img src="./stacksImage/html.png" className="w-[45px]" alt="" />
              <img src="./stacksImage/css.png" className="w-[45px]" alt="" />
            </div>
            <div className="border-t border-[#21f5f1] w-[6rem]"></div>
          </article>
          <img src="./proyectsImage/servicios.jpeg" className="img-app bg-cover bg-center h-[300px] object-cover" alt="" /> 
        </a>

        
      </div>
    </section>
  )
}
export default Projects