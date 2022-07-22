import express from "express"; //daha indirilmedi
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import env from "dotenv";
import router from "./routes/BlogPostsRouter.js";


const app=express();
env.config();


app.use(cors());
app.use(bodyParser.json({limit:"30mb",extended:"true"}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:"true"}));


app.get("/",(req,res) => {
    res.send("başlıyoruz hadi bakalım !"); 
})

app.use("/posts",router);


mongoose.connect(process.env.connection_MongodbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('server '+process.env.PORT+"'nci portta çalışıyor");
    })
}).catch((error)=>{
         console.error(error.message);
});





