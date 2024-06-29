// import blog controller to use its methods
const {
    getAllItems,
    getItem,
    addItem,
    updateItem,
    deleteItem

} = require('../controller/AdminController');

// import express module
const express = require('express');

// create router object
const router = express.Router();

// // import authmiddle module
// const { requireAuth } = require('../middleware/authmiddle');

// handle GET rquest at root
router.get('/', getAllItems);

// handle GET rquest at "/:id" uri
router.get('/:id', getItem);

// handle POST rquest at root
router.post('/', addItem);

// handle PUT rquest at "/:id" uri
router.put('/:id', updateItem);

// handle DELETE rquest at "/:id" uri
router.delete('/:id', deleteItem);

module.exports = router;
