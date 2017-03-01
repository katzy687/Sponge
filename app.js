var sampleHebrewWords = [{
    Hebrew: "דג",
    English: "fish",
    point_value: 0
  },
  {
    Hebrew: "כלב",
    English: "dog",
    point_value: 0
  },
  {
    Hebrew: "חתול",
    English: "cat",
    point_value: 0
  }
]


$("#cycle button").click(function() {

  // Reset the DOM on click
  $(".card").remove();

  // create divs and append to dom
  $.each(sampleHebrewWords, function(index, value) {

    var heb = "<div class='card'>" + sampleHebrewWords[index].Hebrew + "</div>";
    var en = "<div class='card'>" + sampleHebrewWords[index].English + "</div>";

    $("#magic").append(heb).append(en);

  });

  // add unique IDs and fade in
  $('.card').each(function(index) {
    $(this).attr('id', 'card' + index);
    $('#card' + (index)).delay(1000 * index).fadeIn().fadeOut();
  });

}); // end of on-click
