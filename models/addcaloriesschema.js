/* 
1. first name: aviv , last name: levi, id: 319123287 .
2. first name: nir , last name: hemed, id: 207949090 .
3. first name: royi , last name: tvizer, id: 203926084 .
*/

const mongoose = require('mongoose');

const addCaloriesSchema = new mongoose.Schema({
  user_id: { type: Number, required: true },
  year: { type: Number, required: true },
  month: { type: Number, required: true },
  day: { type: Number, required: true },
  id: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  amount: { type: Number, required: true }
},
{versionKey: false}
);

Calories = mongoose.model('calories', addCaloriesSchema);

module.exports = Calories
