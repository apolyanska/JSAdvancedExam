var imdb = imdb || {};
var id = 1;

(function(scope) {
    function Theatre(name, length, rating, country, isPuppet) {
        scope._Movie.call(this, name, length, rating, country);
        this.isPuppet = isPuppet;

    }

    Theatre.prototype = Object.create( scope._Movie.prototype);
    Theatre.prototype.constructor = Theatre;


    Theatre.extend(scope._Movie);

    scope.getTheatre = function getTheatre(name, length, rating, country, isPuppet) {
        return new Theatre(name, length, rating, country, isPuppet);

    }
    id++;
} (imdb));
