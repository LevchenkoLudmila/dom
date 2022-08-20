const express = require('express');
const router = express.Router();

const allProdact = [
      {id:1, prodact: 'mens boots', color: 'waite', img: './img/1.jpg'},
      {id:2, prodact: 'wimen boots', color: 'red', img: './img/1.jpg'},
      {id:3, prodact: 'chaild boots', color: 'green', img: './img/1.jpg'}
   ]

router.get('/list', async (req,res) =>{
   res.json({allProdact});
});

router.get('/list', async (req,res) =>{
   res.render('list');
});
module.exports = router;