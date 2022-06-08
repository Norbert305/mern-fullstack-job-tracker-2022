
const express = require('express');
const router = express.Router();



// router.get('/', (req,res)=>{
//     res.send("This is our get method")
// })
router.get('/', (req,res)=>{
    res.status(200).json({message: "This is our get method"})
})
router.post('/', (req,res)=>{
    res.status(200).json({message: "This is our post method"})
})
router.put('/:id', (req,res)=>{
    res.status(200).json({message: `This is our put method ${req.params.id}`})
})
router.delete('/:id', (req,res)=>{
    res.status(200).json({message: `This is our delete method ${req.params.id}`})
})


module.exports = router
