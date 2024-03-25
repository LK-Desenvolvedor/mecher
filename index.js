const express = require("express");
const userRoutes = require("./routes/userRoutes");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.use(express.json());

mongoose
  .connect("mongodb+srv://lkdesenvolvedor:5pvWxuIifcTqnJTZ@cluster0.0zwawkv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Rodando na porta ${port} !`);
});