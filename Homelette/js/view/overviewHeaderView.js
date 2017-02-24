var OverviewHeaderView = function(container, model) {
	this.container = container;
	this.model = model;
	container.hide();
	this.backAndEditDinnerButton = $("#backAndEditDinnerButton");
	this.header = $("#headerText");

	this.loadOverviewHeaderView = function(container, model) {
		this.header.html("My Dinner: " + model.getNumberOfGuests() + " people");
	}
}