const router = require('express').Router()
const typeController = require('../controller/typeController')

router.post('/', typeController.create)
router.get('/', typeController.getAll)

module.exports = router