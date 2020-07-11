var express = require('express');
var router = express.Router();
var MovieController = require('./../controllers/movie.controller');

/* GET movie listing. */
router.get('/',
    MovieController.list
);

/* GET movie by id. */
router.get('/:id',
    MovieController.find
);

/* POST insert new movie. */
router.post('/', 
    (req, res, next) => {
        
    }
);

/* PUT edit movie. */
router.put('/:id',
    (req, res, next) => {

    }
);

/* DELETE movie */
router.delete('/:id', 
    MovieController.delete
);

module.exports = router;