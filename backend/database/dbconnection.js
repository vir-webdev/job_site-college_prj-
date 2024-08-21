import mongoose from "mongoose";

export const dbConnection = () =>{
    mongoose.connect(process.env.MONGO_URL, {
        dbName : "JOB_PORATL_WEBSITE",
    })
    .then(() =>{
        console.log("connected to database");
    })
    .catch((err) =>{
        console.log(`some error occurd while connecting to database: ${err}`);
    });

}