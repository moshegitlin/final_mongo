const express= require("express");
const router = express.Router();

router.get("/", async(req,res) => {
    const clientIP = req.socket.remoteAddress;
    // console.log(req.socket)
    console.log(`Received request from ${clientIP}`);
    res.json({msg:"Api Work 200"});
})


module.exports = router;