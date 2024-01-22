var mysql = require('mysql2');
var mysqlConfig = require('./config.js');

var connection = mysql.createConnection(mysqlConfig);


var getAllproducts = (callback)=> {
    const sql = 'SELECT * FROM `products`'
    connection.query(sql, function (error, results, fields) {
    callback(error, results);
    });  
};
const getOneProduct = (productId, callback) => {
    const sql = 'SELECT * FROM `products` WHERE productid=?'
    connection.query(sql, [productId], function (error, result) {
        callback(error, result);
    });
};


var addproduct = (productName, price,image, callback) => {
const sql = 'INSERT INTO `products` (productName, price,image) VALUES (?, ?,?)';
connection.query(sql, [productName, price,image], function (error, results, fields) {
    callback(error, results);
});
};

var updateproduct = (productId, updatProduct, callback) => {
    const { productName, price, image } = updatProduct;
    const sql = 'UPDATE `products` SET productName = ?, price = ?, image = ? WHERE productId = ?';
    connection.query(sql, [productName, price, image, productId], function (error, results, fields) {
        callback(error, results);
    });
};

var deleteproduct = (productId, callback) => {
const sql = 'DELETE FROM `products` WHERE productId = ?';
connection.query(sql, [productId], function (error, results, fields) {
    callback(error, results);
});
};













module.exports = {getAllproducts: getAllproducts,
    getOneProduct:getOneProduct,
    addproduct: addproduct,
    updateproduct: updateproduct,
    deleteproduct: deleteproduct
}