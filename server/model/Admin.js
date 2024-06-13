const mongoose = require('mongoose');

const AdminModel = mongoose.Schema(
    {
        "id": {
            require: true,
            type: Number,
            unique: true,
            index: true
        },
        "name": {
            require: true,
            type: String
        },
        "price": {
            require: true,
            type: Number
        },
        "currency":{
            require:true,
            type:String
        },
        "description":{
            require:true,
            type:String
        },
        "image":{
            require:true,
            type: String
        }
    },
    {versionKey: false}
);

const Admin = mongoose.model('Admin', AdminModel);

module.exports = Admin;
