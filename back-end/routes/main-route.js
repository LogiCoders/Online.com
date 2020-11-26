const express = require('express');
const mainRouter = express.Router();
const {getAllOrders,addNewOrder,deleteOrderById} = require("../controllers/main-controller");

mainRouter.get("/orders", getAllOrders);
mainRouter.post("/orders", addNewOrder);
mainRouter.delete("/orders", deleteOrderById);


module.exports = mainRouter;
