const express = require('express');
const router = express.Router();
const IncomeController = require('../controllers/income')

router.get('/', IncomeController.listIncome)
router.get('/add', IncomeController.addIncome)
router.get('/edit/:id', IncomeController.editIncome)

router.post('/add', IncomeController.postIncome)
router.put('/edit/:id', IncomeController.postEditIncome)
router.delete('/delete/:id', IncomeController.deleteIncome)

module.exports = router