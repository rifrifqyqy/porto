import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MainButton from "../Elements/Button/MainButton";
import { twMerge } from "tailwind-merge";

export default function ArticleProject({ toolIcon, portoData }) {
  return (
    <>
      <article className="flex flex-col gap-4 pl-12 max-md:mt-4 max-md:pl-0 max-md:pt-4">
        <header className="flex flex-col gap-4">
          <div>
            <h1 className="font-statliches text-[36px] max-md:text-2xl">
              {portoData.title}
            </h1>
            <div className="flex items-center gap-4 max-md:gap-3">
              <label
                className={`w-fit gap-2 px-4 py-2 font-medium max-md:px-2 max-md:py-1 max-md:text-[12px] ${portoData.label === "Website" ? "bg-red-500 text-white" : ""} ${portoData.label === "Figma" ? "bg-emerald-500 text-white" : ""} ${portoData.label === "Design" ? "bg-violet-600 text-white" : ""}`}
              >
                {portoData.label}
              </label>
              <img
                src="/images/bullet.svg"
                alt=""
                className="h-2 w-2 fill-sky-500 max-md:h-1"
              />
              <p className="max-md:text-[12px]">{portoData.date}</p>
            </div>
          </div>

          <p className="line-clamp-4 text-gray-500 max-md:text-[14px]">
            {portoData.description}
          </p>
        </header>
        <div className="flex flex-col gap-2">
          <MainButton
            to={portoData.figmaUrl}
            className={twMerge(
              "border-b-4 border-l-2 border-r-4 border-t-2 text-center text-[20px] max-md:text-sm",
              !portoData.figmaUrl
                ? "cursor-default border-zinc-400 bg-zinc-300 text-zinc-400 hover:opacity-100"
                : "border-zinc-900 bg-transparent text-sky-700 hover:bg-zinc-950 hover:text-white",
            )}
          >
            {portoData.figmaUrl ? "Lihat Figma" : "Figma Tidak Tersedia"}
          </MainButton>
          <MainButton
            to={portoData.webUrl}
            className={twMerge(
              "border-b-4 border-l-2 border-r-4 border-t-2 text-center text-[20px] max-md:text-sm",
              !portoData.webUrl
                ? "cursor-default border-zinc-400 bg-zinc-300 text-zinc-400 hover:opacity-100"
                : "border-zinc-900 bg-sky-700 text-white",
            )}
          >
            {portoData.webUrl ? "Lihat Website" : "Website Tidak Tersedia"}
          </MainButton>
        </div>
        {/* accordion */}
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-zinc-900">
            <AccordionTrigger className="accordion-title px-4 hover:bg-zinc-100 hover:no-underline max-md:px-2 max-md:py-3 max-md:text-lg [&[data-state=open]>svg>path]:fill-[#FFBA34] [&[data-state=open]>svg]:rotate-45">
              Description
            </AccordionTrigger>
            <AccordionContent className="px-4 max-md:px-2">
              {portoData.description}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-zinc-900">
            <AccordionTrigger className="accordion-title px-4 hover:bg-zinc-100 hover:no-underline max-md:px-2 max-md:py-3 max-md:text-lg [&[data-state=open]>svg>path]:fill-[#FFBA34] [&[data-state=open]>svg]:rotate-45">
              Project Tools
            </AccordionTrigger>
            <AccordionContent className="px-4 pt-4 max-md:px-2">
              <div className="flex gap-4 max-md:gap-2">
                {toolIcon.map((tool) => (
                  <img
                    src={tool.toolthumb}
                    alt=""
                    className="max-md:w-[28px]"
                  />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </article>
    </>
  );
}
