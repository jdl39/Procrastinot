$(".projectRow").click(function(e) {
	window.location.href = "/addProject?"
})

$(".projectCompleteBox").hover(function(e) {
	$(this).html("&#x2713;")
	$(this).css("background-color", "green")
})

$(".projectCompleteBox").click(function(e) {
	$(this).parent().remove();

	// Mark project finished
})

$(".datePicker").datepicker()
//$(".datePicker").textInput('disable')


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