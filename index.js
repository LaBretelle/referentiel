const express = require("express");
const app = express();
const port = 3000;
const referentielRouter = require("./routes/referentiel");
const rechercheRouter = require("./routes/recherche");
const dataRouter = require("./routes/data");

var path = require('path')

app.use(express.static(path.resolve('./public')))

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.set('view engine', 'ejs')

app.use("/referentiel", referentielRouter);

app.use("/", rechercheRouter);

app.use("/", dataRouter);

app.get("/apropos", async(req, res) => {
  res.sendFile(path.resolve('./public/apropos.html'))
});

app.get("/contact", async(req, res) => {
  res.sendFile(path.resolve('./public/contact.html'))
});

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.get("/", (req, res) => {
  res.render('pages/index');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
