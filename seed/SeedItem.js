const mongoose = require('mongoose')
const Item = require('../models/ItemSchema')
const mongoURL = require('./config/env').mongoURL


mongoose.connect(
    mongoURL,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    () => console.log("connected to grocery-List DB")
  );



async function seedData() {
    try{
       await Item.deleteMany({})

         
  const items=Array().fill(null).map(()=>{

    const item = new Item({
        name:faker.name.findName(),
     
    })
   return item.save()
    
})

    // console.log(users)
    await Promise.all(items)
    }
    catch(err){
console.log(err.message)
    }
    mongoose.connection.close()
}

seedData()