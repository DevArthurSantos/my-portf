
import Image from "next/image";
import hero from "@/assets/hero.png"
import github from "@/assets/social/Github.png"
import whatsapp from "@/assets/social/Whatsapp.png"
import linkedin from "@/assets/social/Linkedin.png"
import discord from "@/assets/social/Discord.png"
import Link from "next/link";


export default function HomeSection() {

  return (
    <section id="homeSection" className="h-[100vh] w-full flex flex-col justify-center">
      <div className="flex justify-between items-center flex-wrap">
        <div className="flex-1 text-start ">
          <h1 className="font-bold text-[34px]">OLÁ, PODE ME CHAMAR DE ARTHUR.</h1>
          <h2 className="text-secondary mt-2 text-[24px] font-bold">SOU UM DESENVOLVEDOR DE SOFTWARE.</h2>
          <p className="mt-2">Com cerca de 6 anos de experiência em desenvolvimento, trabalhando com <span className="text-primary italic font-bold">JavaScript</span>, <span className="text-primary italic font-bold">TypeScript</span>, <span className="text-primary italic font-bold">Node.js</span> e <span className="text-primary italic font-bold">Nest.js</span>. Valorizo eficiência, qualidade e otimização de processos. Gosto de compartilhar conhecimento e tenho experiência aproveitável em <span className="text-primary italic font-bold">PO</span>, <span className="text-primary italic font-bold">Deploy</span>, <span className="text-primary italic font-bold">Design</span>, <span className="text-primary italic font-bold">React.js</span> e <span className="text-primary italic font-bold">CI</span>/<span className="text-primary italic font-bold">CD</span>.</p>

          <div className="flex gap-[12px] mt-[26px]">
            <Link href="#ProjectsSection" className="bg-primary border-none rounded-[8px] px-6 py-2" >Projetos</Link>
            <Link href="#ContactSection" className="bg-transparent border-2 border-black rounded-[8px] px-6 py-2">Contato</Link>
          </div>
        </div>
        <div className="flex-1  flex items-center justify-center xl:justify-end pr-10 mt-10 md:mt-0 md:min-w-[600px]">
          <div className="hidden md:block">
            <Image src={hero} width={550} height={500} alt="" />
          </div>
          <div className="flex justify-center items-center md:flex-col md:gap-8">
            <Link className="min-w-[60px]" target="_blank" href='https://github.com/DevArthurSantos'>
              <Image src={github} width={50} height={50} alt="" />
            </Link>
            <Link className="min-w-[60px]" target="_blank" href='https://api.whatsapp.com/send?phone=5581994920769'>
              <Image src={whatsapp} width={50} height={50} alt="" />
            </Link>
            <Link className="min-w-[60px]" target="_blank" href='https://www.linkedin.com/in/devarthursantos/'>
              <Image src={linkedin} width={50} height={50} alt="" />
            </Link>
            <Link className="min-w-[60px]" target="_blank" href='https://discord.gg/BzVR4RbtGA'>
              <Image src={discord} width={50} height={50} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}