const Stack = () => {
  return (
    <section className="h-screen flex flex-col sm:pt-[8rem] pt-[4rem] px-4" id="stack">
      <h1 className="text-[2rem] text-center text-white pb-[3rem]">
        Mis Habilidades.
      </h1>
      <div className="border-div">
        <div className="bg-div py-10 grid grid-cols-[repeat(auto-fit,_120px)] gap-6 place-items-center justify-center">
          <img title="Javascript" src="./javascript.png" className="w-[100px] drop-shadow-2xl" alt="javascript" />
          <img title="ReactJs" src="./react.png" className="w-[100px] drop-shadow-2xl" alt="react" />
          <img title="Tailwind" src="./tailwind.png" className="w-[100px] drop-shadow-2xl" alt="tailwind" />
          <img title="Html" src="./html.png" className="w-[100px] drop-shadow-2xl" alt="html" />
          <img title="Css" src="./css.png" className="w-[100px] drop-shadow-2xl" alt="css" />
          <img title="NodeJs" src="./node.png" className="w-[100px] drop-shadow-2xl" alt="nodejs" />
          <img title="Git" src="./git.png" className="w-[100px] drop-shadow-2xl" alt="git" />
          <img title="Python" src="./python.png" className="w-[100px] drop-shadow-2xl" alt="python" />
          <img title="Django" src="./django.png" className="w-[100px] drop-shadow-2xl" alt="django" />
          <img title="PHP" src="./php.png" className="w-[100px] drop-shadow-2xl" alt="php" />
          <img title="MySQL" src="./mysql.png" className="w-[100px] drop-shadow-2xl" alt="mysql" />
          <img title="PostgreSQL" src="./postgresql.png" className="w-[100px] drop-shadow-2xl" alt="postgresql" />
        </div>
      </div>
    </section>
  );
}
export default Stack