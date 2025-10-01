const express= require('express')
const router= express.Router();

router.route("/").get((req,res)=>{
   res.status(200).send({message:"Get all contacts"});
})

router.route("/").post((req,res)=>{
   res.status(200).send({message: "Create contacts"});
})

router.route("/:id").get((req,res)=>{
   res.status(200).send({message : `Get contact for ${req.params.id}`});
})

router.route("/:id").put((req,res)=>{
   res.status(200).send({mesaage: `Update contact for ${req.params.id}`});
})

router.route("/:id").delete((req,res)=>{
   res.status(200).send({message: `Delete contact of ${req.params.id}`});
})

module.exports= router;