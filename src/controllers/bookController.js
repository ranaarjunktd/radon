const { model } = require("mongoose")
const BookModel= require("../models/bookModel")
const { get } = require("../routes/route")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find(  { authorName : "SK" , isPublished: true }  )
    res.send({msg: allBooks})
    
}

const getBookList= async function (req, res) {
    let allBooksList= await BookModel.find().select({authorName:1,bookName:1,_id:0})
    res.send({msg: allBooksList})
}

 const getBookInYear= async function (req, res) {
    let data=req.body.year
    let allBook= await BookModel.find({year:data})
    res.send({msg: allBook})
}

const getParticularBook= async function (req, res) {
    let alldata=req.body
    let particularBook= await BookModel.find(alldata.i)
    res.send({msg: particularBook})
}

const getInrBook= async function (req, res) {
    let alldata=req.body
    let inrBook= await BookModel.find({"prices.indianPrice":{$in:["100","200","500","800"]} })
    res.send({msg: inrBook})
}
const getRandomBook= async function (req, res) {
    
    let randomBook= await BookModel.find({ $or:[{stockAvailable:true},{totalPages:{$gt:"500"}}]})
    res.send({msg: randomBook})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBookList=getBookList

module.exports.getBookInYear=getBookInYear
module.exports.getParticularBook= getParticularBook
module.exports.getInrBook=getInrBook
module.exports.getRandomBook=getRandomBook