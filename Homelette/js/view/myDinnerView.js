var MyDinnerView = function (container, model) {

	this.dropDown = container.find("#drop");
	this.confirmButton = container.find("#confirmButton");
	this.container = container;
	this.model = model;

	model.addObserver(this);

	this.update = function(obj) {
		if (!(obj == undefined
				|| obj.updates.includes("newDish")
				|| obj.updates.includes("numberOfGuests")
				|| obj.updates.includes("removeDish"))) {
			return;
		}
		var dishes = model.getFullMenu();
		var header = container.find('#tableHeader');

		var dishrows = container.find('#myTable .menuDish')
		dishrows.remove();

		dishes.forEach(dish => {
			const nameFrame = `<th>${dish.name}</th>`;
			const priceFrame = `<th>${model.getDishPrice(dish)}.00</th>`;
			const dishFrame = $(`<tr class=menuDish id=${dish.id}>${nameFrame}${priceFrame}</tr>`);
			dishFrame.insertAfter(header);
		})

		container.find("#totalMenuCost").html(model.getTotalMenuPrice() + ".00");
	}

	this.update();
}
