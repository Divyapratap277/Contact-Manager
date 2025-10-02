const asyncHandler= require('express-async-handler')


//@desc get all contact
//@route GET /api/contact
//@access public 

const getContacts = asyncHandler(async (req,res)=>{
   res.status(200).send({message:"Get all contacts"});
})


//@desc Create  contact
//@route POST /api/contact
//@access public 

const createContact = asyncHandler (async (req,res)=>{
    console.log("The req body is " ,req.body);
    const{name,age,city} = req.body;
    if(!name || !age || !city)
    {
        res.status(400);
        throw new Error("All fields are mandatory")
    }
   res.status(201).send({message: "Create contacts"});
})

//@desc get  contact
//@route GET /api/contact/:id
//@access public 

const getContact =asyncHandler  (async (req,res)=>{
   res.status(200).send({message : `Get contact for ${req.params.id}`});
})

//@desc update contact
//@route PUT /api/contact/:id
//@access public 

const updateContact =asyncHandler (async (req,res)=>{
   res.status(200).send({mesaage: `Update contact for ${req.params.id}`});
})


//@desc Delete contact
//@route delete /api/contact/:id
//@access public 

const deleteContact =asyncHandler (async (req,res)=>{
   res.status(200).send({message: `Delete contact of ${req.params.id}`});
})



module.exports= {getContacts, createContact, getContact, updateContact, deleteContact };