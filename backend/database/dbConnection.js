import mongoose from "mongoose";

export const dbConnection = ()=>{
mongoose.connect(process.env.MONGO_URI,{
    dbName:"Doctor_project",
}).then(()=>{
    console.log("Connected to db");
}).catch((err)=>{
    console.log(`Error occured : ${err}`)
});
};