//create mini express application
const exp=require("express")
const userApi=exp.Router();
const expressErrorHandler=require("express-async-handler")
const { response } = require("express");

//add body parser middleware
userApi.use(exp.json())


userApi.post("/createuser",expressErrorHandler(async (req, res, next) => {

    let userCollectionObj = req.app.get("userCollectionObj")
       //get user obj
    let newUser = req.body
    //console.log(newUser)
    //search for existing user
    let user = await userCollectionObj.findOne({ email: newUser.email })
    //if user existed
    if (user !== null ) {
        res.send({ message: "you have already registered" })
    }
           //insert
           await userCollectionObj.insertOne(newUser)
           res.send({ message: "Registration Successful"})
  
}))






//export userApi
module.exports=userApi;