import axios from "axios";
import React from "react";

const inputs = [
  {
    label: "Prénom *",
    type: "text",
    id: "firstname",
    style: "order-1",
  },
  {
    label: "Nom *",
    type: "text",
    id: "lastname",
    style: "order-2",
  },
  {
    label: "Email *",
    type: "email",
    id: "email",
    style: "col-span-2 order-4",
  },
  {
    label: "Télephone",
    type: "tel",
    id: "tel",
    style: "order-5",
  },
  {
    label: "Entreprise",
    type: "text",
    id: "entreprise",
    style: "order-6",
  },
];

const Form = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const mail = {
      subject: data.subject,
      message: `
      Nom : ${data.firstname + " " + data.lastname}
      Email : ${data.email} 
      Télephone : ${data.tel}
      Entreprise : ${data.entreprise}
      Message : ${data.message}`,
    };
    const res = await axios.post("/api/mailer", mail, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status === 200) {
      alert("Message envoyé");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center gap-8"
    >
      <div className="grid md:grid-cols-4 md:grid-rows-4 md:gap-x-10 gap-6 p-6 md:p-14 bg-white shadow-form rounded-2xl">
        {inputs.map((item, index) => (
          <Input item={item} key={index + item.id} />
        ))}
        <div className="flex flex-col col-span-2 gap-2 row-span-4 order-6 md:order-3">
          <label className="text-sm font-semibold" htmlFor={"object"}>
            {"Objet de la demande"}
          </label>
          <select
            id="object"
            name="subject"
            className="rounded-lg w-full border-[#969696] border-1 focus:border-primary focus:ring-0 outline-none"
          >
            <option value="Demande de services">Demande de services</option>
            <option value="Demande de démontrations">
              Demande de démontrations
            </option>
            <option value="Prise de rendez-vous">Prise de rendez-vous</option>
            <option value="Demande de d'informations">{`Demande de d'informations`}</option>
          </select>
          <label
            name="message"
            htmlFor="message"
            className="h-fit text-sm font-semibold"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            className="rounded-lg h-64 md:h-full border-[#969696] resize-none mb-6  focus:border-primary focus:ring-0 outline-none"
          ></textarea>
          <div className="flex items-center gap-6">
            <p className="text-xs text-[#969696]">
              {`Nous sommes fiers de notre équipe d'assistance clientèle
              diligente. Notre équipe de professionnels du support client est là
              pour répondre à vos questions sur notre service. Utilisez le
              formulaire de contact à droite pour nous contacter, et nous vous
              répondrons dans les plus brefs délais.`}
            </p>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="p-8 py-3 bg-complementary text-white text-sm font-bold rounded-full w-fit uppercase  hover:shadow-lg transition-all duration-300"
      >
        envoyer
      </button>
    </form>
  );
};

export default Form;

const Input = ({ item }) => {
  const { label, type, id, style } = item;
  return (
    <div className={`grid gap-2 ${style} `}>
      <label className="text-sm font-semibold" htmlFor={id}>
        {label}
      </label>
      <input
        className="rounded-lg w-full border-[#969696] border-1 focus:border-primary focus:ring-0 outline-none"
        type={type}
        name={id}
        id={id}
        required
      />
    </div>
  );
};
