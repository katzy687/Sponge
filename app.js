
var sampleHebrewWords = [
  {
    hebrew_word: "דג",
    english_word: "fish",
    point_value: 0
  },
  {
    hebrew_word: "כלב",
    english_word: "dog",
    point_value: 0
  },
  {
    hebrew_word: "חתול",
    english_word: "cat",
    point_value: 0
  }
]

$("#cycle button").click(function(){

  function logContent(el, index, array) {
    console.log('a[' + index + '] = ' + el.hebrew_word);
  };
  sampleHebrewWords.forEach(logContent);



  $(".flashcard").fadeOut(1000)
    .text(sampleHebrewWords[0].hebrew_word).fadeOut(1000);


});
