const indexR = require("./index");
const companiesR = require("./companies");
const phonesR = require("./phones");

exports.routesInit = (app) => {
    app.use("/",indexR);
    app.use("/companies",companiesR);
    app.use("/phones",phonesR);
    app.use("*",(req,res) => {
        res.status(404).json({msg:"Page/endpoint not found, 404"})
    })
}