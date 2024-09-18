import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png"
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { AiOutlineDiscord } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";


export default function FooterSection() {

  return (
    <footer className="flex justify-center items-center flex-col bg-backgroundSecondary">
      <div className="px-[60px] md:px-[120px] w-full flex items-start gap-8 justify-between pt-6 flex-wrap ">

        <div className="hidden sm:flex items-start flex-col min-w-[100px] max-w-[400px]">
          <div><p className="md:text-2xl font-bold">Inscreva-se na nossa newsletter</p></div>
          <div className="flex items-center justify-start gap-2">
            <Image height={82} src={logo} alt="logo" />
            <p className="break-words md:text-lg">E fique atualizado com as mais quentes noticias do mundo <span className="font-bold">Geek!</span></p>
          </div>
          <form className="w-full">
            <input type="text" placeholder="Email" className="bg-transparent mt-5 border-[1px] border-black rounded-[8px] py-4 px-6 w-full" />
            <input type="submit" className="bg-primary mt-3 border-none rounded-[8px] py-4 px-6 w-full" />
          </form>
        </div>

        <ul className="flex font-semibold flex-col gap-[10px] items-start">
          <li className="font-bold text-2xl">Menu</li>
          <li><Link className="flex gap-1 items-center" href='#homeSection' >INICIO</Link></li>
          <li><Link className="flex gap-1 items-center" href='#WorksSection' >EXPERIENCIAS</Link></li>
          <li><Link className="flex gap-1 items-center" href='#ProjectsSection' >PROJETOS</Link></li>
          <li><Link className="flex gap-1 items-center" href='#TechnologiesSection' >TECNOLOGIAS</Link></li>
          <li><Link className="flex gap-1 items-center" href='#ContactSection' >CONTATO</Link></li>
        </ul>
        <ul className="flex font-semibold flex-col gap-[10px] items-start">
          <li className="font-bold text-2xl">Social</li>
          <li><Link className="flex gap-1 items-center" href='https://github.com/DevArthurSantos' ><FaGithub size={24} /> DevArthurSantos</Link></li>
          <li><Link className="flex gap-1 items-center" href='https://discord.gg/BzVR4RbtGA' ><AiOutlineDiscord size={24} /> Aurion Solutions</Link></li>
          <li><Link className="flex gap-1 items-center" href='https://api.whatsapp.com/send?phone=5581994920769' ><FaWhatsapp size={24} /> {`(81)99492-0769`}</Link></li>
          <li><Link className="flex gap-1 items-center" href='https://www.instagram.com/artthur00s/' ><IoLogoInstagram size={24} /> @artthur00s</Link></li>
          <li><Link className="flex gap-1 items-center" href='https://www.linkedin.com/in/devarthursantos/' ><FaLinkedin size={24} /> Arthur Santos</Link></li>
        </ul>

      </div>
      <div className="text-sm border-t-2 border-black w-full flex items-center justify-center py-6 mt-6">
        <p>Transformando ideias em realidade! © <Link href={'/'} className="text-primary italic font-bold underline">Arthur Santos</Link></p>
      </div>
    </footer>
  )
}