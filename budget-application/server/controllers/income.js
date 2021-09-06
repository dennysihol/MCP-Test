const Income = require('../models').income
// const Income = require('../models/income')

class IncomeController {

    static listIncome(req, res) {
        Income.findAll({})
        .then((data) => {
            res.render('incomes', {data:data})
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static addIncome (req, res) {
        res.render('addIncomes')
    }

    static postIncome (req, res) {
        let data = req.body
        const newIncome = {
            title: data.title,
            description: data.description,
            value: +data.value
        }

        Income.create(newIncome)
            .then((data) => {
                console.log(data);
                res.redirect('/incomes')
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

    static editIncome(req, res) {
        let id = req.params.id
        let dataIncome
        Income.findOne({
            where: {
                id: +id
            }
        })
            .then((data) => {
                dataIncome = data
                res.render('editIncome', {dataIncome})
            })
            .catch((err) => {
                res.send(err)
            })   
    }

    static postEditIncome (req, res) {
        const id = req.params.id
        const body = req.body
        const editedIncome = {
            title: body.title,
            description: body.description,
            value: body.value,
        }

        Income.update(editedIncome, {
            where : {
                id : +id
            }
        })
            .then((data) => {
                res.redirect('/incomes')
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static deleteIncome(req, res) {
        const id = req.params.id

        Income.destroy({
            where: {
                id: +id
            }
        })
            .then((data) => {
                res.redirect('/incomes')
            })
            .catch((err) => {
                res.send(err)
            })
    }

}

module.exports = IncomeController