import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sale.js";
import OverallStat from "./models/OverallStat.js";
import {dataOverallStat} from "./data/index.js";

/*configuration*/
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

//routes
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sale", salesRoutes);

/* Mongoose Setup */
const Port = process.env.PORT || 9000
const check = process.env.Mongo_url;
mongoose.connect(check, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> {
    app.listen(Port, () => console.log("Server Port "+Port));
    //OverallStat.insertMany(dataOverallStat);
})
.catch((error)=>console.log(error+" did not connect"));

