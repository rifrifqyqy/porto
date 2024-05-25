import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export default function MainButton({ className, to, children, onClick }) {
  return (
    <>
      <Link to={to} onClick={onClick} className={twMerge("text-2xl bg-slate-900 px-8 py-2 font-medium text-white hover:opacity-75", className)}>
        {children}
      </Link>
    </>
  );
}
