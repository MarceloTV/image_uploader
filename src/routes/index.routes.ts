import { Router } from "express";
import multer from "multer";
import path from "path";
import { v4 as uuid } from "uuid";

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, uuid() + path.extname(file.originalname));
  },
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "..", "public", "uploads"));
  },
});

const upload = multer({
  storage,
});

const Route = Router();

Route.get("/", (req, res) => {
  res.status(200).render("index");
});

Route.post("/upload", upload.single("image"), (req, res) => {
  res.status(200).json({ file: req.file });
});

export default Route;
