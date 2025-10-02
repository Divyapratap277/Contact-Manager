const mongoose = require('mongoose')

const connectdb= async ()=>{
   
    try {
        const connect = mongoose.connect(process.env.CONNECTION_STRING)
        console.log(`Mongodb connnected`);
        
    } catch (err) {
        console.log(err);
        process.exit(1);
    }

}

module.exports= connectdb;