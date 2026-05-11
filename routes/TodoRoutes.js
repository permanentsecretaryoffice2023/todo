const express = require('express');

const {
    createTodo,
    getTodos,
    getSingleTodo,
    updateTodo,
    deleteTodo
} = require('../controllers/TodoController');

const router = express.Router();


// CREATE TODO
router.post('/todos', createTodo);


// GET ALL TODOS
router.get('/todos', getTodos);


// GET SINGLE TODO
router.get('/todos/:id', getSingleTodo);


// UPDATE TODO
router.put('/todos/:id', updateTodo);


// DELETE TODO
router.delete('/todos/:id', deleteTodo);


module.exports = router;