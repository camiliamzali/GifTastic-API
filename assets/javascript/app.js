$(document).ready(function () {

  var term = ["Skunk", "test"];

  function createURL() {
    queryURL = `https://api.giphy.com/v1/gifs/search?`

    queryParams = {
      "api_key": "J40tZPfBSGRJp1iF5AwOdK5grc2qy5jk"
    }

    queryParams.q = $("#term").val().trim();

    console.log(`
    ---------------
    URL: ${queryURL}
    ---------------`);
    console.log(queryURL + $.param(queryParams));
    return queryURL + $.param(queryParams);
  }

  function renderButtons() {

    var userInput = $("#term").val();
    console.log(userInput)

    $("#buttons").empty();



    term.push(userInput);

    $("#buttons").append(`<button>${userInput}</button>`);
  }


  $("#submit").on("click", function () {
    event.preventDefault();
    // $.ajax({
    //   url: queryURL,
    //   method: "GET"
    // }).then(function (response) {
    //   console.log(response)
    renderButtons();

    // });
  });
  createURL();


});