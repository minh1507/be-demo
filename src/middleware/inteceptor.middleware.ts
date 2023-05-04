import Log4js from "log4js";
import fs from "fs";

import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __dirsource = path.join(__dirname, "..", "..");

Log4js.configure({
  appenders: { log: { type: "file", filename: "log.log" } },
  categories: { default: { appenders: ["log"], level: "error" } },
});

const interceptor = (req: any, res: any, next: any) => {
  const logger = Log4js.getLogger(req.method);
  if(countFileLines(__dirsource + "/log.log") == 1000)
  {
    fs.truncate(__dirsource + "/log.log", 0, function(){})
  }
  logger.fatal("Remote: " + req.headers.origin + ", path: " + req.url);
  next();
};

function countFileLines(filePath: any) {
  var fileBuffer = fs.readFileSync(filePath);
  var to_string = fileBuffer.toString();
  var split_lines = to_string.split("\n");
  return split_lines.length - 1;
}

export default interceptor;
