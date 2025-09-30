import React from "react";
import styles from "../styles/confidentiality.module.css";

const confidentiality = () => {
  return (
    <div className={styles.confidentiality}>
      <h1>Politique de confidentialité de Senyone </h1>
      <p>
        Chez Senyone, nous respectons votre vie privée et nous nous engageons à
        la protéger. Cette politique de confidentialité explique comment nous
        recueillons, utilisons et partageons vos informations personnelles
        lorsque vous utilisez notre site Web, nos produits et nos services. 
      </p>
      <h2>Informations que nous recueillons </h2>
      <p>
        Nous recueillons des informations auprès de vous lorsque vous utilisez
        notre site Web, nos produits et nos services, notamment : <br />
        {`Informations personnelles telles que votre nom, votre adresse e-mail et
        votre numéro de téléphone lorsque vous créez un compte, ou nous
        contactez, informations sur votre activité de navigation et d’achat sur
        notre site Web, informations sur votre appareil et votre connexion
        Internet, y compris votre adresse IP, le type de navigateur et le
        système d’exploitation. `}
      </p>
      <h2>Comment nous utilisons vos informations</h2> <br />
      <p>
        Nous utilisons les informations que nous recueillons auprès de vous pour
        :
      </p>
      <ul>
        <li> Traiter et exécuter vos commandes ; </li>
        <li> Fournir un soutien à la clientèle ; </li>
        <li>
          Communiquer avec vous au sujet de votre compte et de nos produits et
          services ; 
        </li>
        <li> Améliorer notre site Web, nos produits et nos services ; </li>
        <li>
          Vous envoyer des e-mails et des offres promotionnels (si vous avez
          choisi de recevoir de telles communications). {" "}
        </li>
      </ul>
      <h2>Partage de vos informations</h2> <br />
      <p>
        Nous ne partagerons pas vos informations personnelles avec des tiers,
        sauf si :
      </p>
      <ul>
        <li>
          Il est nécessaire pour exécuter votre commande ou vous fournir un
          service ;
        </li>
        <li>Nous sommes tenus par la loi de divulguer vos informations ; </li>
        <li>
          {`Nous croyons qu’il est nécessaire de protéger nos droits ou notre
          propriété.`}
        </li>
      </ul>
      <h2>Sécurité</h2>
      <br />
      <p>
        {`Nous prenons des mesures raisonnables pour protéger vos renseignements
        personnels contre tout accès, utilisation ou divulgation non autorisés.
        Cependant, aucune méthode de transmission sur Internet ou de stockage
        électronique n’est sécurisée à 100% et nous ne pouvons garantir la
        sécurité de vos informations.`}
      </p>
      <h2>Modifications de cette politique de confidentialité</h2>
      <p>
        Nous pouvons mettre à jour cette politique de confidentialité de temps à
        autre. Si nous apportons des modifications, nous vous en informerons en
        révisant la date en haut de cette page et, si les modifications sont
        importantes, nous vous fournirons un avis plus visible.
      </p>
      <h2>Contactez-nous</h2>
      <p>
        Si vous avez des questions ou des préoccupations concernant cette
        politique de confidentialité ou notre utilisation de vos informations
        personnelles, veuillez nous contacter.
        <br />
        <br />
        Courriel : contact@senyone.sn  
        <br />
        <br />
        {`Date d’entrée en vigueur : 01 janvier 2023`}
        <br />
        <br />
        <br />
        {`Merci d’avoir choisi Senyone `}
      </p>
    </div>
  );
};

export default confidentiality;
