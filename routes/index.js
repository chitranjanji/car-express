var express = require('express');
var router = express.Router();
var usermodel = require("./users")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/create', function(req, res, next) {
  usermodel
  .create({
     carname:req.body.carname,
     image:req.body.image,
     color:req.body.color,
     price:req.body.price,
     fule:req.body.fule,
     varient:req.body. varient
  })
  .then(function(createdUser){
     res.redirect("feed")
     console.log(req.body.carname);
  })
  });
  router.get('/likes/:id', function(req, res, next) {
    usermodel.findOne({_id:req.params.id})
    .then(function(founded){
     founded.profilelike++;
     founded.save();
    })
    .then(function(saveuser){
       res.redirect("back")
    })
   }); 
   router.get('/feed', function(req, res, next) {
    usermodel.find()
    .then(function(allusers){
     res.render("feed",{allusers});
    })
   });
  
   router.get('/delete/:id', function(req, res, next) {
     usermodel.findOneAndDelete({_id:req.params.id})
     .then(function(allusers){
      res.redirect("back");
     })
    });  
    router.get('/edit/:id', function(req, res, next) {
      usermodel.findOne({_id:req.params.id})
      .then(function(foundeduser){
       res.render("edit",{foundeduser});
      })
     }); 
    
     router.post('/updated/:id', function(req, res, next) {
      usermodel.findOneAndUpdate({_id:req.params.id},{
     carname:req.body.carname,
     image:req.body.image,
     color:req.body.color,
     price:req.body.price,
     fule:req.body.fule,
     varient:req.body. varient
      })
      .then(function(users){
       res.redirect("/feed");
      })
     });

module.exports = router;
