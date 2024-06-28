/* 
1. first name: aviv , last name: levi, id: 319123287 .
2. first name: nir , last name: hemed, id: 207949090 .
3. first name: royi , last name: tvizer, id: 203926084 .
*/

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: { type: Number, required: true },  
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    birthday: { type: String, required: true } 
}
);

const User = mongoose.model('users', userSchema);
module.exports = User;