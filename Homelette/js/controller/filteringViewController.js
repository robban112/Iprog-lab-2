var FilteringViewController = function(filteringView, dishesView, model) {
	filteringView.searchButton.click(function () {
		dishesView.loadDishesView(dishesView.container, dishesView.model, filteringView.dropDown["0"].value, filteringView.keyText["0"].value);
	});

}