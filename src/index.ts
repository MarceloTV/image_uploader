import express from "express";
import ejs from "ejs";
import path from "path";
import morgan from "morgan";
import Routes from "./routes/index.routes";

const app = express();

//Middlewares
app.use(morgan("dev"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("", Routes);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server on port ${process.env.PORT || 3000}`);
});
