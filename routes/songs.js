// imports dependencies
const { Router } =require("express")
const path=require('path')
// local file dependencies
const songController =require(path.resolve( "./controllers/songs.js"))
const router = Router()

router.get("/getsongs",songController.getSongs)

router.put("/updaterating/:id/:rating",songController.updateRating)

module.exports=router
