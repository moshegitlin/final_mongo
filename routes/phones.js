const express= require("express");
const {PhoneModel} = require("../models/phoneModel");
const router = express.Router();

router.get("/Q1", async(req,res) => {
try {
    const phones = await PhoneModel.find({}).limit(10).sort({_id:-1});
    res.status(201).json(phones);
}catch (e) {
    res.status(502).json({msg:e.message});
}
})
router.get("/Q2", async(req,res) => {
    try {
        const phones = await PhoneModel.find({}).limit(5).sort({price:-1});
        res.status(201).json(phones);
    }catch (e) {
        res.status(502).json({msg:e.message});
    }
})
router.get("/Q3", async(req,res) => {
    try {
        const phones = await PhoneModel.find({})
            .limit(3)
            .sort({ total_score: -1 })
            .skip(3);
        res.status(201).json(phones);
    }catch (e) {
        res.status(502).json({msg:e.message});
    }
})
router.get("/Q4", async (req, res) => {
    try {
        const phones = await PhoneModel.findOne({ name: "Mi 10" });
        res.status(201).json(phones);
    } catch (e) {
        console.log(e);
        res.status(502).json({ e});
    }
});
router.get("/Q5", async (req, res) => {
   try {
       const phones = await PhoneModel.find({ gpu: { $regex: /Adreno/i } });
       res.status(201).json(phones);
   }catch (e) {
       res.status(502).json({msg:e.message});
   }
})
router.get("/Q9", async(req,res) => {
    try{
        const counter = await PhoneModel.countDocuments();
        res.status(201).json(counter);
    }catch (e) {
        res.status(502).json({msg:e.message});
    }
})
router.get("/Q10", async(req,res) => {
    try{
        const phones = await PhoneModel.find({ cpu: { $regex: /Qualcomm/i } });
        res.status(201).json(phones);
    }catch (e) {
        res.status(502).json({msg:e.message});
    }
})
router.get("/Q11", async(req,res) => {
    try{
        const phones = await PhoneModel.find({ price: { $gte: 1300, $lte: 2000 } })
            .limit(4)
            .sort({ price: 1 });
        res.status(201).json(phones);
        res.status(201).json(phones);
    }catch (e) {
        res.status(502).json({msg:e.message});
    }
})
router.get("/Q12", async(req,res) => {
    try{
        const phones = await PhoneModel.find({ total_score: { $in: [79, 90, 86] } });
        res.status(201).json(phones);
    }catch (e) {
        res.status(502).json({msg:e.message});
    }
})
router.get("/Q13", async(req,res) => {
    try{
        const phones = await PhoneModel.find({}, { _id: 1, name: 1, total_score: 1 }, {})
            .limit(10)
            .sort({ company_id: 1 });
        res.status(201).json(phones);
    }catch (e) {
        res.status(502).json({msg:e.message});
    }
})
router.get("/Q14", async (req, res) => {
    try {
        const phones = await PhoneModel.find({
            $or: [
                {
                    battery_score: "76",
                    company_id: "2",
                },
            ],
        }).sort({ price: -1 });
        res.status(201).json(phones);
    } catch (e) {
        res.status(502).json({msg:e.message});
    }
});
router.get("/Q15", async (req, res) => {
    try {
        const phones = await PhoneModel.find({
            $and: [
                {
                    battery_score: "76",
                    company_id: "4",
                },
            ],
        });
        res.status(201).json(phones);
    } catch (e) {
        res.status(502).json({msg:e.message});
    }
});
router.get("/Q16", async (req, res) => {
    try {
        const result = await PhoneModel.aggregate([
            {
                $group: {
                    _id: "company_id",
                    totalPhones: { $sum: 1 }
                }
            }
        ]);
        res.status(201).json(result);
    } catch (e) {
        res.status(502).json({msg:e.message});
    }
});
router.get("/Q17", async (req, res) => {
    try {
        const result = await PhoneModel.aggregate([
            {
                $group: {
                    _id: "$company_id",
                    averagePrice: { $avg: "$price" }
                }
            }
        ]);
        res.status(201).json(result);
    } catch (e) {
        res.status(502).json({msg:e.message});
    }
});
router.get("/Q18", async (req, res) => {
    try {
        const result = await PhoneModel.aggregate([
            {
                $group: {
                    _id: "$company_id",
                    minPrice: { $min: "$price" }
                }
            }
        ]);
        res.status(201).json(result);
    } catch (e) {
        res.status(502).json({msg:e.message});
    }
});
router.get("/Q19", async (req, res) => {
    try {
        const result = await PhoneModel.find({}).populate({
            path: "company_id",
            select: "name country",
            foreignField:"id"
        });
        res.status(201).json(result);
    } catch (e) {
        res.status(502).json({msg:e.message});
    }
});
router.get("/Q20", async (req, res) => {
    try {
        const result = await PhoneModel.find({}).sort({ price: -1 }).limit(5).populate({
            path: "company_id",
            select: "country",
            foreignField:"id"
        });
        res.status(201).json(result);
    } catch (e) {
        res.status(502).json({msg:e.message});
    }
});
module.exports = router;