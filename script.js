function newJoke(){
    $.ajax({
      dataType: "json",
      url: "https://geek-jokes.sameerkumar.website/api?format=json",
      success: function(results) {
        console.log(results["joke"]);
        $('#jokes').text(results["joke"]);
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
}




function newEntree(){
    $.ajax({
      dataType: "json",
      url: "https://foodish-api.com/api",
      success: function(results) {
        console.log(results);
          $('#finish').attr("src", results["image"]);
        
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
}

function newAppetizer(){
    $.ajax({
      dataType: "json",
      url: "https://foodish-api.com/api",
      success: function(results) {
        $("#start").attr("src", results["image"]);
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
}

var entreeButton = $("#ent");
entreeButton.click(newEntree);

var appetizerButton = $("#app");
appetizerButton.click(newAppetizer);

var jokeButton = $("#joke");
jokeButton.click(newJoke);
