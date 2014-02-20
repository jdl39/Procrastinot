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

// -----------------------------------------