import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react"

const Footer = () => {
  return (
    <div className=" w-[100%] bg-[#0d0f10e6] text-white items-center flex flex-col sm:flex-row justify-between px-8 py-14">
        <div className=" overflow-hidden relative z-50">
          <a href="#home" className="text-white text-[1.5rem] hover:text-[#842cd7] transition-colors">Axl Design<span className="text-[#842cd7]">.</span></a>
        </div>
        <div className="relative z-50 flex gap-3 sm:flex-row flex-col justify-center items-center" >
            <div className="flex gap-3 flex-col sm:flex-row justify-center items-center">
                <a target="_blanck" className="hover:text-[#842cd7] transition-colors" href="https://www.instagram.com/joseph.vasquezz/"><IconBrandInstagram /></a>
                <a target="_blanck" className="hover:text-[#842cd7] transition-colors" href="https://www.linkedin.com/in/joseph-anthony-v%C3%A1squez-alvarez-841ab120a/?originalSubdomain=ve"><IconBrandLinkedin /> </a>
                <a target="_blanck" className="hover:text-[#842cd7] transition-colors" href="https://github.com/Joxxxeph"><IconBrandGithub /> </a>
            </div>
            <div>
                <p className="hover:text-[#842cd7] transition-colors">2023.</p>
            </div>
        </div>
        
    </div>
  )
}
export default Footer