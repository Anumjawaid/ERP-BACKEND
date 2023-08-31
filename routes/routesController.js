var express = require("express");
var routes = express.Router();

var Account = require('../Controller/account')

const returnRouter = () => {
    routes.get("/",(req,res)=>{res.send({message:"ALL DONE AND RUNNING"})})
    routes.post('/addaccount', Account.Addaccount)
    routes.get('/getaccount', Account.Getaccount)


    return routes
}
module.exports = {
    routes: returnRouter
}