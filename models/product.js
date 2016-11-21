var restful = require('node-restful');
var mongoose = restful.mongoose;

var productSchema = new mongoose.Schema(
{
	name: String,
	sky: String,
	price: Number
});

//Return Model
module.exports = restful.model('Products', productSchema);