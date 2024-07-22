import { useState, useRef } from "react";
import "./form.css";
import { AnimatePresence, motion } from "framer-motion";
import { pfp } from "@/components/imageImport";
import NavigationPage from "@/components/navigationPage";
import CardProject2 from "@/components/Elements/Card/CardProject2";
export default function FormPortoUpload() {
  const [title, setTitle] = useState("");
  const [label, setLabel] = useState("");
  const [description, setDescription] = useState("");
  const [thumb, setThumb] = useState(null);
  const [figmaUrl, setFigmaUrl] = useState("");
  const [webUrl, setWebUrl] = useState("");
  const [tabs, setTabs] = useState([]);
  const [tools, setTools] = useState([]);
  const [date, setDate] = useState("");
  const [showModal, setShowModal] = useState(false);
  const options = ["Figma", "Website", "Design"];
  const tabsInputRef = useRef(null);
  const toolsInputRef = useRef(null);

  const handleThumbChange = (e) => {
    setThumb(e.target.files[0]);
  };

  const handleTabsChange = (e) => {
    setTabs([...tabs, ...Array.from(e.target.files)]);
  };

  const handleToolsChange = (e) => {
    setTools([...tools, ...Array.from(e.target.files)]);
  };

  const handleRemoveTab = (indexToRemove) => {
    setTabs((prevTabs) =>
      prevTabs.filter((_, index) => index !== indexToRemove),
    );
    tabsInputRef.current.value = "";
  };

  const handleRemoveTool = (indexToRemove) => {
    setTools((prevTools) =>
      prevTools.filter((_, index) => index !== indexToRemove),
    );
    toolsInputRef.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!label) {
      alert("Please select a label");
      return;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("label", label);
    formData.append("description", description);
    formData.append("thumb", thumb);
    formData.append("figmaUrl", figmaUrl);
    formData.append("webUrl", webUrl);
    formData.append("date", date);
    tabs.forEach((tab) => formData.append("tabs", tab));
    tools.forEach((tool) => formData.append("tools", tool));

    try {
      const response = await fetch("http://localhost:4000/api/porto/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Porto uploaded successfully!");
        setShowModal(true);
        setTitle("");
        setLabel("");
        setDescription("");
        setThumb(null);
        setFigmaUrl("");
        setWebUrl("");
        setTabs([]);
        setTools([]);
        setDate("");
        tabsInputRef.current.value = "";
        toolsInputRef.current.value = "";
      } else {
        console.error("Failed to upload porto:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading porto:", error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // component custom select
  function CustomSelect({ options, value, onChange, isRequired }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isTouched, setIsTouched] = useState(false);

    const handleBlur = () => {
      setIsTouched(true);
    };

    return (
      <div className="relative inline-block w-64">
        <button
          onClick={() => setIsOpen(!isOpen)}
          onBlur={handleBlur}
          className={`relative mb-4 flex w-full justify-between border p-2 text-left ${isTouched && isRequired && !value ? "border-red-500" : "border-gray-300"} bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500`}
        >
          {value || "Select Label"}{" "}
          <img
            src="/images/arrow_bottom.svg"
            className={`${isOpen ? "rotate-180" : ""} transition-all`}
          ></img>
        </button>
        {isTouched && isRequired && !value && (
          <div className="mt-1 text-sm text-red-500">
            This field is required
          </div>
        )}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-10 mt-1 w-full border bg-white shadow-lg"
            >
              {options.map((option) => (
                <li
                  key={option}
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className="cursor-pointer p-2 hover:bg-amber-500 hover:text-white"
                >
                  {option}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <main className="">
      <NavigationPage projectTitle="Create porto" />
      <div className="mx-20 my-16 grid grid-cols-6 gap-16">
        <form
          onSubmit={handleSubmit}
          className="col-span-4 flex flex-col border border-zinc-600 p-6"
        >
          <h1 className="mb-4 font-statliches text-5xl">Add New Porto</h1>
          <label className="mb-2">
            Porto Title
            <span className="asterisk">*</span>
          </label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
            placeholder="Website Study Case..."
            className="input-form mb-4"
          />
          <label className="mb-2">
            Porto Label
            <span className="asterisk">*</span>
          </label>
          <CustomSelect options={options} value={label} onChange={setLabel} />
          <h1>{label}</h1>
          <label className="mb-2">
            Porto Description
            <span className="asterisk">*</span>
          </label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="this portfolio remain......"
            className="input-form mb-4 h-[150px]"
          />
          <label className="mb-2">
            Porto Thumb
            <span className="asterisk">*</span>
          </label>
          <input
            type="file"
            onChange={handleThumbChange}
            className="input-thumb mb-4 w-[170px]"
          />
          <label className="mb-2">Figma URL</label>
          <input
            type="text"
            onChange={(e) => setFigmaUrl(e.target.value)}
            value={figmaUrl}
            placeholder="https://yourfigma.url.com"
            className="input-form mb-4 placeholder:font-light placeholder:italic"
          />
          <label className="mb-2">Web URL</label>
          <input
            type="text"
            onChange={(e) => setWebUrl(e.target.value)}
            value={webUrl}
            placeholder="https://yourwebsite.url.com"
            className="input-form mb-4 placeholder:font-light placeholder:italic"
          />
          <label className="mb-2">Porto Tabs</label>
          <input
            type="file"
            multiple
            onChange={handleTabsChange}
            className="input-file mb-4 w-[195px]"
            ref={tabsInputRef}
          />

          {tabs.length > 0 && (
            <motion.div className="mb-4 flex flex-wrap gap-4">
              <AnimatePresence>
                {tabs.map((file, index) => (
                  <motion.div
                    animate={{
                      opacity: 1,
                      x: 0,
                      rotate: 0,
                    }}
                    initial={{
                      opacity: 0,
                      x: "-50px",
                      rotate: "-90deg",
                    }}
                    exit={{
                      opacity: 0.3,
                      x: "100px",
                      rotate: "90deg",
                    }}
                    key={index}
                    className="relative"
                  >
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Preview ${index}`}
                      className="h-32 w-32 border border-zinc-400 object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveTab(index)}
                      className="text-md absolute right-1 top-1 rounded-full bg-red-600 px-2 text-white hover:opacity-80"
                    >
                      X
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          <label className="mb-2">Porto Tools</label>
          <input
            type="file"
            multiple
            onChange={handleToolsChange}
            className="input-file-tools mb-4 w-[133px]"
            ref={toolsInputRef}
          />
          <div className="mb-4">
            {tools.length > 0 && (
              <div className="flex flex-wrap gap-4">
                <AnimatePresence>
                  {tools.map((file, index) => (
                    <motion.div
                      animate={{
                        opacity: 1,
                        x: 0,
                        rotate: 0,
                      }}
                      initial={{
                        opacity: 0,
                        x: "-50px",
                        rotate: "-90deg",
                      }}
                      exit={{
                        opacity: 0.3,
                        x: "100px",
                        rotate: "90deg",
                      }}
                      key={index}
                      className="relative"
                    >
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`Preview ${index}`}
                        className="h-16 w-16 object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveTool(index)}
                        className="absolute right-0 top-0 mr-1 rounded-full bg-red-600 px-2 text-white hover:opacity-80"
                      >
                        X
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
          <label className="mb-2">
            Date portfolio created
            <span className="asterisk">*</span>
          </label>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            className="input-form mb-4"
          />
          <button
            type="submit"
            className="border-2 border-zinc-600 bg-amber-500 px-4 py-2 font-statliches text-2xl text-white"
          >
            Create Porto
          </button>
        </form>
        {/* preview */}
        <aside className="sticky top-8 col-span-2 h-fit">
          <CardProject2>
            {thumb ? (
              <CardProject2.PolaroidImg
                label={label}
                labelstyle={`${label === "Figma" ? "bg-emerald-500" : ""} ${label === "Design" ? "bg-violet-600" : ""}`}
                coverStyle={`
                    ${label === "Figma" ? "bg-emerald-400/20" : ""}
                    ${label === "Design" ? "bg-violet-500/20" : ""}
                  `}
                frame={URL.createObjectURL(thumb)}
              />
            ) : (
              <CardProject2.PolaroidImg
                frame={"/images/placeholder_image.png"}
                label={label ? label : "Label"}
                labelstyle={`${label === "Figma" ? "bg-emerald-500" : ""} ${label === "Design" ? "bg-violet-600" : ""}`}
                coverStyle={`
                    ${label === "Figma" ? "bg-emerald-400/20" : ""}
                    ${label === "Design" ? "bg-violet-500/20" : ""}
                  `}
              />
            )}
            <CardProject2.PolaroidBody
              title={title ? title : "Portfolio Name"}
              desc={description ? description : "Portfolio Description"}
              profile={pfp}
            />
          </CardProject2>

          {tabs.length > 0 ? (
            <section className="mt-4 flex flex-col gap-2 border border-zinc-600 p-4">
              <h1 className="font-statliches text-2xl">Porto Tabs Highlight</h1>
              <div className="flex flex-wrap gap-4">
                {tabs.map((file, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Preview ${index}`}
                      className="h-20 w-20 object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveTab(index)}
                      className="absolute right-0 top-0 mr-1 rounded-full bg-red-600 px-2 text-white hover:opacity-80"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ) : (
            <section className="mt-4 flex flex-col gap-2 border border-zinc-600 p-4">
              <h1 className="font-statliches text-2xl">Porto Tabs Highlight</h1>
            </section>
          )}
          {/* Porto tools */}
          {tools.length > 0 ? (
            <section className="mt-4 flex flex-col gap-2 border border-zinc-600 p-4">
              <h1 className="font-statliches text-2xl">Porto tools</h1>
              <div className="flex flex-wrap gap-4">
                {tools.map((file, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Preview ${index}`}
                      className="h-16 w-16 object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveTool(index)}
                      className="absolute right-0 top-0 mr-1 rounded-full bg-red-600 px-2 text-white hover:opacity-80"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ) : (
            <section className="mt-4 flex flex-col gap-2 border border-zinc-600 p-4">
              <h1 className="font-statliches text-2xl">Porto Tools</h1>
            </section>
          )}
        </aside>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="rounded bg-white p-6 text-center shadow-lg">
              <p className="mb-4">Porto telah terupload!</p>
              <button
                onClick={closeModal}
                className="rounded bg-blue-500 px-4 py-2 text-white"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
