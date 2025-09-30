import React from "react";
import styles from "../styles/confidentiality.module.css";

const conditions = () => {
  return (
    <div className={styles.confidentiality}>
      <h1>Conditions d’utilisation du site Senyone </h1>
      <p>
        {`En accédant et en utilisant le site Web de Senyone (le « Site »), vous
        acceptez d’être lié par les conditions d’utilisation suivantes (les «
        Conditions »). Si vous n’acceptez pas ces conditions, veuillez ne pas
        utiliser le site Web. `}
      </p>
      <h2>Conduite interdite  </h2>
      <p>
        {`Vous acceptez de ne pas utiliser le site Web à des fins illégales ou non
        autorisées, ou d’une manière qui viole les présentes conditions ou toute
        loi ou réglementation applicable. Vous acceptez également de ne pas : `}
      </p>
      <ul>
        <li>
          {`Utiliser le site Web d’une manière qui pourrait endommager,
          désactiver, surcharger ou détériorer le site Web ou interférer avec
          l’utilisation du site Web par toute autre partie ; `}
        </li>
        <li>
          {`Utiliser tout moyen automatisé, y compris, mais sans s’y limiter, des
          robots, des araignées ou des outils d’exploration de données, pour
          accéder ou extraire des données du site Web sans notre consentement
          écrit exprès ; `}
        </li>
        <li>
          {`Tenter d’obtenir un accès non autorisé à tout service ou compte sur le
          site Web ; `}
        </li>
        <li>
          {`Utiliser le site Web pour transmettre des virus, des vers, des
          logiciels malveillants ou tout autre code nuisible ou malveillant ;  `}
        </li>
        <li>
          {`Utiliser le site Web pour s’engager dans des activités qui seraient
          considérées comme du spamming, de l’hameçonnage ou autrement
          frauduleux ; `}
        </li>
        <li>
          {`Utiliser le site Web pour enfreindre les droits de propriété
          intellectuelle d’autrui. `}
        </li>
      </ul>
      <h2>Informations sur le compte </h2> <br />
      <p>
        {`Certaines zones du site Web peuvent vous obliger à créer un compte. Vous
        êtes responsable du maintien de la confidentialité des informations de
        votre compte, y compris votre mot de passe, et de toutes les activités
        qui se produisent sous votre compte. Vous acceptez de nous informer
        immédiatement de toute utilisation non autorisée de votre compte. `}
      </p>
      <h2>Contenu </h2>
      <br />
      <p>
        {`Le site Web peut contenir du contenu généré par les utilisateurs, tels
        que des commentaires, des critiques et des évaluations. En soumettant du
        contenu sur le site Web, vous accordez à la Société une licence
        perpétuelle, non exclusive, libre de redevances, entièrement payée et
        mondiale pour utiliser, reproduire, distribuer, modifier, créer des
        œuvres dérivées, afficher publiquement et exécuter votre contenu dans
        tout média ou format, et sur n’importe quelle plate-forme, sans avoir
        besoin d’une autre autorisation ou d’un paiement de votre part. `}
        <br /> <br />
        {`La Société ne cautionne aucun contenu généré par l’utilisateur et n’est
        pas responsable de l’exactitude, de l’exhaustivité ou de la fiabilité de
        tout contenu généré par l’utilisateur. La Société peut supprimer tout
        contenu généré par l’utilisateur qui viole les présentes Conditions ou
        qu’elle juge offensant ou inapproprié. `}
      </p>
      <h2>Modifications de cette politique de confidentialité</h2>
      <p>
        {`Nous pouvons mettre à jour cette politique de confidentialité de temps à
        autre. Si nous apportons des modifications, nous vous en informerons en
        révisant la date en haut de cette page et, si les modifications sont
        importantes, nous vous fournirons un avis plus visible.`}
      </p>
      <h2>Modifications</h2>
      <p>
        {`La Société se réserve le droit de modifier ces Conditions à tout moment,
        et votre utilisation continue du Site Web après tout changement indique
        votre acceptation des nouvelles Conditions. `}
      </p>
      <h2>Contactez-nous</h2>
      <p>
        Si vous avez des questions ou des préoccupations concernant ces
        Conditions, veuillez nous contacter à contact@senyone.sn  
        <br />
        <br />
        Date d’entrée en vigueur : 01 janvier 2023
        <br />
        <br />
        <br />
        {"Merci d'utiliser le site Senyone. "}
      </p>
    </div>
  );
};

export default conditions;
