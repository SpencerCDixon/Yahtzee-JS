window.Yahtzee = {
  Models: {},
  Views: {}
};

window.Yahtzee.Views.Menu = function() {
  this.playButton = $('<button>').attr('class', 'btn').text('Play Game');
  this.players = 0;


  this.initialize = function() { // this refers to the Menu object
    var gameDiv = $('<div>').attr('id', 'menu-screen').text('game screen');
    $('#container').append(gameDiv);
    $('#container').append(this.playButton);
    this.events();
  }

  this.events = function() {
    var that = this;
    this.playButton.on('click', function() {
       var players = prompt('How many players?');
    });
  }

  this.initialize();
}

window.Yahtzee.Models.Die = function() {
  this.roll = function() {
    var num = Math.floor(Math.random() * 6) + 1
    var source = 'die';
    source = source + '-' + num + '.png'
    var $img = $('<img>').attr('src', source);
    return $img;
  }

  debugger;

}









$(function() {
  var menu = new window.Yahtzee.Views.Menu();
  var die = new window.Yahtzee.Models.Die();
});
