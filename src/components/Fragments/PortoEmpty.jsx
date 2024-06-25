export default function PortoEmpty() {
  return (
    <>
      <section className="mx-auto flex justify-self-center py-12">
        <div className="flex flex-col items-center gap-8">
          <img src="/images/nodata.svg" alt="" className="h-[200px]" />
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-xl font-semibold text-sky-700">No Data</h1>
            <p>Portfolio tidak tersedia</p>
          </div>
        </div>
      </section>
    </>
  );
}
