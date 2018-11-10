$('#wrapper').onepage_scroll({
  loop: false,
  animationTime: 750,
  pagination: false
});

$('#arrow').click(function() {
  $('#wrapper').moveDown();
});

$('#span-1').click(function() {
  $('#wrapper').moveTo(1);
});

$('#span-2').click(function() {
  $('#wrapper').moveTo(2);
});

$('#span-3').click(function() {
  $('#wrapper').moveTo(3);
});

$('#span-4').click(function() {
  $('#wrapper').moveTo(4);
});

$('#span-5').click(function() {
  $('#wrapper').moveTo(5);
});