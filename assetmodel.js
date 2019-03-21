// clientModel.js
var mongoose = require('mongoose');
// Setup schema
var assetreg = mongoose.Schema({
aid: {
type: String,
required: true
},
assettype: {
    type: String,
    required: true
    },
 passet: {
    type: String,
    required: true
        },
manu: {
    type: String,
    required:true
    },
war: {
    type: String,
    required:true
    },
unit: {
    type: Number,
    required:true
    }, 
model: {
    type: String,
    required:true
    },
date: {
    type: Date,
    required:true
    },
iemi: {
    type: String,
    required:true
    },
des: {
    type: String,
    required:true
    }
 
  });
// Export order model
var addasset = module.exports = mongoose.model('newasset', assetreg);
module.exports.get = function (callback, limit) {
addasset.find(callback).limit(limit);
}

