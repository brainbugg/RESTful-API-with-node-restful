var express = require('express');
var router = express.Router();

// Bring in Model
var Product = require('../models/product');

// Routes
Product.methods(['get', 'put', 'post' ,'delete'])
Product.register(router, '/products');
// Router
router.get('/products', function(req, res)
{
	res.send('API is working.');
});


module.exports = router;