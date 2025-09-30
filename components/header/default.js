import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";

const DefaultHeader = () => {
  const [fixeMenu, setFixeMenu] = useState(false);
  const MENUSIZE = 15;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setFixeMenu(window.scrollY > MENUSIZE ? true : false);
    });

    return () => {
      window.addEventListener("scroll", () => {
        setFixeMenu(window.scrollY > MENUSIZE ? true : false);
      });
    };
  }, []);

  return (
    <div
      className={`w-full flex justify-between items-center py-5 px-12 bg-white shadow z-50 ${
        fixeMenu ? "fixed" : "relative"
      }`}
    >
      <Link href={"/"} className="flex justufy-center items-center gap-3">
        <Image width={35} height={21} src="/Logo.svg" alt="Logo senyone" />
        <span className="text-xl font-bold text-primary">Senyone</span>
      </Link>
      <nav>
        <ul className="hidden md:flex gap-10 text-semibold">
          <li className="active">
            <Link href="/#hero" scroll={false}>
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/#whoami" scroll={false}>
              Qui Sommes-Nous
            </Link>
          </li>
          <li>
            <Link href="/#services" scroll={false}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/#blog" scroll={false}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <Link className="hidden md:flex" href="/#contact" scroll={false}>
        <Button value={"Contactez-Nous"} />
      </Link>
      <div className="md:hidden p-2 border rounded-lg border-primary text-complementary font-bold">
        <RiMenu3Fill size={20} />
      </div>
    </div>
  );
};

export default DefaultHeader;

const Button = ({ value }) => (
  <button className="p-4 py-2 border-2 border-primary text-complementary font-bold rounded-full hover:border-complementary">
    {value}
  </button>
);
