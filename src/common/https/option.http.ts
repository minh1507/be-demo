import fs from "fs";

var privateKey = fs.readFileSync(
  __dirname + "/certificate/selfsigned.key",
  "utf8"
);
var certificate = fs.readFileSync(
  __dirname + "/certificate/selfsigned.crt",
  "utf8"
);

var options = {
  key: privateKey,
  cert: certificate,
  requestCert: false,
  rejectUnauthorized: false,
};
