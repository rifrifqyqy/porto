import { useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const BookingForm = () => {
  const [nama, setNama] = useState("");
  const [tanggalMulai, setTanggalMulai] = useState("");
  const [tanggalSelesai, setTanggalSelesai] = useState("");
  const [jumlahPeserta, setJumlahPeserta] = useState(1);
  const [paket, setPaket] = useState([]);
  const [hargaPaket, setHargaPaket] = useState(0);

  const paketOptions = [
    {
      id: 1,
      name: "Penginapan",
      price: 500000,
    },
    {
      id: 2,
      name: "Transportasi",
      price: 300000,
    },
    {
      id: 3,
      name: "Makanan",
      price: 200000,
    },
  ];

  const handlePaketChange = (e) => {
    const { value, checked } = e.target;
    const selectedPaket = paketOptions.find((p) => p.id.toString() === value);
    console.log(selectedPaket);
    if (checked) {
      setPaket([...paket, selectedPaket]);
      setHargaPaket(hargaPaket + selectedPaket.price);
    } else {
      setPaket(paket.filter((p) => p.id.toString() !== value));
      setHargaPaket(hargaPaket - selectedPaket.price);
    }
  };

  const calculateTotalDays = () => {
    const start = new Date(tanggalMulai);
    const end = new Date(tanggalSelesai);
    if (start.getTime() === end.getTime()) {
      return 1;
    }
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const calculateTotalBill = () => {
    const totalDays = calculateTotalDays();
    return totalDays * jumlahPeserta * hargaPaket;
  };

  const totalBill =
    hargaPaket > 0 && tanggalMulai && tanggalSelesai
      ? `Rp${calculateTotalBill().toLocaleString()}`
      : "";

  return (
    <section className="mx-24 grid grid-cols-5 gap-16">
      <form className="order-2 col-span-3 mx-auto w-full border border-zinc-500 p-4">
        <div className="mb-4">
          <label className="mb-2 block">Nama Pemesan:</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full border px-3 py-2"
            placeholder="Masukkan Nama Anda"
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block">Waktu Perjalanan:</label>
          <input
            type="date"
            value={tanggalMulai}
            onChange={(e) => setTanggalMulai(e.target.value)}
            className="mb-2 w-full border px-3 py-2"
            aria-placeholder="masukkan tanggal mulai"
          />
          <input
            type="date"
            value={tanggalSelesai}
            onChange={(e) => setTanggalSelesai(e.target.value)}
            className="w-full border px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block">Jumlah Peserta:</label>
          <input
            type="number"
            value={jumlahPeserta}
            onChange={(e) => setJumlahPeserta(parseInt(e.target.value))}
            className="w-full border px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block">Pilih Paket:</label>
          {paketOptions.map((option) => (
            <div key={option.id} className="mb-2 flex items-center gap-4">
              <div className="checkbox relative h-6 w-6 overflow-hidden rounded-md border-2 border-zinc-800">
                <input
                  type="checkbox"
                  value={option.id}
                  onChange={handlePaketChange}
                  className="mr-2 h-6 w-6 appearance-none rounded-sm checked:border-transparent focus:outline-none"
                  id="paketform"
                />
                <span className="">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={`absolute left-0 top-0 -z-10 p-1 text-white transition-opacity duration-300 ${
                      paket.find((p) => p.id === option.id)
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  />
                </span>
                <div
                  className={`absolute left-0 top-0 -z-20 h-6 w-6 transition-all ${
                    paket.find((p) => p.id === option.id) ? "bg-sky-500" : ""
                  }`}
                ></div>
              </div>

              <label
                htmlFor="paketform"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {" "}
                {option.name} - Rp{option.price.toLocaleString()}
              </label>
            </div>
          ))}
        </div>
        <div className="mb-4">
          <label className="mb-2 block">Harga Paket Perjalanan:</label>
          <input
            type="text"
            value={
              hargaPaket > 0
                ? `Rp${hargaPaket.toLocaleString()}`
                : "Total harga paket perjalanan anda"
            }
            readOnly
            className={`w-full border px-3 py-2 ${hargaPaket > 0 ? "text-black" : "text-gray-400"}`}
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block">Total Tagihan:</label>
          <input
            type="text"
            value={
              hargaPaket > 0 && tanggalMulai && tanggalSelesai
                ? `Rp${calculateTotalBill().toLocaleString()}`
                : "Total tagihan anda"
            }
            readOnly
            className={`w-full border px-3 py-2 ${hargaPaket > 0 ? "text-black" : "text-gray-400"}`}
          />
        </div>
        <button type="submit" className="bg-blue-500 px-4 py-2 text-white">
          Submit
        </button>
      </form>
      {/* Summary Section */}
      <div className="col-span-2 mt-8 border p-4">
        <h2 className="mb-4 text-lg font-semibold">Ringkasan Pemesanan:</h2>
        <p>
          <strong>Nama Pemesan:</strong> {nama}
        </p>
        <p>
          <strong>Waktu Perjalanan:</strong> {tanggalMulai} sampai{" "}
          {tanggalSelesai}
        </p>
        <p>
          <strong>Jumlah Peserta:</strong> {jumlahPeserta}
        </p>
        <p>
          <strong>Paket yang Dipilih:</strong>
        </p>
        <ul>
          {paket.map((p) => (
            <li key={p.id}>
              {p.name} - Rp{p.price.toLocaleString()}
            </li>
          ))}
        </ul>
        <p className="text-gray-400">
          <strong className="text-black">Harga Paket Perjalanan:</strong>
          {hargaPaket > 0
            ? `Rp${hargaPaket.toLocaleString()}`
            : "Total harga paket perjalanan anda"}
        </p>
        <p className="text-2xl font-bold">{totalBill}</p>
      </div>
    </section>
  );
};

export default BookingForm;
