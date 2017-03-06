var DishDetailView = function (container, model) {
	this.container = container;
	this.model = model;
	container.hide();
	this.confirmDishButton = container.find("#confirmDishButton");
	this.back = container.find("#back");

	model.addObserver(this);

	this.update = function(obj) {
		if(obj == undefined || obj.updates.includes("selectedDish") || obj.updates.includes("numberOfGuests")) {
			container.find("#ingredientsTable tr").remove();

			var dish = model.getSelectedDish();
			if (dish == undefined) { return; }

			container.find("#peopleNum").html(`Ingredients for ${this.model.getNumberOfGuests()} people`);

			var ingredients = dish.extendedIngredients;

			ingredients.forEach(ingr => {
				container.find("#ingredientsTable").append(
					`<tr>
						<td>${ingr.amount * model.numberOfGuests} ${ingr.unit}</td>
						<td>${ingr.name}</td>
						<td>SEK</td>
						<td>${model.numberOfGuests}</td>
					</tr>`
				);
			})

			container.find("#totalCost").html("Total Cost: "+model.getDishPrice(dish));
			container.find("#dishName").html(dish.name);
			container.find("#prepText").html(dish.description);
			container.find("img").attr("src",dish.image);
		}
	}
}
