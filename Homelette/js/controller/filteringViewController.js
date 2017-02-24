var FilteringViewController = function(filteringView, dishesView, model) {
	this.dishFrame = dishesView.container.find(".select-dish");
	filteringView.searchButton.click(function () {
		dishesView.loadDishesView(dishesView.container, dishesView.model, filteringView.dropDown["0"].value, filteringView.keyText["0"].value);
		this.dishFrame = dishesView.container.find(".select-dish");
	});

	this.dishFrame.click(function (e) {
		alert(123);	
	});


}