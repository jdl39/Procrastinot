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
// Called once the FB SDK is initialized. (I think?)
//window.fbAsyncInit = function() {
  FB.init({
    appId      : '598744690199924',
    status     : true, // check login status
    cookie     : true, // enable cookies to allow the server to access the session
    xfbml      : true  // parse XFBML
  });

  //FB.Event.subscribe('auth.authResponseChange', function(response) {
  FB.getLoginStatus(function(response) {
    // Here we specify what we do with the response anytime this event occurs.

    // If the user isn't connected, they need to login.
    if (response.status !== 'connected') {
      console.log("Oh no! You're not logged in!")
      window.location.replace("/login")
      //FB.login()
    }
  });
//};

/*
// Load the SDK asynchronously
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));*/
// -----------------------------------------