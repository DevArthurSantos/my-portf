import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type ProjectFrameProps = {
  project: number,
  href: string,
  nextProject: () => void
  previousProject: () => void
}

export default function ProjectFrame({ project, href, nextProject, previousProject }: ProjectFrameProps) {

  return (
    <div className="relative rounded-[25px] md:rounded-[40px] overflow-hidden w-[300px] md:w-[600px] xl:w-[750px] flex items-center justify-center">
      <Image
        key={project}
        src={`/projects/${project}.png`}
        alt={`projects ${project}`}
        width={758}
        height={333}
        priority={true}
        placeholder="blur"
        style={{ objectFit: "fill" }}
        blurDataURL={`/project/${project}.png`}
        className="shadow-lg border border-[#e2e2e2] rounded-[38px] overflow-hidden"
      />
      <button onClick={() => previousProject()}>
        <IoIosArrowBack className="absolute z-50 mx-4 left-0 top-1/2 text-primary" size={40} />
      </button>
      <button onClick={() => nextProject()}>
        <IoIosArrowForward className="absolute z-50 right-0 mx-4 top-1/2 text-primary" size={40} />
      </button>
      <Link href={href} target="_blank" className="w-full h-full absolute top-0 left-0">
      </Link>
    </div>
  )
}