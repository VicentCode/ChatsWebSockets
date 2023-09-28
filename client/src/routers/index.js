const express = require('express');
const router = express.Router();

router.get('/', async(req,res)=>{
   
   res.render('index.ejs');
 });

router.post('/add', async(req,res)=>{
    const valor = new Producto(req.body);
    await valor.save();
    res.redirect('/');
});

module.exports = router;


