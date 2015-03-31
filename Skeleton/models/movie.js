var imdb = imdb || {};


(function (scope) {
    var id = 1;

    function Movie(title, length, rating, country) {
        this.title = title;
        this.length = length;
        this.rating = rating;
        this.country = country;
        this._actors = [];
        this._reviews = [];
    }

    Movie.prototype.addActor = function addActor(actor) {
        this._actors.push(actor);
    }

    Movie.prototype.getActors = function getActors() {
        return this._actors;
    }

    Movie.prototype.addReview  = function addReview(review) {
        this._reviews.push(review);
    }

    Movie.prototype.deleteReview = function deleteReview(review) {
        for(var i = 0; i < this._reviews.length; i++) {
            if(this._reviews[i] === review) {
                this._reviews.splice(i, 1);
                break;
            }
        }
    }

    Movie.prototype.deleteReviewById = function deleteReviewById(id) {
        this._reviews.splice(id, 1);
    }

    Movie.prototype.getReviews = function getReviews() {
        return this._reviews;
    }

    scope._Мovie = Movie;

    scope.getMovie = function getMovie(title, length, rating, country) {
        return new Movie(title, length, rating, country);
    }
    id++;

//===========================================================================
    /*function Theatre(name, length, rating, country) {
        Movie.call(this, name, length, rating, country);
        this.isPuppet = false;
    }

    Theatre.prototype = Object.create(Movie.prototype);
    Theatre.prototype.constructor = Theatre;

    scope.getTheatre = function getTheatre(name, length, rating, country) {
        return new Theatre(name, length, rating, country);
        id++;

    }*/
}(imdb));