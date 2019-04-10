$(document).ready(function () {

  var term = ["Cat", "Dog", "Horse", "Cow"];


  function displayAnimalGifs() {
    var storeTerm = $(this).attr("data-term");
    var queryURL = `https://api.giphy.com/v1/gifs/search?q=${storeTerm}&api_key=J40tZPfBSGRJp1iF5AwOdK5grc2qy5jk&limit=10`

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response)
      // create div to hold the gifs

      var results = response.data;

      for (var i = 0; i < results.length; i++) {

        var gifDiv = $(`<div class="gif">`)

        var gifURL = results[i].images.fixed_height.url;

        var gifImage = $(`<img class="col">`);

        gifImage.attr({
          "src": results[i].images.fixed_height_still.url,
          "data-still": results[i].images.fixed_height_still.url,
          "data-animate": gifURL,
          "data-state": "animate"
        });
        var rating = $("<p>").text(`Rating: ${results[i].rating}`);

        gifDiv.append(gifImage);
        gifDiv.append(rating);

        $("#gifs").prepend(gifDiv);
      }
    });

  }

  function renderButtons() {
    $("#buttons").empty();

    for (var i = 0; i < term.length; i++) {

      var gifButton = $("<button>");
      gifButton.addClass("gif-button btn btn-lg btn-outline-dark text-capitalize");
      gifButton.attr("data-term", term[i]);
      gifButton.text(term[i]);

      $("#buttons").append(gifButton);


    }


  }


  $("#form").on("submit", function () {
    event.preventDefault();

    var userInput = $("#term").val().trim();

    if (userInput === "") {
      return false;
    }

    term.push(userInput);


    renderButtons();
    $("#term").val("");
  });


  $(document).on("click", ".gif-button", displayAnimalGifs);

  $("#gifs").on("click", "img", function () {
    console.log("hi")
    var state = $(this).attr("data-state");

    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });
  renderButtons();

});