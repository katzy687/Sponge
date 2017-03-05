$(document).ready(function() {

  console.log(hebrewArr);
  console.log(hebrewArr[0].Hebrew);

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


  // attempt at start/pause
  // var interval;
  // var playing = false;
  // $("#start").click(function() {
  //   if (playing) {
  //     return;
  //   }
  //   playing = true;
  //   interval = setInterval(function() {
  //     $("#start").click(function() {
  //
  //       // Reset the DOM on click
  //       $(".card").remove();
  //
  //       // create divs and append to dom
  //       $.each(hebrewArr, function(index, value) {
  //
  //         var heb = "<div class='card'>" + hebrewArr[index].Hebrew + "</div>";
  //         var en = "<div class='card'>" + hebrewArr[index].English + "</div>";
  //
  //         $("#magic").append(heb).append(en);
  //
  //       });
  //
  //       // add unique IDs and fade in
  //       $('.card').each(function(index) {
  //         $(this).attr('id', 'card' + index);
  //         $('#card' + (index)).delay(1000 * index).fadeIn().fadeOut();
  //       });
  //
  //     }); // end of on-click
  //
  //   }, 0);
  // });
  // $("#pause").click(function() {
  //   playing = false;
  //   clearInterval(interval);
  // });



  $("#start").click(function() {

    // Reset the DOM on click
    $(".card").remove();

    // create divs and append to dom
    $.each(hebrewArr, function(index, value) {

      var heb = "<div class='card'>" + hebrewArr[index].Hebrew + "</div>";
      var en = "<div class='card'>" + hebrewArr[index].English + "</div>";

      $("#magic").append(heb).append(en);

    });

    // add unique IDs and fade in
    $('.card').each(function(index) {
      $(this).attr('id', 'card' + index);
      $('#card' + (index)).delay(1000 * index).fadeIn().fadeOut();
    });

  }); // end of on-click

}); // document on ready
