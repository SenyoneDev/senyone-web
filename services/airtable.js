var Airtable = require("airtable");

export function subscribeToNewsletter(email) {
  var base = new Airtable({
    apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
  }).base("app60onOIQJkwgj2D");
  base("subcribers").create(
    [
      {
        fields: {
          Email: email,
        },
      },
    ],
    function (err, records) {
      if (err) {
        console.error(err);
        return;
      }

      return true;
    }
  );
}
