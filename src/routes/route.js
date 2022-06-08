const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

router.get("/getBookList" , BookController.getBookList  )

router.post("/getBookInYear" , BookController.getBookInYear  )

router.post("/getParticularBook" ,  BookController.getParticularBook)

router.post("/getInrBook",    BookController.getInrBook ,  )
router.get("/getRandomBook",BookController.getRandomBook)
router.post("/createAuthor",BookController.createAuthor)
router.get("/getBookChetan",BookController.getBookChetan)
router.get("/getAuthorBook",BookController.getAuthorBook)
router.get("/bookCost", BookController.bookCost)


module.exports = router;