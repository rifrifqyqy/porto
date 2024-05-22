import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function FooterSection() {
  const headerStyle = "font-statliches text-[20px]";
  let menuFooter = "hover:text-gray-50 transition-all duration-300";
  // fungsi email
  const [message, setMessage] = useState("Hello, I'm interested in hiring you");
  const handleEmailButtonClick = () => {
    const subject = "Kami Tertarik Menyambut Anda di Tim Kami";
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=rifqyh22@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.open(gmailLink, "_blank");
  };

  return (
    <>
      <footer className="grid grid-cols-2 text-white bg-[#0D1A22] justify-between px-24 py-10 mt-16" id="contact">
        <h1 className={`${headerStyle} text-[32px]`}>RIFQY HAMDANI</h1>
        <section className="grid grid-cols-2">
          <div className="flex flex-col justify-self-center gap-2">
            <h1 className={`${headerStyle}`}>Quicklines</h1>
            <div className="flex flex-col gap-2 text-gray-300">
              <a href="#home" className={menuFooter}>
                Home
              </a>
              <a href="#about" className={menuFooter}>
                About
              </a>
              <a href="#porto" className={menuFooter}>
                Projects
              </a>
              <a href="#contact" className={menuFooter}>
                Contacts
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h1 className={`${headerStyle}`}>CONTACT ME</h1>
              <div className="flex gap-3">
                <img src="images/sosmed/facebook.svg" alt="" />
                <img src="images/sosmed/insta.svg" alt="" />
                <img src="images/sosmed/whatsapp.svg" alt="" />
                <img src="images/sosmed/gmail.svg" alt="" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className={`${headerStyle}`}>SEND US LETTER</h1>
              <form className="flex w-full max-w-sm items-center space-x-2">
                <Input id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Hello, I'm interested in hiring you" className="focus-visible:ring-sky-700 rounded-none h-full text-gray-600" />
                <Button onClick={handleEmailButtonClick} className="group h-fit bg-sky-700 rounded-none hover:bg-sky-600">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-45 group-hover:rotate-0 transition-all duration-300 w-[28px] h-[34px]">
                    <path
                      d="M21.4354 2.58198C20.9352 2.0686 20.1949 1.87734 19.5046 2.07866L3.408 6.75952C2.6797 6.96186 2.16349 7.54269 2.02443 8.28055C1.88237 9.0315 2.37858 9.98479 3.02684 10.3834L8.0599 13.4768C8.57611 13.7939 9.24239 13.7144 9.66956 13.2835L15.4329 7.4843C15.723 7.18231 16.2032 7.18231 16.4934 7.4843C16.7835 7.77623 16.7835 8.24935 16.4934 8.55134L10.72 14.3516C10.2918 14.7814 10.2118 15.4508 10.5269 15.9702L13.6022 21.0538C13.9623 21.6577 14.5826 22 15.2628 22C15.3429 22 15.4329 22 15.513 21.9899C16.2933 21.8893 16.9135 21.3558 17.1436 20.6008L21.9156 4.52479C22.1257 3.84028 21.9356 3.09537 21.4354 2.58198Z"
                      className="fill-[#ffffff]"
                    />
                  </svg>
                </Button>
              </form>
            </div>
          </div>
        </section>
        <div className="border-t-2 h-full flex justify-center items-center col-span-2 mt-8">
          <h1>© 2024 Rifqy Portfolio. All rights reserved</h1>
        </div>
      </footer>
    </>
  );
}
