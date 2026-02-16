function newJoke(){
    $.ajax({
      dataType: "json",
      url: "https://geek-jokes.sameerkumar.website/api?format=json",
      success: function(results) {
        if (results["url"].endsWith(".mp4")) {
          $('#start').attr("str", "Whats up!");
        } else {
          $('#jokes').text("didn't work");
        }
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
}




function newEntree(){
    $.ajax({
      dataType: "json",
      url: " https://foodish-api.com/images/pizza/",
      success: function(results) {
        if (results["url"].endsWith(".mp4")) {
          $('#finish').attr("src", "https://tse1.mm.bing.net/th/id/OIP.3f4uw03GjHN2wa2tSeNc4wHaIu?pid=Api&P=0&h=220");
        } else {
          $('#finish').attr("src", results["url"]);
        }
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
}

function newAppetizer(){
    $.ajax({
      dataType: "json",
      url: " https://foodish-api.com/images/pizza/",
      success: function(results) {
        if (results["url"].endsWith(".mp4")) {
          $('#app').attr("src", "images/blank.png");
        } else {
          $('#app').attr("src", results["url"]);
        }
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
