console.log("Loading Serverside companies.js");

var mongoose = require('mongoose'),
    Company = mongoose.model('Company');

function CompaniesController() {

  var _this = this;

  // -------------------------------------------------------------------------
  //                           My Controller Method
  // -------------------------------------------------------------------------
  _this.index = function(req, res){
    console.log('got to the server controller and about to search for companies in DB');
    Company.find({},function(err,result){
      if(err){
        console.log('there was an error finding companies',err);
        res.json(err);
      } else {
        console.log('successfully found companies', result);
        res.json(result)
      }
    })
  }
  _this.findCompany = function(req, res){
    console.log('got to the server controller and about to serach for company with id',req.params);
    Company.findById(req.params.company_id, function(err,result){
      if(err){
        console.log('there was an error finding company',err);
        res.json(err)
      } else {
        console.log('successfully found company',result);
        res.json(result)
      }
    })
  }
  _this.create = function (req, res) {
    console.log('got to the server controller with company data ',req.body);
    Company.create(req.body,function(err,result){
      if(err){
        console.log('there was an error creating company',err);
        res.json(err)
      } else {
        console.log('successfully created company ',result);
        res.json(result)
      }
    })
  }
  _this.show = function(req,res){
    console.log('got to the server with company id ', req.body);
    Company.findOne({_id: req.body}, function(err,result){
      if (err){
        console.log('error showing company');
      } else {
        console.log('successfully got company ', result);
        res.json(result)
      }
    })
  }
}

module.exports = new CompaniesController();
