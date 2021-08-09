const mongoose = require("mongoose")

 const Schema = mongoose.Schema ;


const ItemSchema = new Schema({
  
    name: {
        type: String,
        required: true,
      },
      amount:{
        type:Number,
        default:'1'
    },
    priorityNr:{
      type:Number,
      default:'1'
    },
    checked:{
      type:Boolean,
      default:false
    }
    
})

const ItemsModel = mongoose.model("item",ItemSchema)


module.exports= ItemsModel;