const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PersonSchema = new Schema({
    name: {
        type: String,
        validate: {
            validator: function (n) {
                if (n === 'xxx') {
                    return false;
                } else {
                    return true;
                }
            },
            massage: 'Name cannot be "xxx"'
        }
    },
    age: {
        type: Number,
        min: 0,
        max: 200,
        required: true
    },
    skills: [String],
    hair: Boolean
});


PersonSchema.query.findOlderThen = function (a) {
   return this.find ({
       age: {$gte: a}
   });
};///////створюємо особисту схему пошуку старше певного віку

PersonSchema.method('findOlder',  function () {
return this.model('person').find ({
        age: {
            $gte: this.age
        }
    });
}); ///////створюємо особисту схему пошуку об'єктів старше певного віку від певного об'єкту

PersonSchema.statics.findByAge = function (a) {
    return this.find({age: a});    
}; ///////створюємо особисту схему пошуку об'єктів  по віку

let PersonModel = mongoose.model('person', PersonSchema);
module.exports = PersonModel;