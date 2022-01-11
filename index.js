const http = require("http");

const handleAllRequests = (res, req) => {
  const url = req.url;

  if (url == "/") res.write("Home Page");
  else if (url == "/about") res.write("About Page");

  res.end();
};

const server = http.createServer(handleAllRequests);

server.listen(8000, () => console.log("Server is running on port 8000"));
