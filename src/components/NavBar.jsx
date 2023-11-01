import { IconAddressBook, IconCode, IconFileCode, IconSun, IconUserCode } from "@tabler/icons-react";
import { IconBrandGoogleHome } from "@tabler/icons-react";
import { Link } from "react-scroll";



const NavBar = () => {
  return (
    <nav className="fixed left-0 bottom-2 md:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div
          className="w-full flex bg-black/20 h-[70px] md:h-[80px] backdrop-blur-2xl 
            rounded-full max-w-[400px] mx-auto px-5 items-center justify-between text-2xl text-white/50 "
        >
          <Link
            className="hoverA cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            duration={600}
            title="Home"
            offset={-200}
          >
            <IconBrandGoogleHome />
          </Link>
          <Link
            className="hoverA cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
            to="projects"
            activeClass="active"
            smooth={true}
            spy={true}
            title="Mis Proyectos"
            duration={600}
          >
            <IconFileCode />
          </Link>
          <Link
            className="hoverA cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
            to="stack"
            activeClass="active"
            smooth={true}
            spy={true}
            title="Mis Habilidades"
            duration={600}
          >
            <IconCode />
          </Link>
          <Link
            className="hoverA cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
            to="about-me"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={200}
            title="Sobre mí"
            duration={600}
          >
            <IconUserCode />
          </Link>
          <Link
            className="hoverA cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={200}
            duration={600}
            title="Contáctame"
          >
            <IconAddressBook />
          </Link>
          <Link
            className="hoverA cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
            to=""
            activeClass="active"
            smooth={true}
            spy={true}
            duration={600}
            title="Tema"
          >
            <IconSun color="yellow"/>
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default NavBar