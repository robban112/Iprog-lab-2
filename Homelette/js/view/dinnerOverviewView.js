var DinnerOverviewView = function (container, model) {

	this.container = container;
	this.model = model;
	container.hide();
	var dishes = model.getFullMenu();
	this.printFullRecipeButton = container.find("#printFullRecipeButton");

	this.load = function() {
		var dishes = this.model.getFullMenu();

		container.find(".dishOverviewFrame").remove();

		dishes.forEach(dish => {
			const dishOverviewFrame = $(`
				<div class = "side dishOverviewFrame" style="margin-left: 40px; width: 140px; padding:0" id="starterOverview">
					<img src="${dish.image}" style="margin-bottom: 5px;width: 140px;height:130px;">
					<div class = "w3-container w3-black" style="height:40px;">
						<p style="text-align: center;">${dish.title}</p>
					</div>
					<div class = "w3-container" style="padding:3; text-align: right;">
						<div>
							${this.model.getDishPrice(dish) + " SEK"}
						</div>
					</div>
				</div>
			`)
			container.prepend(dishOverviewFrame)
		})
		container.find("#totalCost").html("Total Price: " + this.model.getTotalMenuPrice() + " SEK");
	}
}
