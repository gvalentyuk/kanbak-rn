const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/user", require("./routes/UserRoutes"));
app.use('/api/tasks', require('./routes/TaskRoutes'));

app.listen(process.env.PORT, () =>
  console.log(`Server run on ${process.env.PORT}`)
);
