var DishDetailView = function (container, model) {
	this.container = container;
	this.model = model;
	container.hide();
	this.confirmDishButton = container.find("#confirmDishButton");
	this.back = container.find("#back");

	model.addObserver(this);

	this.update = function(obj) {
		if(obj == undefined || obj.updates.includes("selectedDish")) {
			container.find("#ingredientsTable tr").remove();

			var dish = model.getSelectedDish();
			var ingredients = dish.ingredients;

			ingredients.forEach(ingr => {
				container.find("#ingredientsTable").append(
					`<tr>
						<td>${ingr.quantity} ${ingr.unit}</td>
						<td>${ingr.name}</td>
						<td>SEK</td>
						<td>${ingr.price}</td>
					</tr>`
				);
			})

			container.find("#totalCost").html("Total Cost: "+model.getDishPrice(dish));
			container.find("#dishName").html(dish.name);
			container.find("#prepText").html(dish.description);
			container.find("img").attr("src","images/" + dish.image);
		}
	}
}
