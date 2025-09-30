import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillPlayFill, BsPlayCircle } from "react-icons/bs";

const Hero = () => {
  const paragraphTexts = [
    // "A Senyone, notre mission est d’aider les entreprises à développer leur productivité grâce au digital et à des technologies innovantes et mondialement reconnues.",
    // "Nous vous offrons des services de conseil, d’accompagnement et de réalisation autour de vos projets de digitalisation, de dématérialisation, d’intégration et d’automatisation de vos documents et procédures.",
    // "Avec nos solutions, votre business devient plus efficient et productif.",
    "Nous sommes un cabinet de conseil spécialisé dans la transformation numérique par l'automatisation.",
    // "",
    "Notre mission : Vous aider à garder une longueur d'avance en tirant parti des technologies de pointe.",
  ];
  return (
    <div
      id="hero"
      className="grid md:grid-cols-2 justify-center items-center px-20 py-8 md:py-24"
    >
      <div className="grid gap-6 col-span-2d">
        <h1 className="text-[2rem] font-extrabold leading-12">
          {"Révolutionnez votre entreprise​"} <br />
          <span className="text-primary">{"grâce à l’automatisation"}</span>
        </h1>
        <p className="mb-6 leading-8">
          {paragraphTexts.map((text, index) => (
            <span key={index}>
              {text}
              <br />
            </span>
          ))}
        </p>
        <div className="flex flex-wrap gap-6">
          <Link
            href={"#contact"}
            scroll={false}
            className="p-6 py-3 bg-complementary text-white font-bold rounded-full hover:shadow-lg"
          >
            {"Contactez-Nous"}
          </Link>
          <Link
            href={"#"}
            className="flex items-center gap-2 p-6 py-3 bg-white text-complementary shadow font-bold rounded-full hover:shadow-lg"
          >
            <BsPlayCircle size={25} />
            {"Webinaires"}
          </Link>
        </div>
      </div>
      <div className="hidden md:flex w-full h-full relative">
        <Image
          className="object-contain"
          loading="eager"
          fill
          src="/hero3.svg"
          alt="Bot rpa image working with human"
        />
      </div>
    </div>
  );
};

export default Hero;
