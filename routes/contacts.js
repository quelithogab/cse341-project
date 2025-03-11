const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.route('/')
    .get(contactsController.getAll);

router.route('/:id')
    .get(contactsController.getSingle);

module.exports = router;
