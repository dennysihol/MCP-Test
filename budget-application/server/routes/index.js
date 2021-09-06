'use strict'

const express = require('express')
const router = express.Router()
const indexController = require('../controllers/index')
const incomeRouter = require('./incomeroutes')
const expenseRouter = require('./expenseroutes')

router.get('/', indexController.home)
router.use('/incomes', incomeRouter)
router.use('/expenses', expenseRouter)


module.exports = router