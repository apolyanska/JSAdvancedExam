var imdb = imdb || {};


(function (scope){
    var id = 1;

    function Genre(name){
        this.name = name;
        this._movies = [];
    }
    Genre.prototype.addMovie = function addMovie(movie) {
        this._movies.push(movie);
    };

    Genre.prototype.deleteMovie = function deleteMovie(movie) {
        for (var i = 0; i < this._movies.length; i++) {
            if (this._movies[i] === movie) {
                this._movies.splice(i, 1);
                break;
            }
        }
    };

    Genre.prototype.deleteMovieById = function deleteMovieById(id) {
        this._movies.splice(id, 1);
    };

    Genre.prototype.getMovies = function getMovies() {
        return this._movies;
    };

    scope.getGenre = function getGenre(name) {
        return new Genre(name);
    };
    id++;


}(imdb));