import { User } from "../entities/user.entities.ts";
import { Cat } from "../entities/cat.entities.ts";

import xlsx from "xlsx";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __dirsource = path.join(__dirname, "..");

export const generate = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const user: any = await User.findAll({
        raw: true,
      });
      const cat: any = await Cat.findAll({
        raw: true,
      });
      let workbook = xlsx.utils.book_new();
      let UserSheet = xlsx.utils.json_to_sheet(user)
      xlsx.utils.book_append_sheet(workbook, UserSheet, "User");
      let CatSheet = xlsx.utils.json_to_sheet(cat)
      xlsx.utils.book_append_sheet(workbook, CatSheet, "Cat");
      xlsx.writeFile(workbook, __dirsource + "/crawl/crawl_data.xlsx")

      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};
