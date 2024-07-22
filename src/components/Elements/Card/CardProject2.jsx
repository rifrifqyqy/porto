import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export default function CardProject2({ children, to }) {
  return (
    <>
      <Link to={to}>
        <div className="group flex max-w-min flex-col border border-zinc-900 p-3 pt-12 transition-all duration-300 hover:bg-sky-600 max-sm:p-[6px] max-sm:pt-6">
          {children}
        </div>
      </Link>
    </>
  );
}

function PolaroidImg({ frame, label, labelstyle, coverStyle }) {
  return (
    <>
      <div className="relative aspect-square h-[280px] w-[280px] overflow-hidden border border-zinc-900 max-sm:h-[145px] max-sm:w-[145px]">
        <div
          className={twMerge(
            "absolute left-2 top-2 z-[2] w-fit bg-red-500 px-4 py-1 text-white max-sm:left-1 max-sm:top-1 max-sm:px-2 max-sm:font-normal max-sm:py-0 max-sm:text-[12px]",
            labelstyle,
          )}
        >
          {label}
        </div>
        <div
          className={twMerge(
            "absolute h-full w-full bg-red-500/20 transition-all duration-300 group-hover:opacity-0",
            coverStyle,
          )}
        ></div>
        <img
          src={frame}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
    </>
  );
}

function PolaroidBody({ profile, title, desc }) {
  return (
    <>
      <div className="mt-4 flex items-center gap-4 max-sm:mt-2 max-sm:gap-2">
        <img
          src={profile}
          alt=""
          className="h-[50px] w-[50px] rounded-full max-sm:h-[32px] max-sm:w-[32px]"
        />
        <article className="flex flex-col group-hover:text-white max-w-[210px]">
          <h1 className="line-clamp-1 font-semibold uppercase transition-all duration-300 max-sm:text-[14px] max-sm:leading-[120%]">
            {title}
          </h1>
          <p className="line-clamp-1 text-zinc-500 transition-all duration-300 group-hover:text-zinc-200 max-sm:text-[12px]">
            {desc}
          </p>
        </article>
      </div>
    </>
  );
}

CardProject2.PolaroidImg = PolaroidImg;
CardProject2.PolaroidBody = PolaroidBody;
