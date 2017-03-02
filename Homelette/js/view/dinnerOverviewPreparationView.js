var DinnerOverviewPreparationView = function (container, model) {
	this.container = container;
	this.model = model;
	container.hide();

	this.load = function () {
		var dishes = model.getFullMenu();
		var array = ["starter", "mainDish", "dessert"];

		for(var i = 0; i<3; i++) {
			var b = this.container.find("#"+array[i] + "Info");
			if(dishes[i] == undefined) { b.hide(); }
			else {
				b.find("img").attr("src","images/"+dishes[i].image);
				b.find("#dishName").html(dishes[i].name);
				b.find("#prepText").html(dishes[i].description);
			}
		}
	}
}
