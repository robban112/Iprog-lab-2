var DishesView = function (container, model) {
	this.container = container;
	this.model = model;
	this.lastType = undefined;


	this.load = function(type, filter) {
		var dishFrame = this.container.find("#dish");
		dishFrame.show();
		switch(type) {
			case "Main": 	type = "main dish";
						break;
			case "Dessert": type = "dessert";
						break;
			case "Starter": type = "starter";
						break;

		}

		if(this.lastType != undefined) {
			var dishes = this.model.getAllDishes(this.lastType);
			for (var i = 0; i < dishes.length; i++) {
				container.find("#" + dishes[i].id).remove();
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

	this.load("starter");
}
