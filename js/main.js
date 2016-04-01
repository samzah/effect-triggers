var $box = $('.box');
var $diamond = $('.diamond');
var $panel = $('.panel');
var $circle = $('.circle');
var $list = $('.list');

var $btnShowHide = $('.btn-show-hide');
var $btnMove = $('.btn-move');
var $btnCollapseexpand = $('.btn-collapse-expand');
var $btnBounce = $('.btn-bounce');
var $btnAppend = $('.btn-append');


$btnShowHide.on('click', function (e) {
  $box.toggleClass('is-clicked');
});

$btnMove.on('click', function (e) {
  $diamond.toggleClass('diamond-click');
});

$btnCollapseexpand.on('click', function (e) {
  $panel.toggleClass('panel-click');
});

$btnBounce.on('click', function (e) {
  $circle.toggleClass('circle-click');
});

$btnAppend.on('click', function (e) {
  $list.toggleClass('list-click');
});
