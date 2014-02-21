$(".projectRow").click(function(e) {
	window.location.href = "/addProject?"
})

$(".projectCompleteBox").hover(function(e) {
	$(this).html("&#x2713;")
	$(this).css("background-color", "green")
})

$(".projectCompleteBox").click(function(e) {
	e.stopPropagation();
	var json = { "id" : $(this).attr("id")}
	var saveThis = $(this);
	$.post("/projects/complete", json, function() {
		console.log("REMOVING");
		saveThis.parent().remove();
		// TODO: Add project to "completed" list
	});
})