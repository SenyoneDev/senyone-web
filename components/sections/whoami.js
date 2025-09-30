import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsPlayCircle } from "react-icons/bs";

const Whoami = () => {
  const paragraphTexts = [
    "SENYONE conseille et supporte les entreprises dans la transformation digitale, l’innovation et l’automatisation de leurs procédures. Notre équipe d’experts est forte d’une vaste expérience de ce type de projets à travers l’Europe, l’Afrique et le Moyen-Orient.",
    "Nous sommes un collectif de collaborateurs travaillant chaque jour pour vous apporter les meilleurs conseils et les meilleures idées pour vos projets. L'objectif de notre entreprise est de vous apporter notre expertise, notre énergie et notre état d'esprit pour contribuer à la réussite de votre projet.",
    "Notre réseau international de partenaires renforce notre savoir-faire et nos capacités à vous fournir les meilleures solutions, services et accompagnement pour la réussite de votre projet.",
  ];
  return (
    <section
      id="whoami"
      className="grid md:grid-cols-3 gap-8 justify-center items-center bg-[#FBFBFB] px-12 md:px-20 py-16 md:py-24"
    >
      <div className="grid gap-6 order-2 col-span-2">
        <h1 className="text-2xl md:text-3xl font-bold text-primary leading-12">
          Qui Sommes-Nous ?
        </h1>
        <p className="mb-6 leading-9 text-justify">
          {paragraphTexts.map((text, index) => (
            <span key={index}>
              {text}
              <br />
            </span>
          ))}
        </p>
        <Link
          href={"#"}
          className="flex items-center gap-2 p-6 py-3 bg-white text-complementary shadow font-bold rounded-full w-fit hover:shadow-lg"
        >
          <BsPlayCircle size={25} />
          {"Présentation"}
        </Link>
      </div>
      <div className="grid gap-8 justify-center order-1">
        <Image width={134} height={166} src={"/Logo.svg"} alt="logo senyone" />
        <div className="text-4xl font-extrabold flex flex-col text-primary">
          Think.
          <span className="text-complementary">Automate.</span>
          Rework.
        </div>
      </div>
    </section>
  );
};

export default Whoami;
