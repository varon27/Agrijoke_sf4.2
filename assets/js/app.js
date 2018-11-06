/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

var $ = require('jquery');
// JS is equivalent to the normal "bootstrap" package
// no need to set this to a variable, just require it
require('bootstrap-sass');

// or you can include specific pieces
// require('bootstrap-sass/javascripts/bootstrap/tooltip');
// require('bootstrap-sass/javascripts/bootstrap/popover');

$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
});


// any CSS you require will output into a single css file (app.css in this case)
/*require('../css/app.css');
require('../css/style.css');*/

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// var $ = require('jquery');

$(document).ready(function() {
    s = new slider("#gallery");
});



var slider = function(id){
    var self=this;
    this.div = $(id);
    this.slider = this.div.find('.slider');
    this.width = this.div.width();
    this.widthElement = 0;
    this.div.find('.portfolio-item').each(function () {
        self.widthElement+= $(this).width();
        self.widthElement+=parseInt($(this).css("padding-left"));
        self.widthElement+=parseInt($(this).css("padding-right"));
        self.widthElement+=parseInt($(this).css("margin-left"));
        self.widthElement+=parseInt($(this).css("margin-right"));
    });
    this.previousArrow = this.div.find(".gallery-previous");
    this.nextArrow = this.div.find(".gallery-next");
    this.jump = this.width/2;
    this.steps = Math.ceil(this.widthElement/this.jump - this.width/this.jump);
    this.current = 0;

    /*alert(this.steps);*/

    this.nextArrow.click(function () {
        if(self.current <= self.steps){
            self.current++;
            self.slider.animate(
                {
                    left: -self.current * self.jump
                }, 1000);

        } else {
            alert("stop")
        }

    });

    this.previousArrow.click(function () {
        if(self.current >0){
            self.current--;
            self.slider.animate(
                {
                    left: -self.current * self.jump
                }, 1000);

        }

    });
}
