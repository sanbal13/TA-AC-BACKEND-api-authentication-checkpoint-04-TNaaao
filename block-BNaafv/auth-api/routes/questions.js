const express = require('express');

const router = express.Router();

/* Create Question */
router.post('/', (req, res, next) => {

});

/* List Questions */
router.get('/', (req, res, next) => {

});

/* Update Question */
router.put('/:questionId', (req, res, next) => {

});

/* Delete Question */
router.delete('/:slug', (req, res, next) => {

});

/* Add answer */
router.post('/:questionId/answers', (req, res, next) => {

});

/* List answers */
router.get('/:questionId/answers', (req, res, next) => {

});

module.expots = router;
