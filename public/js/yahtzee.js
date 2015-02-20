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
    var source = '/img/die';
    source = source + '-' + num + '.png'
    var $img = $('<img>').attr({
      src: source,
      height: 60,
      width: 60
    });
    return $img;
  }

  $('#container').append(this.roll());
}

window.Yahtzee.Models.Dice = function(num_dice) {
  this.dice = [];
  this.createDice = function() {
    for (var i = 0; i < num_dice; i++) {
      this.dice.push(new window.Yahtzee.Models.Dice())
    }
  }

  this.createDice();
}

$(function() {
  var menu = new window.Yahtzee.Views.Menu();
  var die = new window.Yahtzee.Models.Die();
  var dice = new window.Yahtzee.Models.Dice();
  debugger;
});
