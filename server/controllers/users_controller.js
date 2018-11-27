const User = require('../models/users')

module.exports = {

    sign_up(req, res) {

        const newUser = {
            fullname: req.body.form.fullname,
            birthplace: req.body.form.birthplace,
            birthdate: req.body.form.birthdate,
            address: req.body.form.address,
            file: req.body.form.file,
            mariagestatus: req.body.form.mariagestatus
        }

        User.create(newUser, (err, success) => {
            if (err) {
                console.log(err, 'error')
                res.status(500).json(err)
            } else {
                console.log(success, 'success')
                res.status(201).json( { status: 'success' } )
            }
        })

    }

}