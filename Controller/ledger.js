var Ledger = require('../Model/gledgerScema')


exports.AddLedger = async (req, res) => {
    try {
        const { date, credit, debit, voucherno, account, type, remarks } = req.body
        let addLed = new Ledger({
            AccountName: account,
            Type: type,
            Date: date,
            Voucherno: voucherno,
            Credit: credit,
            Debit: debit,
            Remarks: remarks

        })
        addLed.save()
        res.status(200).send({ message: "Succesfully Added", data: addLed })
    }
    catch(e){
        res.status(400).send({message: "Unable to Add Results", data: e})
    }

}
