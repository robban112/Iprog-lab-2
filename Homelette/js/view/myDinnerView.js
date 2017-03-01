var MyDinnerView = function (container, model) {

	this.dropDown = container.find("#drop");
	this.confirmButton = container.find("#confirmButton");
	this.container = container;

	model.addObserver({
		name: "updateMyDinnerView",
		action: function() {
			loadMyDinnerView(container, model);
		}
	});

	loadMyDinnerView(container, model);
}

loadMyDinnerView = function(container, model) {
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
