const asyncHandler= require('express-async-handler')
const Contact = require('../models/contactModel')

//@desc get all contact
//@route GET /api/contact
//@access public 

const getContacts = asyncHandler(async (req,res)=>{
   const contacts = await Contact.find()
   res.status(200).send(contacts);
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
    const contact= await Contact.create({
      name,
      age,
      city
    });

   res.status(201).send(contact);
})

//@desc get  contact
//@route GET /api/contact/:id
//@access public 

const getContact =asyncHandler  (async (req,res)=>{
   const contact= await Contact.findById(req.params.id);

   if(!contact)
   {
      res.status(404);
      throw new Error("Contact not found")
   }
   res.status(200).send(contact);
})

//@desc update contact
//@route PUT /api/contact/:id
//@access public 

const updateContact =asyncHandler (async (req,res)=>{
   const contact= await Contact.findById(req.params.id);

   if(!contact)
   {
      res.status(404);
      throw new Error("Contact not found")
   }

   const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new : true}
   )
   res.status(200).send(updatedContact);
})


//@desc Delete contact
//@route delete /api/contact/:id
//@access public 

const deleteContact =asyncHandler (async (req,res)=>{
   const contact= await Contact.findById(req.params.id);

   if(!contact)
   {
      res.status(404);
      throw new Error("Contact not found")
   }

   await Contact.findByIdAndDelete(req.params.id);
   res.status(200).send(contact);
})



module.exports= {getContacts, createContact, getContact, updateContact, deleteContact };