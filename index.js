const express = require("express");

const server = express();

const handleProfileReq = (req, res) => {
  res.send("<h1>Profile page</h1>");
  res.end();
};

server.get("/", (req, res) => {
  res.send("Get request to the homepage");
  res.end();
});

server.post("/", (req, res) => {
  res.send("Post request to the homepage");
  res.end();
});

// server.use("/profile/", handleProfileReq);

// server.use("/", (req, res) => {
//   res.send("Home page");
//   res.end();
// });

server.listen(8000, () => console.log("Server is running on port 8000"));
