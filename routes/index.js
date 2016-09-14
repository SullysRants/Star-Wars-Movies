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

	if(episode_number >= 1 && episode_number <= 6){

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		res.render('movie_single', {
			title : title,
			movies : movies,
			movie : movie,
			main_characters : main_characters
		});
	}
	else{
		res.send("This is not the page you are looking for");
	}

};

//notFound
exports.notFound = function(req,res){
	res.send("This is not the page that you are looking for");
};
