var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/project');

let proSchema = mongoose.Schema({
	user: String ,
	age: Number,
	weight: Number,
	height: Number,
	gender: String,
	intake: Number

});

let Person = mongoose.model('Person',proSchema);
let save = (data) =>{
	console.log(data)

let person = new Person ({user:data.user,age:data.age,weight:data.weight,height:data.height,gender:data.gender,intake:data.intake})
person.save(function(err,person){
	if (err) console.log('error')
})

}



module.exports.Person = Person;
module.exports.save = save;


// db.on('error', function() {
//   console.log('mongoose connection error');
// });

// db.once('open', function() {
//   console.log('mongoose connected successfully');
// });

// var itemSchema = mongoose.Schema({
//   quantity: Number,
//   description: String
// });

// var Item = mongoose.model('Item', itemSchema);

// var selectAll = function(callback) {
//   Item.find({}, function(err, items) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, items);
//     }
//   });
// };

// module.exports.selectAll = selectAll;