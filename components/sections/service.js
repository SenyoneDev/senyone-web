import React from "react";
import { TbCodeOff, TbRobot } from "react-icons/tb";
import { GiMagnifyingGlass } from "react-icons/gi";
import { SiRobotframework } from "react-icons/si";
import Link from "next/link";

const services = [
  {
    id: "assistant",
    title: "Assistance Projet",
    descriptions: [
      "Cadrage et aide au choix de solutions",
      "Conduite du Changement",
      "Gestion de Projet",
    ],
  },
  {
    id: "rpa",
    title: "Automatisation de processus (Smart Automation)",
    descriptions: [
      "Numérisation de documents",
      "Digitalisation de processus",
      "Intégrations d’applications",
      "Automatisation de processus",
    ],
  },
];
const icons = {
  assistant: TbRobot,
  rpa: TbCodeOff,
};
const Service = () => {
  const colors = ["complementary", "complementary"];

  return (
    <section
      id="services"
      className="grid md:grid-cols-2 gap-24 bg-primary -complementary -contrast -[#F8F9F9] justify-center items-center px-12 md:px-20 py-24"
    >
      <div className="grid gap-3 text-white">
        <div>
          <h2 className="text-white -complementary  text-sms text-left leading-9">
            Services
          </h2>
          <div className="text-white mb-4 mt-4 text-xl">
            Vous recherchez un partenaire pour vous aider à construire la
            transformation organisationnelle et technologique de votre
            entreprise ? Ne cherchez pas plus loin.
          </div>
        </div>
        <p className="text-md leading-7 text-left mb-3 text-justify">
          {`Nous aidons les directions financières, logistiques, ressources humaines, les responsables informatiques dans leur besoin d’optimiser et d’améliorer leurs processus digitaux. Nous co-construisons avec vous des solutions afin d’améliorer la fiabilité et la disponibilité de vos informations en réduisant - ou en éliminant - l’intervention humaine sur des tâches répétitives, manuelles, chronophages, en un mot non valorisantes.`}
        </p>
        <Link href={"/#contact"}>
          <Button value={"Avoir plus d'infos"} />
        </Link>
      </div>
      <div className="grid gap-8">
        {services.map((service, index) => (
          <Card
            {...service}
            color={colors[index]}
            key={service.id + index}
            Icon={icons[service.id]}
          />
        ))}
      </div>
    </section>
  );
};

export default Service;

const Card = ({ title, descriptions, color, Icon }) => {
  return (
    <div
      className={`max-w-96 grid gap-3 bg-white text-center p-6  rounded-xl shadow-lg border-b-4 border-${color}`}
    >
      <div
        className={`flex w-fit h-fit p-2 rounded-full mx-auto bg-${color} text-white`}
      >
        <Icon size={30} />
      </div>
      <h3 className="text-xl mx-auto my-1 font-bold">{title}</h3>
      <ul className="text-md text-black">
        {descriptions.map((description, index) => {
          return <li key={index}>{description}</li>;
        })}
      </ul>
    </div>
  );
};

const Button = ({ value }) => (
  <button className="p-4 py-3 bg-complementary text-white text-sm font-bold rounded-full hover:shadow-lg">
    {value}
  </button>
);
