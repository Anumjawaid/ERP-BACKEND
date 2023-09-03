let Ledger = require('../Controller/ledger')

exports.TrialBalance = async (req, res) => {
    console.log("IN TRIAL")
    try {
        // Get Asset Calculate Balance
        console.log("IN TRIAL try")
        let asset=await Ledger.GetSpecificLedger({'data':{type:"Asset"}})
        console.log(asset,"asset")
        let equity=await Ledger.GetSpecificLedger({'data':{type:"Equity"}})
        console.log(equity,"Equity")


        res.status(200).send({"message":"Trial Balance ",data:[...asset,...equity]})

    }
    catch (e) {
        console.log(e,"error")
        res.status(400).send({ message: "Unable to Fetch Results", data: e })
    }
}