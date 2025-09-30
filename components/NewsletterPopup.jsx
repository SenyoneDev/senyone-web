import React from "react";
import { subscribeToNewsletter } from "../services/airtable";

const NewsletterPopup = ({ closePopup, defaultState = false }) => {
  const [subscribed, setSubscribed] = React.useState(defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDatas = new FormData(e.target);
    const email = formDatas.get("email");
    subscribeToNewsletter(email);
    setSubscribed(true);
  };
  return (
    <div className="h-screen w-full grid justify-center items-center fixed bottom-0 left-0 z-10 bg-popup">
      {subscribed == false ? (
        <form onSubmit={handleSubmit}>
          <div className="relative w-[500px] h-fit grid justify-center items-center gap-6 px-6  py-8 bg-white rounded-3xl">
            {/* close icon */}
            <div
              onClick={closePopup}
              className="absolute top-2 right-2 rounded-full p-2 flex justify-end"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-600 cursor-pointer"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.293 3.293a1 1 0 011.414 0L10 8.586l5.293-5.293a1 1 0 111.414 1.414L11.414 10l5.293 5.293a1 1 0 01-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 01-1.414-1.414L8.586 10 3.293 4.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <h3 className="text-black text-xl font-bold text-center leading-8">
              {"Inscrivez-vous à notre newsletter"}
            </h3>
            <p className="text-gray-500 text-center">
              {"Recevez nos dernières actualités et nos offres exclusives !"}
            </p>
            <div className="flex gap-4">
              <input
                required
                className="w-full h-12 px-4 rounded-2xl border border-gray-300"
                name="email"
                type={"email"}
                placeholder={"Votre adresse email"}
              />
              <input
                className="text-white font-semibold capitalize hover:cursor-pointer bg-primary p-3 px-6 rounded-2xl h-fit"
                type={"submit"}
                value={"S'inscrire"}
              />
            </div>
          </div>
        </form>
      ) : (
        <div className="bg-white grid p-8 rounded-large">
          <h3 className="text-black text-xl font-bold text-center leading-8 mb-2">
            {"Merci pour votre inscription !"}
          </h3>
          <p className="text-gray-500 text-center mb-4">
            {
              "Vous recevrez nos dernières actualités et nos offres exclusives !"
            }
          </p>
          <input
            className="w-fit text-white mx-auto font-semibold capitalize hover:cursor-pointer bg-primary p-2 px-8 rounded-lg h-fit"
            type={"button"}
            value={"Fermer"}
            onClick={closePopup}
          />
        </div>
      )}
    </div>
  );
};

export default NewsletterPopup;
