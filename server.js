// imports dependencies
const express=require("express")
const cors=require("cors")
const path=require("path")
require('dotenv').config()
// local file dependencies
const songRoutes=require("./routes/songs.js")
const mongoose=require("mongoose")

const app = express()

// middlewares
app.use(cors())
app.use(express.json({ type: "application/json" }))


// serve the static pages
// app.use(express.static(path.join(__dirname, "../client/dist")))

// different routes
app.use("/api", songRoutes)
const port=process.env.PORT || 4000
const dbURI=process.env.dbURI
// console.log(dbURI)
mongoose.connect(dbURI,{useUnifiedTopology:true})
.then(()=>app.listen(port, () => {console.log(`Server is running on http://localhost:${port}`)}))
.catch(err=>console.log(err))