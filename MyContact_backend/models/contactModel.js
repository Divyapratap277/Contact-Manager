const mongoose= require('mongoose')

const contactschema = mongoose.Schema({
    name:{
        type : String, require:[true, "Please add the conatact name"]
    }, 
    age:{
        type: String , require:[true, "Please enter your age"]
    },
    city:{
        type: String, require:[true, "Please enter your city name"]
    }
},{
    timestamps: true,
}
)

module.exports= mongoose.model("Contact", contactschema )