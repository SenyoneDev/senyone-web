import React from "react";
import styles from "../styles/confidentiality.module.css";

const legales = () => {
  return (
    <div className={styles.confidentiality}>
      <h1>Mentions légales pour le site Senyone </h1>
      <p>
        {`Le site web Senyone (le « Site Web ») est détenu et exploité par Senyone
        (la « Société »). En accédant au site Web et en l’utilisant, vous
        acceptez d’être lié par les modalités et conditions suivantes (les «
        modalités »). Si vous n’acceptez pas ces conditions, veuillez ne pas
        utiliser le site Web.  `}
      </p>
      <h2>Contenu </h2>
      <p>
        {`Le contenu du site Web, y compris, mais sans s’y limiter, le texte, les
        images, les graphiques et tout autre matériel (« contenu »), est fourni
        à titre informatif général uniquement. La Société ne fait aucune
        déclaration ou garantie d’aucune sorte, expresse ou implicite,
        concernant l’exhaustivité, l’exactitude, la fiabilité, la pertinence ou
        la disponibilité en ce qui concerne le site Web ou le contenu. `}
        <br />
        <br />
        {`La Société se réserve le droit d’apporter des modifications ou des mises
        à jour au Site Web ou au Contenu à tout moment sans préavis. `}
      </p>
      <h2>Propriété intellectuelle </h2> <br />
      <p>
        {`Le contenu du site Web est protégé par les lois sur le droit d’auteur,
        les marques de commerce et autres lois sur la propriété intellectuelle.
        La Société vous accorde une licence personnelle, non exclusive, non
        transférable et limitée pour accéder et utiliser le site Web et le
        contenu pour votre usage personnel et non commercial.`}
        <br />
        <br />
        Vous ne pouvez pas reproduire, distribuer, modifier, créer des œuvres
        dérivées, afficher publiquement, exécuter publiquement, republier,
        télécharger, stocker ou transmettre tout Contenu sans le consentement
        écrit préalable de la Société. 
      </p>
      <h2>Liens vers des sites Web tiers </h2> <br />
      <p>
        {`Le site Web peut contenir des liens vers des sites Web de tiers. La
        Société n’est pas responsable du contenu ou de l’exactitude de ces sites
        Web tiers et ne cautionne aucun des produits ou services offerts sur ces
        sites Web.`}
      </p>
      <h2>Limitation de responsabilité </h2>
      <br />
      <p>
        {`La Société ne sera pas responsable des dommages, y compris, mais sans
        s’y limiter, les dommages directs, indirects, spéciaux, accessoires ou
        consécutifs, résultant de l’utilisation ou de l’incapacité d’utiliser le
        site Web ou le contenu.`}
      </p>
      <h2>Modifications de cette politique de confidentialité</h2>
      <p>
        Nous pouvons mettre à jour cette politique de confidentialité de temps à
        autre. Si nous apportons des modifications, nous vous en informerons en
        révisant la date en haut de cette page et, si les modifications sont
        importantes, nous vous fournirons un avis plus visible.
      </p>
      <h2>Loi applicable </h2>
      <p>
        {`Les présentes Conditions sont régies et interprétées conformément aux
        lois de l’État du Sénégal, sans donner effet aux principes de conflits
        de lois. `}
      </p>
      <h2>Contactez-nous</h2>
      <p>
        Si vous avez des questions ou des préoccupations concernant ces
        Conditions, veuillez nous contacter à contact@senyone.sn  
        <br />
        <br />
        {`Date d’entrée en vigueur : 01 janvier 2023`}
        <br />
        <br />
        <br />
        Merci de visiter le site web de Senyone. 
      </p>
    </div>
  );
};

export default legales;
