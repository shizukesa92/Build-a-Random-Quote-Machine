var currentQuote = "";
var currentAuthor = "";

function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
	url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    success: function(response) {

      currentQuote = response.quote;
      currentAuthor = response.author;
      
      $("#quote").html(currentQuote);
      $("#author").html(currentAuthor);
      
$("#twitter").attr("href", "https://twitter.com/intent/tweet?text=" + currentQuote + " Author " + currentAuthor);
      
$("#tumblr").attr("href", "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption="+currentAuthor+"&content=" + currentQuote+"&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button");
    }
  })
}


var letters = "0123456789ABCDEF";
var color = "#";

var colors = function getRandomColor() {
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

$(document).ready(function(){
  getQuote();
  $(".btn").on("click", getQuote);
  
  $("body, .btn, .fa-twitter, .fa-tumblr").css("background-color", colors);
  $(".fa-quote-left, .dash, .quote-text, .quote-author").css("color", colors);            
});