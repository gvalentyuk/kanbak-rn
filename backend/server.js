const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.static(path.join("public")));

app.use("/api/user", require("./routes/UserRoutes"));
app.use("/api/tasks", require("./routes/TaskRoutes"));

app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.listen(process.env.PORT, () =>
  console.log(`Server run on ${process.env.PORT}`)
);
