import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import MainButton from "../Elements/Button/MainButton";

export default function ArticleProject({ toolIcon, portoData }) {
  return (
    <>
      <article className="pl-16 flex flex-col gap-4 ">
        <header className="flex flex-col gap-4">
          <div>
            <h1 className="font-statliches text-[36px]">{portoData.title}</h1>
            <div className="flex items-center gap-4">
              <label className="bg-amber-300 pr-3 pl-1 py-2 gap-2 w-fit flex">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-45">
                  <path
                    d="M21.4354 2.58198C20.9352 2.0686 20.1949 1.87734 19.5046 2.07866L3.408 6.75952C2.6797 6.96186 2.16349 7.54269 2.02443 8.28055C1.88237 9.0315 2.37858 9.98479 3.02684 10.3834L8.0599 13.4768C8.57611 13.7939 9.24239 13.7144 9.66956 13.2835L15.4329 7.4843C15.723 7.18231 16.2032 7.18231 16.4934 7.4843C16.7835 7.77623 16.7835 8.24935 16.4934 8.55134L10.72 14.3516C10.2918 14.7814 10.2118 15.4508 10.5269 15.9702L13.6022 21.0538C13.9623 21.6577 14.5826 22 15.2628 22C15.3429 22 15.4329 22 15.513 21.9899C16.2933 21.8893 16.9135 21.3558 17.1436 20.6008L21.9156 4.52479C22.1257 3.84028 21.9356 3.09537 21.4354 2.58198Z"
                    className="fill-zinc-800"
                  />
                </svg>
                {portoData.label}
              </label>
              <img src="/images/bullet.svg" alt="" className="w-2 h-2 fill-sky-500" />
              <p>{portoData.date}</p>
            </div>
          </div>

          <p className="text-gray-500">{portoData.description}</p>
        </header>
        <div className="flex flex-col gap-2">
          <MainButton className="text-center bg-transparent text-sky-700 border-retro text-[20px] hover:bg-zinc-950 hover:text-white">Lihat Figma</MainButton>
          <MainButton to={portoData.webUrl} className="text-center bg-sky-700 text-white border-retro text-[20px]">
            Lihat Website
          </MainButton>
        </div>
        {/* accordion */}
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-zinc-900">
            <AccordionTrigger className="accordion-title hover:no-underline [&[data-state=open]>svg]:rotate-45 [&[data-state=open]>svg>path]:fill-[#FFBA34] hover:bg-zinc-100 px-4">Description</AccordionTrigger>
            <AccordionContent className="px-4">{portoData.description}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className=" border-zinc-900">
            <AccordionTrigger className="accordion-title hover:no-underline [&[data-state=open]>svg]:rotate-45 [&[data-state=open]>svg>path]:fill-[#FFBA34] hover:bg-zinc-100 px-4">Project Tools</AccordionTrigger>
            <AccordionContent className="px-4 pt-4">
              <div className="flex gap-4">
                {toolIcon.map((tool) => (
                  <img src={tool.toolthumb} alt="" className="" />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </article>
    </>
  );
}
