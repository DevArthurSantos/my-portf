import WorkComponent from "@/components/common/WorkComponent";
import { worksInfos } from "@/fundations/utils/worksInfos";


export default function WorksSection() {

  return (
    <section id="WorksSection" className="w-full px-[60px] md:px-[120px]">
      <h2 className="mt-2 text-sm md:text-md lg:text-[24px] font-bold text-center">MINHAS <span className="text-primary">EXPERIÊNCIAS DE TRABALHOS</span>.</h2>

      <ul className="my-8 w-full flex flex-col gap-4">
        {worksInfos.map((work, i) =>
          <WorkComponent company={work.company} date={work.date} position={work.position} text={work.text} key={i} />
        )}
      </ul>

    </section>
  )
}