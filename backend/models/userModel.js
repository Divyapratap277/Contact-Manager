const mongoose= require('mongoose')


const userSchema= mongoose.Schema({
    username:{
        type:String , require:[true, "Please provide username"]
    },

    email:{
        type:String , require:[true, "Please provide your email id"],
        unique:[true, "Email address already taken"]
    },
    password:{
        type:String , require:[true, "Please give pasword"]
    },
    
}, {
    timestamps: true
})

module.exports= mongoose.model("User", userSchema)