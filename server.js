import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.listen(5000, function(){
    console.log("SWAG SHOP API running at port 5000")
})
