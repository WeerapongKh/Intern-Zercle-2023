const express =require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/Product')
router.get('/', (req,res,next)=>{
  Product.find({}).then((products)=>{
      res.send(products);
  })
})
router.get('/:id', (req,res,next)=>{
    Product.findById(req.params.id).then((post)=>{
        res.send(post);
    })
  })
router.post('/', (req,res,next)=>{
    Product.create(req.body).then((post)=>{
        res.send(post);   
    })
  })
router.put('/:id', (req,res,next)=>{
    Product.findByIdAndUpdate(req.params.id, req.body).then((post)=>{
        res.send(post);   
    })
  })
router.delete('/:id', (req,res,next)=>{
    Product.findByIdAndDelete(req.params.id).then((post)=>{
        res.send(post);   
    })
  })
module.exports =router