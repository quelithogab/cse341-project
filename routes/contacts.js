const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.route('/')
    .get(contactsController.getAll);

router.route('/:id')
    .get(contactsController.getSingle);

router.post('/', contactsController.createContact);
router.put('/:id', contactsController.updateContact);
router.delete('/:id', contactsController.deleteContact);

module.exports = router;
