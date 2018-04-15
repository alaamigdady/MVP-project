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
	
	let person = new Person ({user:data.user,age:data.age,weight:data.weight,height:data.height,gender:data.gender,intake:data.intake})
	person.save(function(err,person){
		if (err) console.log('error')
	})

}







var selectAll = function(callback) {
  Person.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.Person = Person;
module.exports.save = save;
module.exports.selectAll = selectAll;