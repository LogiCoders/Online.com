const express = require('express');
const mainRouter = express.Router();
const { addProduct, getproducts, deleteProduct, updateProduct, addStore, updateStore, getStores, deleteStore,
  createItem, deleteItem, createOrder, getItems, getOrders } = require("../controllers/main-controller")
const { register } = require("../controllers/users_controller")

mainRouter.get('/', (req, res) => {
  res.json('HELLO WORLD');
});
mainRouter.post('/product', addProduct);
mainRouter.get('/product', getproducts);
mainRouter.delete('/product', deleteProduct);
mainRouter.put('/product', updateProduct);

mainRouter.post('/store', addStore);
mainRouter.put('/store', updateStore);
mainRouter.get('/store', getStores);
mainRouter.delete('/store', deleteStore);

mainRouter.post('/order', createOrder);
mainRouter.get('/order', getOrders);
mainRouter.delete('/order', deleteStore);

mainRouter.post('/item', createItem);
mainRouter.get('/item', getItems);
mainRouter.delete('/item', deleteItem);

mainRouter.delete('/register', register);
module.exports = mainRouter; 