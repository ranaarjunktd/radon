const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {



    name:String,
    author_id:{type:String, required:true},

    price:Number,
    ratings:Number,



    bookName: {type:String, } ,
    authorName: String, 
    tags: [String],
    
    isPublished: Boolean,
    prices: {
           indianPrice: String,
            europePrice: String},

    year:{ type:Number}
      ,

     totalPages:Number,
     stockAvailable:Boolean,

    
    sales: {type: Number }
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
