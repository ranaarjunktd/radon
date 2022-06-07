const { model } = require("mongoose")
const BookModel= require("../models/bookModel")
const { get } = require("../routes/route")
const AuthorModel=require("../models/authorModel")
const authorModel = require("../models/authorModel")
const { find } = require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}


const createAuthor= async function (req, res) {
    let data= req.body

    let savedData= await AuthorModel.create(data)
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
 const getBookChetan= async function(req,res){
    let data=await AuthorModel.find({author_name:"Chetan Bhagat"}).select("author_id")  
    let bookData=await BookModel.find({author_id:data[0].author_id})  
    res.send({msg: bookData})
 }

 const getAuthorBook= async function(req,res){
     let data=await AuthorModel.findOneAndUpdate({name:"Two States"},{$set:{price:100}},{new:true})
     let authorData=await BookModel.find({author_id:data.author_id}).select("author_name")
     let prices=data.price
     res.send({msg:authorData,prices})

 }

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBookList=getBookList

module.exports.getBookInYear=getBookInYear
module.exports.getParticularBook= getParticularBook
module.exports.getInrBook=getInrBook
module.exports.getRandomBook=getRandomBook
module.exports.createAuthor=createAuthor
module.exports.getBookChetan=getBookChetan