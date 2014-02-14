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
$(".datePicker").textInput('disable')