const Movie = require('./../models/movie.model');

module.exports = {

    list: async (req, res) => {
        let movies = await Movie.paginate();
        res.json({
            status: 'success',
            message: 'Movies list returned',
            data: movies
        });
    },

    find: async (req, res) => {
        let id = req.params.id;
        let movie = await Movie.findById(id)
        res.json({
            status: 'success',
            message: 'Movie returned',
            data: movie
        });
    },

    delete: async (req, res) => {
        let _id = req.params.id;
        let deleted = await Movie.deleteOne({_id});
        res.json({
            status: 'success',
            message: 'Movie deleted',
            data: {
                deletedCount : deleted.deletedCount
            }
        })
    }


}
