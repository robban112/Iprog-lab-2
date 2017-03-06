var FilteringViewController = function(filteringView, dishesView, model) {
	filteringView.searchButton.click(function () {
		dishesView.load(filteringView.dropDown[0].value, filteringView.keyText[0].value);
	});
}
