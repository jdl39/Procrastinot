var addToLeaderboard = function(friend, friendDetails, friendPic) {
	var toInsert = $('<tr class="leaderboardRow"><td><a href="/profile?fbid=' + friend["FBID"] + '"><img src="' + friendPic["data"].url + '" class="friendTableImage" /></a>' + friendDetails["name"] + '</td><td>Points: <span class="friendPoints">' + friend["points"] + '</span></td><td>Level: 0</td></td>');

	var elementInserted = false;
	var leaderboard = $(".leaderboardTable").children().each(function(child) {
		//if (!child) return;
		console.log(child);
		var pointsE = child.find(".friendPoints");
		var points = pointsE.text();
		if (parseInt(points) < friend["points"] && !elementInserted) {
			toInsert.insertAfter(child);
			elementInserted = true;
		}
	});
	if (!elementInserted) {
		$(".leaderboardTable").append(toInsert);
	}
}


enumerateFriends(function(friend) {
	FB.api("/" + friend["FBID"], function(friendDetails) {
	FB.api("/" + friend["FBID"] + "/picture?redirect=0", function(friendPicture) {
		addToLeaderboard(friend, friendDetails, friendPicture);
	});
	});
});