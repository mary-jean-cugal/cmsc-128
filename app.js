//requirements needed
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// var expressValidator = require('express-validator');


//initialize
var app = express();


//body parser middleware- interacts with functions
app.use(bodyParser.json()); //handles parsing json contents
app.use(bodyParser.urlencoded({extended: false})); //

//ejs = templates, middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//set static path or static folder for css and jquery files
app.use(express.static(path.join(__dirname, 'public')));

//for middleware for express validator
// app.use(expressValidator({
// 	errorFormatter: function(param, msg, value) {
// 		var namespace = param.split('.'),
// 		root 	= namespace.shift(),
// 		formParam = root;
// 		while (namespace.length){
// 			formParam += '[' + namespace.shift() + ']';
// 		} 
// 		return {
// 			param: formParam,
// 			msg: msg,
// 			value: value
// 		};
// 	}
// }));
//array of books
var books = [
{
		id : 1,
		bookName: 'tell tale heart',
		author: 'Edgar Allan Poe',
		genre: 'horror and gothic fiction',
		availability: 'available'
	},
	{
		id : 2,
		bookName: 'harry potter',
		author: 'J.K.Rowling',
		genre: 'fantasy and creative non-fiction',
		availability: 'available'
	},
	{
		id : 3,
		title: 'Java: A Beginners Guide, Sixth Edition',
		author: 'Herbert Schildt',
		genre: 'educational',
		availability: 'available'
	}
]

app.get('/', function(req, res){
	res.render('index', {
		title: 'User 1',
		books: books
	});
});

app.listen(3000, function(){
	console.log('server started on port 3000');
})

