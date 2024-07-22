const {Schema, model} = require('mongoose');
const Joi = require('joi');
const schema = new Schema({
name:String,
    id:String,
    country:String,
},{timestamps: true});
exports.CompanyModel = model('Company', schema);
exports.validate = (company) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        country: Joi.string().required()
    });
    return schema.validate(company);
}
exports.validateUpdate = (company) => {
    const schema = Joi.object({
        name: Joi.string().optional(),
        country: Joi.string().optional()
    }).min(1);
    return schema.validate(company);
}