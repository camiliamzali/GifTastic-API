$(document).ready(function () {

  var term = [];

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
    $("#buttons").empty();

    for (var i = 0; i < term.length; i++) {
      $("#buttons").append(`<button>${term[i]}</button>`)
    }


  }


  $("#submit").on("click", function () {
    event.preventDefault();
    var userInput = $("#term").val();
    if (userInput === "") {
      return false;
    }
    term.push(userInput);

    // $.ajax({
    //   url: queryURL,
    //   method: "GET"
    // }).then(function (response) {
    //   console.log(response)
    renderButtons();
    $("#term").val("");
    // });
  });
  renderButtons();

  createURL();


});