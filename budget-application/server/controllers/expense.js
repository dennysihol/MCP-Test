const Expense  = require('../models').expense

class ExpenseController {

    static listExpense(req, res) {
        Expense.findAll({
            order: [['createdAt', "ASC"]]
        })
        .then((data) => {
            res.render('expenses', {data:data})
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static addExpense (req, res) {
        res.render('addExpense')
    }

    static postExpense (req, res) {
        let data = req.body
        const newExpense = {
            title: data.title,
            description: data.description,
            value: data.value
        }

        Expense.create(newExpense)
            .then((data) => {
                console.log(data);
                res.redirect('/Expenses')
            })
            .catch((err) => {
                let newErr = err.errors
                let errMsg
                newErr.forEach(e => {
                    errMsg = e.message
                });
                res.send(errMsg) 
            })
    }

    static editExpense(req, res) {
        let id = req.params.id
        let dataExpense
        Expense.findOne({
            where: {
                id: +id
            }
        })
            .then((data) => {
                dataExpense = data
                res.render('editExpense', {dataExpense})
            })
            .catch((err) => {
                res.send(err)
            })   
    }

    static postEditExpense (req, res) {
        const id = req.params.id
        const body = req.body
        const editedExpense = {
            title: body.title,
            description: body.description,
            value: body.value,
        }

        Expense.update(editedExpense, {
            where : {
                id : +id
            }
        })
            .then((data) => {
                res.redirect('/expenses')
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static deleteExpense(req, res) {
        const id = req.params.id

        Expense.destroy({
            where: {
                id: +id
            }
        })
            .then((data) => {
                res.redirect('/expenses')
            })
            .catch((err) => {
                res.send(err)
            })
    }

}

module.exports = ExpenseController