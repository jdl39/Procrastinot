// FACEBOOK STUFF --------------------------
  FB.init({
    appId      : '598744690199924',
    status     : true, // check login status
    cookie     : true, // enable cookies to allow the server to access the session
    xfbml      : true  // parse XFBML
  });

  FB.getLoginStatus(function(response) {
    // Here we specify what we do with the response anytime this event occurs.

    // If the user isn't connected, they need to login.
    if (response.status !== 'connected') {
      console.log("Oh no! You're not logged in!")
      window.location.replace("/login")
      //FB.login()
    }
  });
// -----------------------------------------

// UTILITY FUNCTIONS -----------------------
var enumerateFriends = function(callback) {
  FB.getLoginStatus(function(response) {
    if (response.status === "connected") {
      FB.api('/me/friends', function(response) {
        var friendIDs = []
        for (var i = 0; i < response["data"].length; i++) {
          var friend = response["data"][i];
          friendIDs.push(friend["id"]);
        }
        $.post("/users", {"ids" : friendIDs}, function(friendList) {
          console.log(friendList);
          for (var i = 0; i < friendList.length; i++) {
            var friend = friendList[i];
            callback(friend);
          }
        })
      });
    }
  });
}
// -----------------------------------------