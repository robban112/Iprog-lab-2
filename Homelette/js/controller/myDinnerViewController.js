var MyDinnerViewController = function(view, model) {

	view.dropDown.change(function() {
		model.setNumberOfGuests(parseInt(view.dropDown["0"].value));
	});

	view.container.on('click', '.menuDish', function(e) {
		const target = e.currentTarget;
		model.removeDishFromMenu(target.id);
	});
}
