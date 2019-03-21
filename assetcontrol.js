//import order module
Addasset = require('./assetmodel');
// Handle index actions

exports.index = function (req, res) {
Addasset.get(function (err, addassets) {
if (err) {
res.json({
status: "error",
message: err,
});
}
res.json({
status: "success",
message: "Orders retrieved successfully",
data: addassets
});
});
};
exports.new = function (req, res) { 
var addasset = new Addasset();
addasset.aid = req.body.aid;
addasset.assettype= req.body.assettype;
addasset.passet= req.body.passet;
addasset.manu = req.body.manu;
addasset.war = req.body.war;
addasset.unit= req.body.unit;
addasset.model= req.body.model;
addasset.date= req.body.date;
addasset.iemi = req.body.iemi;
addasset.des = req.body.des;

// save the order and check for errors
addasset.save(function (err) {
// if (err)
// res.json(err);
res.json({
message: 'New order created!',
data: addasset
});
});
};

