$(".datePicker").datepicker()


$("#addProjectSubmitBtn").click(function(e) {
	e.preventDefault()
	var json = {
		"title" : $("#name").val(),
		"due" : new Date($("#duedate").val()),
		"points" : parseInt($("#points").val()),
		"completed" : null,
		"success" : false
	};

	$.post("/projects/add", json, function() {
		window.location.href = "/projects";
	});
})