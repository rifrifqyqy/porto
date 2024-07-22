import { useEffect, useState } from "react";
import { format } from "date-fns";
export default function CheckoutPage() {
  const [porto, setPorto] = useState(null);

  useEffect(() => {
    const fetchPorto = async () => {
      try {
        const response = await fetch(
          "https://porto-management-rifqy.vercel.app/api/porto",
        );
        const json = await response.json();

        if (response.ok) {
          setPorto(json);
        } else {
          console.error("Failed to fetch porto data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching porto data:", error);
      }
    };

    fetchPorto();
  }, []);

  return (
    <>
      <main className="mx-24 mt-12 grid grid-cols-1 gap-8">
        {porto &&
          porto.map((portos) => (
            <div
              key={portos._id}
              className="flex gap-8 border border-zinc-500 p-4"
            >
              <img
                src={`https://porto-management-rifqy.vercel.app${portos.imageUrl}`}
                alt=""
                className="aspect-square w-[160px] object-contain"
              />
              <section className="flex flex-col justify-between">
                <div>
                  <h1 className="text-xl font-semibold uppercase">
                    {portos.title}
                  </h1>
                  <p
                    className={` ${portos.label === "Website" ? "bg-red-600" : ""} ${portos.label === "Figma" ? "bg-violet-600" : ""} w-fit rounded-full px-3 text-white`}
                  >
                    {portos.label}
                  </p>
                  <p className="line-clamp-3 text-zinc-400">{portos.description}</p>
                </div>
                <p className="text-sky-600">
                  <span>last update</span>
                  {format(new Date(portos.createdAt), "dd-MM-yyyy HH:mm")}
                </p>
              </section>
            </div>
          ))}
      </main>
    </>
  );
}
