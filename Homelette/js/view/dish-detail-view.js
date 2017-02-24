var DishDetailView = function (container, model) {

	var dish = model.getDish(200);	
	var ingredients = dish.ingredients;
	for (i = 0;i<ingredients.length;i++) {
		$("#ingredientsTable").append("<tr><td>"+ingredients[i].quantity + " " + ingredients[i].unit +"</td><td>"+ingredients[i].name+"</td><td>SEK</td><td>"+ingredients[i].price+"</td></tr>");	
	}
	container.find("#totalCost").html("Total Cost: "+model.getDishPrice(dish));
	container.find("#dishName").html(dish.name);
	container.find("#prepText").html(dish.description);
	
}
