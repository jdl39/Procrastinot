FB.getLoginStatus(function(response) {
    if (response.status === "connected") {
      FB.api('/' + fbID, function(user) {
        console.log(user)
        $("#username").text(user["name"])
      });

      FB.api('/' + fbID + '/picture?redirect=0&type=large', function(response) {
        console.log(response);
        $(".profilePic").attr("src", response["data"].url);
      });
  	}
});


enumerateFriends(function(friend) {
	FB.api("/" + friend["FBID"] + "/picture?redirect=0", function(friendPicture) {
		$("#friendCollection").append('<div><a href="/profile?fbid=' + friend["FBID"] + '"><img src="' + friendPicture["data"].url + '" class="friendTableImage" /></a></div>');
	});
})

$("#helpBtn").click(function(e) {
  window.location.href = "/";
});