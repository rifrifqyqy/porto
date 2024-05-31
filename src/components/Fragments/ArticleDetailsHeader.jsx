import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import MainButton from "../Elements/Button/MainButton";

export default function ArticleProject({ toolIcon, portoData }) {
  return (
    <>
      <article className="pl-16 max-md:pl-0 flex flex-col gap-4 max-md:mt-4 max-md:pt-4">
        <header className="flex flex-col gap-4">
          <div>
            <h1 className="font-statliches text-[36px] max-md:text-2xl">{portoData.title}</h1>
            <div className="flex items-center gap-4 max-md:gap-3">
              <label className="bg-amber-300 px-4 max-md:px-2 py-2 max-md:py-1 gap-2 w-fit font-medium text-zinc-600 max-md:text-[12px]">{portoData.label}</label>
              <img src="/images/bullet.svg" alt="" className="w-2 h-2 max-md:h-1 fill-sky-500" />
              <p className=" max-md:text-[12px]">{portoData.date}</p>
            </div>
          </div>

          <p className="text-gray-500 max-md:text-[14px]">{portoData.description}</p>
        </header>
        <div className="flex flex-col gap-2">
          <MainButton className="text-center bg-transparent text-sky-700 border-retro text-[20px] max-md:text-sm hover:bg-zinc-950 hover:text-white">Lihat Figma</MainButton>
          <MainButton to={portoData.webUrl} className="text-center bg-sky-700 text-white border-retro text-[20px] max-md:text-sm">
            Lihat Website
          </MainButton>
        </div>
        {/* accordion */}
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-zinc-900">
            <AccordionTrigger className="accordion-title hover:no-underline [&[data-state=open]>svg]:rotate-45 [&[data-state=open]>svg>path]:fill-[#FFBA34] hover:bg-zinc-100 px-4 max-md:py-3 max-md:px-2 max-md:text-lg">Description</AccordionTrigger>
            <AccordionContent className="px-4 max-md:px-2">{portoData.description}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className=" border-zinc-900">
            <AccordionTrigger className="accordion-title hover:no-underline [&[data-state=open]>svg]:rotate-45 [&[data-state=open]>svg>path]:fill-[#FFBA34] hover:bg-zinc-100 px-4 max-md:px-2 max-md:py-3 max-md:text-lg">Project Tools</AccordionTrigger>
            <AccordionContent className="px-4 max-md:px-2 pt-4">
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
