const express = require("express");
const ItemRoute = express.Router();
const {
  getAllItems,
  postItem,
  deleteAllItems,
  deleteItem,
  updateItem,
  getSingleItem
} = require("../controllers/ItemController");

ItemRoute.get("/", getAllItems);
ItemRoute.get("/:id", getSingleItem);
ItemRoute.post("/", postItem);
ItemRoute.delete("/",  deleteAllItems);
ItemRoute.delete("/:id",deleteItem);
ItemRoute.post("/:id", updateItem);



module.exports=ItemRoute