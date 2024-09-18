
type ProjectFeatureProps = {
  number: number,
  title: string,
  text: string
}

export default function ProjectFeature({ number, title, text }: ProjectFeatureProps) {

  return (
    <li className="flex flex-col m-auto items-start justify-start w-56 max-w-[300px] gap-4 text-sm lg:text-lg">
      <div className="flex items-center gap-5">
        <span className="h-10 w-10 bg-gradientStart rounded-full flex items-center justify-center text-xl font-bold text-background ">{number}</span>
        <h3 className="font-bold">{title}</h3>
      </div>
      <p className="text-sm font-semibold">{text}</p>
    </li>
  )

}