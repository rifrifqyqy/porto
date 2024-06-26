import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export default function CardProject2({ children, to }) {
  return (
    <>
      <Link to={to}>
        <div className="group flex w-fit flex-col border border-zinc-900 p-3 pt-8 transition-all duration-300 hover:bg-sky-600">
          {children}
        </div>
      </Link>
    </>
  );
}

function PolaroidImg({ frame, label, labelstyle, coverStyle }) {
  return (
    <>
      <div className="relative aspect-square h-[280px] w-[280px] overflow-hidden border border-zinc-900">
        <div
          className={twMerge(
            "absolute left-2 top-2 z-[2] w-fit bg-red-500 px-4 py-1 text-white",
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
      <div className="mt-3 flex items-center gap-4">
        <img src={profile} alt="" className="h-[50px] w-[50px] rounded-full" />
        <article className="flex w-[210px] flex-col group-hover:text-white">
          <h1 className="line-clamp-1 font-semibold uppercase transition-all duration-300">
            {title}
          </h1>
          <p className="line-clamp-1 text-zinc-500 transition-all duration-300 group-hover:text-zinc-200">
            {desc}
          </p>
        </article>
      </div>
    </>
  );
}

CardProject2.PolaroidImg = PolaroidImg;
CardProject2.PolaroidBody = PolaroidBody;
