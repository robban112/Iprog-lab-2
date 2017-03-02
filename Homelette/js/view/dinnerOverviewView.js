var DinnerOverviewView = function (container, model) {

	this.container = container;
	this.model = model;
	container.hide();
	var dishes = model.getFullMenu();
	this.printFullRecipeButton = container.find("#printFullRecipeButton");

	this.load = function() {
		var dishes = this.model.getFullMenu();
		var array = ["starter", "mainDish", "dessert"];

		for(var i = 0; i<3; i++) {
			var b = this.container.find("#"+array[i] + "Overview");
			if(dishes[i] == undefined) {
				b.hide();
				b.find("img").attr("src","");
				b.find("p").html("");
				b.find("#cost").html("0.00 SEK");
			} else {
				b.show();
				b.find("img").attr("src","images/"+dishes[i].image);
				b.find("p").html(dishes[i].name);
				b.find("#cost").html(this.model.getDishPrice(dishes[i]) + ".00 SEK");
			}
		}
		container.find("#totalCost").html("Total Price: " + this.model.getTotalMenuPrice());
	}
}
