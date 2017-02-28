var DishDetailView = function (container, model) {
	this.container = container;
	this.model = model;
	container.hide();
	this.confirmDishButton = $("#confirmDishButton");
	this.back = $("#back");

	model.addObserver({
		name: "updateDishDetailView",
		action: function () {
			container.find("#ingredientsTable tr").remove();

			var dish = model.getSelectedDish();	
			var ingredients = dish.ingredients;

			for (i = 0;i<ingredients.length;i++) {
				container.find("#ingredientsTable").append("<tr><td>"+ingredients[i].quantity + " " + ingredients[i].unit +"</td><td>"+ingredients[i].name+"</td><td>SEK</td><td>"+ingredients[i].price+"</td></tr>");	
			}

			container.find("#totalCost").html("Total Cost: "+model.getDishPrice(dish));
			container.find("#dishName").html(dish.name);
			container.find("#prepText").html(dish.description);
			container.find("img").attr("src","images/" + dish.image);
		}
	});
}
