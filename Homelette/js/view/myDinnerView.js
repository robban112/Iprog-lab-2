var MyDinnerView = function (container, model) {

	this.dropDown = container.find("#drop");
	this.confirmButton = container.find("#confirmButton");
	this.container = container;
	this.model = model;

	model.addObserver(this);

	this.update = function(obj) {
		//only update if a relevant change has occured in the model
		if (
			!(obj == undefined
				|| obj.updates.includes("newDish")
				|| obj.updates.includes("numberOfGuests")
				|| obj.updates.includes("removeDish")
			)
		) { return; }

		var dishes = model.getFullMenu();
		var header = container.find('#tableHeader');

		var dishrows = container.find('#myTable .menuDish')
		dishrows.remove();

		dishes.forEach(dish => {
			const dishFrame = $(
				`<tr class=menuDish id=${dish.id}>
					 <th>${dish.title}</th>
					 <th>${model.getDishPrice(dish)}</th>
				 </tr>`
			 )

			dishFrame.insertAfter(header);
		})

		container.find("#totalMenuCost").html(model.getTotalMenuPrice() + " SEK");
	}

	this.update();
}
