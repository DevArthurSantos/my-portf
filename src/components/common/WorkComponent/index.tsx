
type WorkComponentProps = {
  company: string,
  position: string,
  date: string,
  text: string
}

export default function WorkComponent({ company, date, position, text }: WorkComponentProps) {

  return (
    <li className="relative flex bg-backgroundSecondary flex-col p-4 rounded-md m-auto items-start justify-start gap-4 text-sm lg:text-lg md:flex-row md:w-full md:bg-transparent md:justify-between">
      <div className="flex items-start flex-col gap-4 max-w-[80px]">
        <h3 className="font-bold whitespace-nowrap">{company}</h3>
        <h3 className="font-bold text-[12px] text-textSecondary whitespace-nowrap ">{date}</h3>
      </div>
      <div className="absolute md:hidden lg:block md:relative top-2 right-2 border-dashed p-1 border-2 border- border-black rounded-full">
        <span className={`h-2 w-2 md:h-5 md:w-5 bg-gradientStart rounded-full flex items-center justify-center text-xl font-bold text-background ${date.split(' ').includes('momento') ? 'bg-gradientStart' : 'bg-black'}`}></span>
      </div>
      <div className="flex items-start gap-4 flex-col max-w-[400px]">
        <h3 className="font-bold">{position}</h3>
        <p className="text-[10px] font-semibold text-textSecondary">{text}</p>
      </div>
    </li>
  )

}