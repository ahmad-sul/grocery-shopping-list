const ItemsModel = require('../models/ItemSchema')
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken')
const createError = require('http-errors')

exports.getAllItems = async (req, res, next) => {
    try {
     
      let items = await ItemsModel.find({}).select(' name amount priorityNr');
      res.json({ success: true, data: items });
  
     
    } catch (err) {
      next(err);
    }
  };

  exports.getSingleItem = async (req, res, next) => {
    const id = req.params.id
     //get all users from users collection
     let item = await ItemsModel.findById(id);
     res.json(item);
    //  console.log(item);
 };

  exports.postItem = async (req, res, next) => {
  
       try{
           const item = new ItemsModel(req.body)
           await item.save()
   
           res.send({success:true, data:item})
       }
       catch(err){
           console.log(err.message)
           next(err)
       }
   
   };

   exports.deleteAllItems = async (req, res, next) => {
    try {
     
      let items = await ItemsModel.findOneAndRemove({});
      res.json({ success: true, data: items });
  
     
    } catch (err) {
      next(err);
    }
  };

  exports.deleteItem = async (req, res, next) => {
    const {id}= req.params
  console.log('delete item',{id});
  try{
    const item = await ItemsModel.findOneAndRemove({ _id: id });
    res.send({success:true, data:item})
   ;
  }
  catch(err){
      console.log(err.message)
      next(err)
  }
  };

  exports.updateItem = async (req, res, next) => {
    const {id} =req.params
    console.log('id ist',id)
    try {
      
      const item = await ItemsModel.findByIdAndUpdate(id, req.body, {new:true})
      res.send({success:true, data:item})
    } catch (e) {
      console.log(e);
    }
  };