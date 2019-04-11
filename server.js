const express = require("express");
const path = require("path");
const middleware = require("./middleware");
const port = process.env.PORT || 3030;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use express static
if (process.env.NODE_ENV !== "production") {
  app.use(express.static(path.join(__dirname, "./build")));
}

app.get("/request", (req, res) => {
  if (process.env.NODE_ENV !== "production") {
    res.sendFile(path.join(__dirname, "./build/index.html"));
    res.json();
  }
});

app.get("/holidays", middleware);

app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    console.info(`we have an express powered server running on port: ${port}`);
  }
});
