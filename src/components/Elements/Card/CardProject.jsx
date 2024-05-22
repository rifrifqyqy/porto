import { twMerge } from "tailwind-merge";
import MainButton from "../Button/MainButton";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";


export default function CardProject({ children, className, buttonStyle }) {
  return (
    <>
      <main className={twMerge("p-4 bg-white border-[1px] flex flex-col border-gray-800 max-w-min gap-4 hover:bg-sky-700 justify-between group", className, transitionStyle)}>
        <div className="gap-4 flex flex-col">{children}</div>
        <MainButton className={twMerge(" bg-sky-700 text-center font-statliches text-[20px] tracking-wider group-hover:bg-white group-hover:text-sky-700", buttonStyle, transitionStyle)}>Lihat Detail</MainButton>
      </main>
    </>
  );
}
const transitionStyle = "transition-all duration-500";
function CardHeader({ children, styleHeader, labelLink, labelTag }) {
  return (
    <div className="flex justify-between items-center">
      <div className={twMerge("flex gap-2 bg-gray-100 border-[1px] border-black items-center group-hover:bg-white h-[38px] w-[42px] group-hover:w-fit group-hover:pr-4 cursor-pointer", transitionStyle)}>
        <div className="flex w-fit gap-2 items-center pl-1 h-full">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-45 group-hover:rotate-0 transition-all duration-300 peer w-[28px] h-[34px]">
            <path
              d="M21.4354 2.58198C20.9352 2.0686 20.1949 1.87734 19.5046 2.07866L3.408 6.75952C2.6797 6.96186 2.16349 7.54269 2.02443 8.28055C1.88237 9.0315 2.37858 9.98479 3.02684 10.3834L8.0599 13.4768C8.57611 13.7939 9.24239 13.7144 9.66956 13.2835L15.4329 7.4843C15.723 7.18231 16.2032 7.18231 16.4934 7.4843C16.7835 7.77623 16.7835 8.24935 16.4934 8.55134L10.72 14.3516C10.2918 14.7814 10.2118 15.4508 10.5269 15.9702L13.6022 21.0538C13.9623 21.6577 14.5826 22 15.2628 22C15.3429 22 15.4329 22 15.513 21.9899C16.2933 21.8893 16.9135 21.3558 17.1436 20.6008L21.9156 4.52479C22.1257 3.84028 21.9356 3.09537 21.4354 2.58198Z"
              className="fill-[#1c1c1c] group-hover:fill-sky-700 "
            />
          </svg>
          <Link to={labelLink} className={twMerge("text-[16px] opacity-0 group-hover:opacity-100 text-sky-700 font-semibold hidden group-hover:block", transitionStyle)}>{labelTag}</Link>
        </div>
      </div>
      <p className={twMerge("text-center group-hover:text-white", styleHeader, transitionStyle)}>{children}</p>
    </div>
  );
}

function CardImg({ imgFilter, imageUrl, imgBox, videoUrl }) {
  const videoRef = useRef(null);
  useEffect(() => {
    // Memulai pemutaran video secara otomatis saat komponen dimuat
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className={twMerge("w-[300px] h-[300px] border-[1px] border-gray-800 relative overflow-hidden", imgBox, transitionStyle)}>
      <img src={imageUrl} alt="" />

      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <video ref={videoRef} autoPlay controls className="w-full h-full aspect-[1/1] group-hover:z-40">
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>

      <div className={twMerge(" bg-sky-700 w-full h-full absolute top-0 left-0 opacity-30 z-20 group-hover:hidden", imgFilter, transitionStyle)}></div>
    </div>
  );
}

function CardBody({ title, children }) {
  return (
    <article>
      <h1 className={twMerge("font-statliches text-[24px] group-hover:text-white", transitionStyle)}>{title}</h1>
      <p className={twMerge("text-gray-500 line-clamp-5 group-hover:text-white", transitionStyle)}>{children}</p>
    </article>
  );
}

CardProject.CardHeader = CardHeader;
CardProject.CardImg = CardImg;
CardProject.CardBody = CardBody;
