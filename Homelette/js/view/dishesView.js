var DishesView = function (container, model) {
this.container = container;
this.model = model;
this.lastType = undefined;


this.loadDishesView = function(container, model, type, filter) {
	var dishFrame = $("#dish");
	dishFrame.show();
	switch(type) {
		case "Main": 	type = "main dish";
					break;
		case "Dessert": type = "dessert";
					break;
		case "Starter": type = "starter";
					break;

	}

	if(!(this.lastType == undefined)) {
		var dishes = model.getAllDishes(this.lastType);
		for (var i = 0; i < dishes.length; i++) {
			$("#" + dishes[i].id).remove();
		}
	}
	var dishes = model.getAllDishes(type,filter);
	for (var i = 0; i < dishes.length; i++) {
		var dishClone = dishFrame.clone();
		dishClone.find("img").attr("src","images/"+dishes[i].image);
		dishClone.attr("id",dishes[i].id);
		dishClone.find("p").html(dishes[i].name);
		dishClone.insertAfter("#dish");
	}
	dishFrame.hide();
	this.lastType = type;
}

this.loadDishesView(container, model, "starter");
}

