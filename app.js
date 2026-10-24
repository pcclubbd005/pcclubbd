
const next = require("next");
const http = require("http");

const app = next({
  dev: false,
  dir: __dirname,
});

const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = http.createServer((req, res) => {
      handle(req, res);
    });

    const port = process.env.PORT || 3000;

    server.listen(port, "0.0.0.0", () => {
      console.log(`Next.js server listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to start Next.js:", error);
    process.exit(1);
  });
