

    $("#tos").on("click", function(event) {
      if ($("#tos").hasClass("index")) {

            window.open("privacy/tou.html","_self");
} else {

  window.open("../privacy/tou.html","_self");
}

      });


      $("#priv").on("click", function(event) {
        if ($("#priv").hasClass("index")) {

              window.open("Disclaimer/privacy.html","_self");
  } else {

    window.open("../Disclaimer/privacy.html","_self");
  }

        });
