require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require("connect-mongo").default;
const passport = require("passport");
const LocalStrategy = require('passport-local');
const bodyparser =require('body-parser');
const cors = require("cors")
const {HoldingsModel} = require('./Model/HoldingsModel');
const { PostionModel } = require('./Model/PostionModel');
const User = require('./Model/user');

const PORT = process.env.PORT || 8080;
const URI = process.env.MONOGO_URL;
const session_secret = process.env.secret;
const msecret = process.env.msecret;
const  app = express();

const store = MongoStore.create({ 
    mongoUrl: URI,
    crypto:{
        secret:msecret,
    },
    touchAfter:24*3600, 
});
store.on("error",()=>{
    console.log("Error on  mongo session")
})


const sessionOption = {
    store,
    secret: session_secret,
    resave:false,
   saveUninitialized:true,
   cookie:{
    expires:Date.now() + 1000 + 60 * 60 * 24* 3, //3 days
    maxAge:1000*60*60*24*3,
    httpOnly:true
   }
}



app.use(cors());
app.use(bodyparser.json());
app.use(session(sessionOption));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Adding Dummy  data  for  Holdings -- 
// Adding  Dummy  Data  for  Postions
// app.get('/addpostions',async(req,res)=>{
//     let tempPostion= [
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];

// tempPostion.forEach((item )=>{
//    let newPostionModel = new PostionModel({
//     product: item.product,
//     name: item.name,
//     qty: item.qty,
//     avg:item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//     isLoss: item.isLoss,
//    });

//  newPostionModel.save();
// })

// res.send ("Done")
// });

app.get('/allholdings',async(req,res)=>{
    let  allholdings = await HoldingsModel.find({});

    res.json(allholdings);
});

app.get('/allpostions',async(req,res)=>{
    let  allpostions = await PostionModel.find({});

    res.json(allpostions);
});
app.get('/home',(req,res)=>{
    res.send("Buddy at Home")
});

app.listen(PORT,()=>{
    console.log(`app listen  on port ${PORT}`);
    mongoose.connect(URI);
    console.log("connect to  db")
});

//Express-session 
//connect-mongo
//user schema
//Done ✔️
//Sign-in login setup 
