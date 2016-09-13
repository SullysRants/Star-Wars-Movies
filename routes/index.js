var moviesJSON = require('../movies.json');

//home
exports.home = function(req, res) {

	var movies = moviesJSON.movies

   	res.render('home', {
		title : "Star Wars Movies",
		movies : movies
	});
};


//move_single
exports.movie_single =  function(req, res){

	var movies = moviesJSON.movies

    var episode_number = req.params.episode_number;

    var movie = movies[episode_number - 1];

    var title = movie.title;

    res.render('movie_single', {
    	title : title,
    	movies : movies
    });
};

//notFound
exports.notFound = function(req,res){
    res.send("This is not the page that you are looking for");
};
