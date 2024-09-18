'use client'
import ProjectFeature from "@/components/common/ProjectFeature";
import ProjectFrame from "@/components/patteners/ProjectFrame";
import { projectsInfos } from "@/fundations/utils/projectsInfos";
import { useState } from "react";


export default function ProjectsSection() {

  const [project, setProject] = useState(0)

  const nextProject = () => {
    if (project === projectsInfos.length-1) return
    setProject(project+1)
  }
  const previousProject = () => {
    if (project === 0) return
    setProject(project-1)
  }

  return (
    <section id="ProjectsSection" className="w-full">
      <h2 className="mt-2 text-sm md:text-md lg:text-[24px] font-bold text-center">MEUS <span className="text-primary">PROJETOS</span>.</h2>
      <div className="flex items-center justify-center gap-8 md:gap-10 flex-col lg:flex-row w-full h-full my-8">
        <ProjectFrame href={projectsInfos[project].href} project={project+1} nextProject={nextProject} previousProject={previousProject} />
        <ul className="p-4 lg:h-full flex lg:flex-col items-center justify-between gap-4 flex-wrap">
          {projectsInfos[project].features.map((project, i) => <ProjectFeature key={i} title={project.title} text={project.text} number={i + 1} />)}
        </ul>
      </div>
    </section>
  )
}