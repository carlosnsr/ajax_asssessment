/*
  1.  What does AJAX stand for?

  YOUR ANSWER HERE


  2.  Why do we need AJAX?  How does it affect websites?

  YOUR ANSWER HERE


  3.  In your own words, explain "asynchronous"

  YOUR ANSWER HERE


  4.  Look at the below snippet of code.
      Do not run it.
      But if you did run it, what will the output of this code be?

  YOUR ANSWER HERE


*/

$(document).ready( function () {
  console.log("Hello Dave")
  $.get("http://slow.website.com/gimme_answer", function () {
    console.log("Just what do you think you're doing, Dave?")
  })
  console.log("Goodbye Dave")
})
