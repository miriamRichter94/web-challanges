import { createServer, request } from "node:http";

export const server = createServer((request, response) => {
  switch (request.url) {
    case "/api/fish/1":
      response.statusCode = 202;
      response.end("Shrimp");
      break;
    case "/api/fish/2":
      response.statusCode = 202;
      response.end("Anemonefish");
      break;
    default:
      response.statusCode = 404;
      response.end("Not Found");
  }
});
