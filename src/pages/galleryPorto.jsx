import { furina1, furina2, pfp } from "@/components/imageImport";
import NavigationPage from "@/components/navigationPage";

export default function GalleryPorto() {
  return (
    <>
      <NavigationPage projectTitle="La Project Galleria" />
      <section className="mx-24 mt-12">
        <div className="rounded-2xl border-2 border-zinc-900 p-2">
          <div className="mx-auto h-[350px] overflow-hidden rounded-xl bg-slate-500">
            <img
              src={furina2}
              alt=""
              className="h-full w-full object-cover object-top"
              style={{ objectPosition: "center -160px" }}
            />
          </div>
        </div>
      </section>
      <section className="mx-24 mt-24 flex justify-between">
        <div className="flex w-fit flex-col border border-zinc-900 p-3 pt-8">
          <div className="relative aspect-square w-[300px] border border-zinc-900">
            <div className="absolute left-2 top-2 w-fit bg-amber-200 px-4 py-1 text-amber-600">
              website
            </div>
            <img src="/images/porto/instasubway.jpg" alt="" />
          </div>
          <div className="mt-3 flex items-center gap-4">
            <img src={pfp} alt="" className="h-[50px] w-[50px] rounded-full" />
            <article>
              <h1>Website Revamp</h1>
              <p className="line-clamp-1 w-[230px] text-zinc-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus doloremque deserunt ab perspiciatis nisi adipisci
                cumque tempore ipsam, repellat voluptatem!
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
