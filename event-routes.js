const express = require("express")
const router=express.Router()

router.get('/', (req,res)=> {

    res.send("this is events page?")
    })
    

module.exports =router //  ونضيف اي شئ نريده بالراوتينق نستطيع ان نرى هذا الملف