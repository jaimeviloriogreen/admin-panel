import express from "express";
import { fileURLToPath } from "url"
import path from "path";
import hbs from "hbs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 4500;
const app = express();

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
hbs.registerPartials( path.join(__dirname, "./views/partials"), (err)=> {});

app.use(express.static("src/public"));

app.get("/", (req, res)=> res.render("index"));
app.get("/ui-buttons", (req, res)=> res.render("ui-buttons"));
app.get("/ui-alerts", (req, res)=> res.render("ui-alerts"));
app.get("/ui-card", (req, res)=> res.render("ui-card"));
app.get("/ui-forms", (req, res)=> res.render("ui-forms"));
app.get("/ui-typography", (req, res)=> res.render("ui-typography"));
app.get("/authentication-login", (req, res)=> res.render("authentication-login"));
app.get("/authentication-register", (req, res)=> res.render("authentication-register"));
app.get("/icon-tabler", (req, res)=> res.render("icon-tabler"));
app.get("/sample-page", (req, res)=> res.render("sample-page"));

app.listen(port, ()=> console.log(`Listen on port ${ port }`));