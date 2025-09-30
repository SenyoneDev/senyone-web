import Image from "next/image";
import React from "react";

const Partners = () => {
  const partners = [
    {
      name: "uipath partner",
      image:
        "https://craftware.com/wp-content/uploads/2019/12/UiPath-Partner.png",
    },
    {
      name: "Orange",
      image:
        "https://dimelo-answers-production.s3-eu-west-1.amazonaws.com/268/eb5357e38a01482f/logo_orange_hd_large.png?e390ccc",
    },
    {
      name: "Atos",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d6/Atos_logo.png",
    },
    {
      name: "cbao",
      image: "https://upload.wikimedia.org/wikipedia/fr/a/a1/Logo-cbao.png",
    },
    {
      name: "wave",
      image: "https://www.wave.com/img/nav-logo.png",
    },
    {
      name: "uipath partner",
      image:
        "https://craftware.com/wp-content/uploads/2019/12/UiPath-Partner.png",
    },
  ];
  return (
    <div className="grid gap-8 p-16 md:px-24  bg-[#F8F9F9] ">
      <h2>Ils nous font confiance</h2>
      <p className="md:w-[40%] mx-auto text-center text-sm text-black">
        {
          "Nous avons eu le plaisir de travailler avec des marques qui définissent l'industrie. Ce ne sont que quelques-uns d'entre eux."
        }
      </p>
      <div className="md:w-[75%] mx-auto flex flex-wrap gap-12 justify-center items-center">
        {partners.map((partner, index) => (
          <div className="h-8 w-24 relative" key={partner.image + index}>
            <Image
              fill
              className="object-contain object-center hover:scale-150 transition-all duration-500 cursor-pointer"
              src={partner.image}
              alt={partner.name + " logo"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
