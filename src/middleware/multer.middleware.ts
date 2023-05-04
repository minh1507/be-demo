import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __dirsource = path.join(__dirname, "..");

export const png = multer.diskStorage({
  destination: function (req: any, file: any, callback: any) {
    if (file.mimetype == "image/png") {
      callback(null, __dirsource + "/files" + "/png");
    }
  },
  filename: function (req: any, file: any, callback: any) {
    if (file.mimetype == "image/png") {
      callback(null, Buffer.from(file.originalname, "latin1").toString("utf8"));
    }
  },
});

export const zip = multer.diskStorage({
  destination: function (req: any, file: any, callback: any) {
    if (
      file.mimetype == "application/zip" ||
      file.mimetype == "application/x-7z-compressed"
    ) {
      callback(null, __dirsource + "/files" + "/zip");
    }
  },
  filename: function (req: any, file: any, callback: any) {
    if (
      file.mimetype == "application/zip" ||
      file.mimetype == "application/x-7z-compressed"
    ) {
      callback(null, Buffer.from(file.originalname, "latin1").toString("utf8"));
    }
  },
});

export const mp4 = multer.diskStorage({
  destination: function (req: any, file: any, callback: any) {
    if (file.mimetype == "video/mp4") {
      callback(null, __dirsource + "/files" + "/mp4");
    }
  },
  filename: function (req: any, file: any, callback: any) {
    if (file.mimetype == "video/mp4") {
      callback(null, Buffer.from(file.originalname, "latin1").toString("utf8"));
    }
  },
});

export const rar = multer.diskStorage({
  destination: function (req: any, file: any, callback: any) {
    if (file.mimetype == "application/vnd.rar") {
      callback(null, __dirsource + "/files" + "/rar");
    }
  },
  filename: function (req: any, file: any, callback: any) {
    if (file.mimetype == "application/vnd.rar") {
      callback(null, Buffer.from(file.originalname, "latin1").toString("utf8"));
    }
  },
});

export const pdf = multer.diskStorage({
  destination: function (req: any, file: any, callback: any) {
    if (file.mimetype == "application/pdf") {
      callback(null, __dirsource + "/files" + "/pdf");
    }
  },
  filename: function (req: any, file: any, callback: any) {
    if (file.mimetype == "application/pdf") {
      callback(null, Buffer.from(file.originalname, "latin1").toString("utf8"));
    }
  },
});

export const jpg = multer.diskStorage({
  destination: function (req: any, file: any, callback: any) {
    if (file.mimetype == "image/jpeg") {
      callback(null, __dirsource + "/files" + "/jpg");
    }
  },
  filename: function (req: any, file: any, callback: any) {
    if (file.mimetype == "image/jpeg") {
      callback(null, Buffer.from(file.originalname, "latin1").toString("utf8"));
    }
  },
});

export const webp = multer.diskStorage({
  destination: function (req: any, file: any, callback: any) {
    if (file.mimetype == "image/webp") {
      callback(null, __dirsource + "/files" + "/webp");
    }
  },
  filename: function (req: any, file: any, callback: any) {
    if (file.mimetype == "image/webp") {
      callback(null, Buffer.from(file.originalname, "latin1").toString("utf8"));
    }
  },
});

export const xlsx = multer.diskStorage({
  destination: function (req: any, file: any, callback: any) {
    if (
      file.mimetype ==
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
      file.mimetype == "application/vnd.ms-excel"
    ) {
      callback(null, __dirsource + "/files" + "/excel");
    }
  },
  filename: function (req: any, file: any, callback: any) {
    if (
      file.mimetype ==
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
      file.mimetype == "application/vnd.ms-excel"
    ) {
      callback(null, Buffer.from(file.originalname, "latin1").toString("utf8"));
    }
  },
});

export const docx = multer.diskStorage({
  destination: function (req: any, file: any, callback: any) {
    if (
      file.mimetype == "application/msword" ||
      file.mimetype ==
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      callback(null, __dirsource + "/files" + "/word");
    }
  },
  filename: function (req: any, file: any, callback: any) {
    if (
      file.mimetype == "application/msword" ||
      file.mimetype ==
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      callback(null, Buffer.from(file.originalname, "latin1").toString("utf8"));
    }
  },
});

export const pptx = multer.diskStorage({
  destination: function (req: any, file: any, callback: any) {
    if (
      file.mimetype == "application/vnd.ms-powerpoint" ||
      file.mimetype ==
        "application/vnd.openxmlformats-officedocument.presentationml.presentation"
    ) {
      callback(null, __dirsource + "/files" + "/powerpoint");
    }
  },
  filename: function (req: any, file: any, callback: any) {
    if (
      file.mimetype == "application/vnd.ms-powerpoint" ||
      file.mimetype ==
        "application/vnd.openxmlformats-officedocument.presentationml.presentation"
    ) {
      callback(null, Buffer.from(file.originalname, "latin1").toString("utf8"));
    }
  },
});
