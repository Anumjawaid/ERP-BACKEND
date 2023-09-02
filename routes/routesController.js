var express = require("express");
var routes = express.Router();

var Account = require('../Controller/account')
var Ledger=require('../Controller/ledger')

const returnRouter = () => {
    routes.get("/",(req,res)=>{res.send({message:"ALL DONE AND RUNNING"})})

    // *******************Account Routes***************************************
    routes.post('/addaccount', Account.Addaccount)
    routes.get('/getaccount', Account.GetAllaccounts)

    // *******************Ledger Routes***************************************

    routes.post("/addledger",Ledger.AddLedger)
    routes.get('/getallledger',Ledger.GetAllLedger)


    return routes
}
module.exports = {
    routes: returnRouter
}