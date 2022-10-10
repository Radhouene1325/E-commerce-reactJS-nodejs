import express from "express";

import bodyParser from "body-parser";
import router from './serveurProduct/routesProduct/routeProduct.js'
import categoryRoute from './serveurProduct/routesProduct/roteCategory.js'
import cors from "cors";
const app = express();
/********Connection with Db */
import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://khalfaradhouene:10813943radhouene@cluster0.kn5ir.mongodb.net/newProjetProduct?retryWrites=true&w=majority')
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}
connectDB()
/************************** */
app.use(
  cors({
    origin: "*",
  })
);

app.get('/', (req, res) => {
  res.send('Hello World!')
  res.setHeader('X-Foo', 'bar')
})
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
// indice pour pointer sur le dossier public pour les fichiers
app.use(express.static("public"));

app.listen(5000, () => {
  console.log("listning port 5000 ...");
});

app.use(router);
app.use(categoryRoute)
app.use("/api", router);
app.use('/apiCategory', categoryRoute)
// app.use("/api", uploadRouter);
