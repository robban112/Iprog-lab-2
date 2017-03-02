var OverviewHeaderView = function(container, model) {
	this.container = container;
	this.model = model;
	container.hide();
	this.backAndEditDinnerButton = container.find("#backAndEditDinnerButton");
	this.header = container.find("#headerText");

	this.load = function() {
		this.header.html("My Dinner: " + this.model.getNumberOfGuests() + " people");
	}
}
