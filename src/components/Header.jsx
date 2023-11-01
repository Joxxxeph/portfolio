import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="min-h-[70px] bg-transparent px-4">
      <div className="flex justify-between items-center py-3">
        <div>
          <img className="w-[60px] sm:w-[70px]" src="./users.png" alt="" />
        </div>

        <div className="flex py-2">
          <Link to="contact"
            smooth={true}
            spy={true}
            offset={100}
            duration={600} className="btn-a cursor-pointer">
            <div className="btn-all text-white px-[.5rem] py-[.5rem] sm:px-[1rem]">
              Trabajemos juntos
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Header


