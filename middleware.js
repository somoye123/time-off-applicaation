const http = require("https");
const keys = require("./keys");

const externalRequest = (req, res) => {
  http.get(
    keys.url,
    {
      headers: { "Content-Type": "application/json" }
    },
    response => {
      let body = "";
      response
        .on("data", chunk => {
          body += chunck.toString();
        })
        .on("end", () => {
          const parsed = JSON.parse(body);
          // change parse to object to JSON
          res.write(JSON.stringify(parsed));
          res.end();
        });
    }
  );
};
module.exports = externalRequest;
