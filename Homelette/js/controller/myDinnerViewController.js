var MyDinnerViewController = function(view, model) {

	view.dropDown.change(function() {
		model.setNumberOfGuests(parseInt(view.dropDown["0"].value));
	});

	view.firstRow.click(function() {
		model.removeDishFromMenu(1);
	});

	view.secondRow.click(function() {
		model.removeDishFromMenu(2);
	});

	view.thirdRow.click(function() {
		model.removeDishFromMenu(3);
	});
}