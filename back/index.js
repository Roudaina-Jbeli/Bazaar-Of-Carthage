const express = require('express');
const cors=require('cors')
const db= require('../back/database-mysql/index');


const app = express();
app.use(cors())
app.use(express.json())



app.get('/api/products', (req, res) => {
    db.getAllproducts((error, results) => {
    if (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    } else {
    res.status(200).json(results);
    }
    });
})
app.get('/api/products/:id', (req, res) => {
    const productId = req.params.id;
        db.getOneProduct(productId,(err, result) => {
          if (err) {
            res.status(500).json({ error: 'Internal server error' });
          } else {
            res.status(200).json(result);
          }
        })
      })

app.post('/api/products/post', (req, res) => {
    const product = req.body;
    db.addproduct(product.productName, product.price,product.image, (error, results) => {
    if (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    } else {
    res.status(201).json({ message: 'product added successfully' });
    }
    });
});

app.put('/api/products/update/:id', (req, res) => {
    const productId = req.params.id;
    const updatProduct = req.body;
    db.updateproduct(productId, updatProduct, (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            if (results.affectedRows > 0) {
                res.status(200).json({ message: 'Product updated successfully' });
            } else {
                res.status(404).json({ error: 'Product not found' });
            }
        }
    });
})

app.delete('/api/products/delete/:id', (req, res) => {
    const productId = req.params.id;
    db.deleteproduct(productId, (error, results) => {
    if (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    } 
    else {
    if (results.affectedRows > 0) {
    res.status(200).json({ message: 'product deleted successfully' });
    } else {
    res.status(404).json({ error: 'product not found' });
    }
    }
    });
});

app.listen(8080, () =>{
    console.log('listening on port 3000!');
});

// {
//     "productName":"Discovery Box Traditional Sweets Masmoudi - 50 Pcs 985g",
//     "price":40.48,
//     "image":"https://tatooinemarket.com/cdn/shop/products/ezgif.com-gif-maker_28_1024x1024@2x.jpg?v=1633969920"
//   }