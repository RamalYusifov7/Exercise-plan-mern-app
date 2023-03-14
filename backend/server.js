const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors');
require("dotenv").config()
const app = express()

const workoutRouter = require("./routes/workoutRoute")
const userRouter=require("./routes/userRoute")


app.use(express.json())
app.use(cors());
app.use("/api/workouts",workoutRouter)
app.use("/api/user",userRouter)


mongoose.connect(process.env.MONGO_KEY)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("listening to port");
        })
    })
    .catch()