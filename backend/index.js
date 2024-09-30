const express = require("express");
const app = express();
require("dotenv").config();
const appRouter = require("./routes/appRoutes")
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())

app.use(bodyParser.json())
app.use("/api/v1/",appRouter)
app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}!`)
);
