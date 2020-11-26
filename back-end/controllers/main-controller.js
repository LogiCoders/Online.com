const connection = require('../db');

const getAllOrders = (req, res) => {
	//soft delete active
	//const query = `SELECT * FROM orders where is_deleted = ?`;
	//const data = [orders.is_deleted];
	const query = `SELECT * FROM orders`;
	connection.query(query, (err, result) => {
		if (err) throw err;
		res.json(result);
	});
};

const addNewOrder = (req, res) => {
	const query = `INSERT INTO orders (ordersId)
	 VALUES (?) `;
	const data = [ req.body.ordersId ];
	connection.query(query, data, (err, result) => {
		if (err) throw err;
		res.json(result);
	});
};

const deleteOrderById = (req, res) => {
	/*
	--soft delete--
	const query = `UPDATE orders 
    SET 
    is_deleted = ?
    where
	ordersId= ?`;
	const data = [orders.is_deleted,orders.ordersId];
	connection.query(query,data, (err, result) => {
		if (err) throw err;
		res.json(result);
	});
	*/
	const query = `DELETE FROM orders WHERE ordersId = ? ;`;
	const data = [ orders.ordersId ];
	connection.query(query, data, (err, result) => {
		if (err) throw err;
		res.json(result);
	});
};

module.exports = {
	getAllOrders,
	addNewOrder,
	deleteOrderById
};
