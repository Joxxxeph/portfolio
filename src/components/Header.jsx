import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="min-h-[70px] bg-transparent px-4">
      <div className="flex justify-between items-center py-3">
        <div className=" overflow-hidden">
          <a href="#home" className="text-white transition duration-300 dark:text-black text-[1.5rem]">Axl Design<span className="text-[#842cd7]">.</span></a>
        </div>

        <div className="flex py-2">
          <Link to="contact"
            smooth={true}
            spy={true}
            offset={100}
            duration={600} className="btn-a cursor-pointer">
            <div className="gap-x-[2px] gap-y-[2px] duration-500 text-white dark:text-black dark:bg-[#bde5f8] dark:hover:bg-[rgba(248,248,248,0.9)] hover:bg-[#0d0f10cc] bg-[#0d0f10] rounded-[8px] [transition:background-color_.3s] flex justify-centeritems-center py-[.5rem] px-[1rem]">
              Trabajemos juntos
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Header


