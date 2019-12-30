const kursusController = require('../controller/kursusController')
const auth = require("../middleware/auth.js")
const userController = require('../controller/userController')

module.exports = app => {
    app.get('/', kursusController.home)
    app.get('/kursus',kursusController.listKursus)
    app.get('/kursus/:id', kursusController.detailKursus)
    app.post('/kursus/', kursusController.tambahKursus)
    app.put('/kursus/:id', kursusController.ubahKursus)
    app.delete('/kursus/:id', kursusController.hapusKursus)

    app.get('/user', userController.listUser)
    app.get('/user/:id', userController.detailUser)
    app.post('/user', userController.tambahUser)
    app.put('/user/:id', userController.ubahUser)
    app.delete('/user/:id', userController.hapusUser)
    app.post('/gettoken', userController.getToken)

}