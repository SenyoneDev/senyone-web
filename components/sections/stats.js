import React from "react";

const Stats = () => {
  return (
    <div className="grid gap-8 pt-16z">
      <ul className="flex items-center gap-6 justify-around p-14 bg-primary flex-wrap">
        <Item label={"De femmes dans les formations"} chiffre={"50%"} />
        <Item label={"De femmes dans les formations"} chiffre={"385"} />
        <Item label={"De femmes dans les formations"} chiffre={"96"} />
        <Item label={"De femmes dans les formations"} chiffre={"124"} />
      </ul>
    </div>
  );
};

export default Stats;

const Item = ({ chiffre, label }) => {
  return (
    <li className="text-white grid gap-4 text-center w-48">
      <span className="text-4xl font-extrabold">{chiffre}</span>
      <p>{label}</p>
    </li>
  );
};
