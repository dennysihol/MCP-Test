const express = require('express');
const router = express.Router();
const ExpenseController = require('../controllers/expense')

router.get('/', ExpenseController.listExpense)
router.get('/add', ExpenseController.addExpense)
router.get('/edit/:id', ExpenseController.editExpense)

router.post('/add', ExpenseController.postExpense)
router.put('/edit/:id', ExpenseController.postEditExpense)
router.delete('/delete/:id', ExpenseController.deleteExpense)

module.exports = router