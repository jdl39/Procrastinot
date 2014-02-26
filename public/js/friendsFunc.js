enumerateFriends(function(friend) {
	FB.api("/" + friend["FBID"], function(friendDetails) {
	FB.api("/" + friend["FBID"] + "/picture?redirect=0", function(friendPicture) {
		$("#main-container").append('\
			<div>\
			<a href="/profile?fbid=' + friend["FBID"] + '"><img src="' + friendPicture["data"].url + '" class = "img-responsive" /></a>\
			<p>' + friendDetails["name"] + '</p>\
			<p>Points: ' + friend["points"] + '</p>\
			</div>\
			');
	});
	});
})