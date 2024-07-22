const {Schema, model} = require('mongoose');
const Joi = require('joi');
const schema = new Schema({
name:String,
    cpu:String,
    company_id:{ type: Schema.Types.ObjectId, ref: 'Company' },
    gpu:String,
    battery_score:String,
    total_score:String,
    price:Number
},{timestamps: true});
exports.PhoneModel = model('Phone', schema);
exports.validate = (phone) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        cpu: Joi.string().required(),
        company_id: Joi.string().required(),
        gpu: Joi.string().required(),
        battery_score: Joi.string().required(),
        total_score: Joi.string().required(),
        price: Joi.number().required()
    });
    return schema.validate(phone);
}
exports.validateUpdate = (phone) => {
    const schema = Joi.object({
        name: Joi.string().optional(),
        cpu: Joi.string().optional(),
        gpu: Joi.string().optional(),
        battery_score: Joi.string().optional(),
        total_score: Joi.string().optional(),
        price: Joi.number().optional()
    }).min(1);
    return schema.validate(phone);
}