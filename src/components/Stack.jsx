const Stack = () => {
  return (
    <section className=" flex flex-col sm:pt-[8rem] pt-[4rem] px-4" id="stack">
      <h1 data-aos="fade-right"  className="text-[2rem] text-center transition duration-300 dark:text-black text-white pb-[5rem]">
        Mis Habilidades.
      </h1>
      <div data-aos="zoom-in"  className="border-div">
        <div className="bg-div py-16 grid grid-cols-[repeat(auto-fit,_120px)] gap-6 gap-y-10 place-items-center justify-center">
          <img title="Javascript" src="./stacksImage/javascript.png" className="w-[100px] drop-shadow-2xl" alt="javascript" />
          <img title="ReactJs" src="./stacksImage/react.png" className="w-[100px] drop-shadow-2xl" alt="react" />
          <img title="Tailwind" src="./stacksImage/tailwind.png" className="w-[100px] drop-shadow-2xl" alt="tailwind" />
          <img title="Html" src="./stacksImage/html.png" className="w-[100px] drop-shadow-2xl" alt="html" />
          <img title="Css" src="./stacksImage/css.png" className="w-[100px] drop-shadow-2xl" alt="css" />
          <img title="NodeJs" src="./stacksImage/node.png" className="w-[100px] drop-shadow-2xl" alt="nodejs" />
          <img title="Git" src="./stacksImage/git.png" className="w-[100px] drop-shadow-2xl" alt="git" />
          <img title="Python" src="./stacksImage/python.png" className="w-[100px] drop-shadow-2xl" alt="python" />
          <img title="Django" src="./stacksImage/django.png" className="w-[100px] drop-shadow-2xl" alt="django" />
          <img title="PHP" src="./stacksImage/php.png" className="w-[100px] drop-shadow-2xl" alt="php" />
          <img title="MySQL" src="./stacksImage/mysql.png" className="w-[100px] drop-shadow-2xl" alt="mysql" />
          <img title="PostgreSQL" src="./stacksImage/postgresql.png" className="w-[100px] drop-shadow-2xl" alt="postgresql" />
        </div>
      </div>
    </section>
  );
}
export default Stack