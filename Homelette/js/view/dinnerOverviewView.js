var DinnerOverviewView = function (container, model) {

	this.container = container;
	this.model = model;
	container.hide();
	var dishes = model.getFullMenu();
	this.printFullRecipeButton = container.find("#printFullRecipeButton");

	this.load = function() {
		var dishes = this.model.getFullMenu();

		container.find(".dishOverviewFrame").remove();

		for(var i = 0; i<dishes.length;i++){
			const dishOverviewFrame = $(`
				<div class = "side dishOverviewFrame" style="margin-left: 40px; width: 140px; padding:0" id="starterOverview">
					<img src="${dishes[i].image}" style="margin-bottom: 5px;width: 140px;height:130px;">
					<div class = "w3-container w3-black" style="height:40px;">
						<p style="text-align: center;">${dishes[i].title}</p>
					</div>
					<div class = "w3-container" style="padding:3; text-align: right;">
						<div>
							${this.model.getDishPrice(dishes[i]) + " SEK"}
						</div>
					</div>
				</div>
			`)
			container.prepend(dishOverviewFrame)
		}
		container.find("#totalCost").html("Total Price: " + this.model.getTotalMenuPrice() + " SEK");
	}
}
