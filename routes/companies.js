const express= require("express");
const {CompanyModel} = require("../models/companyModel");
const router = express.Router();

router.post("/Q6", async(req,res) => {
    try {
        const companies = new CompanyModel(req.body);
        await companies.save();
        res.status(201).json(companies);
    }catch (e) {
        res.status(502).json({msg:e.message});
    }
})

router.put("/Q7/:id", async(req,res) => {
   try{
       const companies = await CompanyModel.findByIdAndUpdate(req.params,req.body,{new:true});
         res.status(201).json(companies);
   } catch (e) {
       res.status(502).json({msg:e.message});
   }
})
router.delete("/Q8/:id", async(req,res) => {
    try{
        const companies = await CompanyModel.deleteOne(req.params);
        res.status(201).json(companies);
    }catch (e) {
        res.status(502).json({msg:e.message});
    }
})

module.exports = router;