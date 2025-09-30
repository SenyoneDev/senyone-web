import React from "react";
import Form from "../Form";

const Maintenance = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800">🚧 Site en maintenance</h1>
            <p className="mt-4 text-lg text-gray-600">
              Nous travaillons actuellement sur une mise à jour.  
              Merci de revenir un peu plus tard.
            </p>
          </div>
        </div>
      );
};

export default Maintenance;
