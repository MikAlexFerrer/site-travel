const express = require("express")
const app = express()
const mongoose = require("mongoose")
const authRouter = require("./routes/auth")
const userRouter = require("./routes/users")
const hotelRoute = require("./routes/hotels")
const multer = require("multer")
const path = require("path")

app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.connect('mongodb://localhost/sitetravel');

const storage = multer.diskStorage ({
    destination:(req, file, cb) => {
        cb(null, "images")
    }, filename:(req, file, cb) => {
        cb(null, req.body.name)
    }
})

const upload = multer({ storage: storage })
app.post("/backend/upload", upload.single("file"), (req, res) => {
    res.status(200).json ("File uploaded!")
})

app.use("/backend/auth", authRouter)
app.use("/backend/users", userRouter)
app.use("/backend/hotels", hotelRoute)

app.listen("5000", () => {
    console.log("Backend SIUUUUU");
})