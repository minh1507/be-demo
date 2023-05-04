https: configuration

import https from "https";
https.createServer(options, app).listen(port, function () {
  console.log(`Domain: ${process.env.ROOT_DOMAIN}: ${port}`);
});

=> option from common/https