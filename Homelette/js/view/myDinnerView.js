var MyDinnerView = function (container, model) {

	this.dropDown = $("#drop");
	this.firstRow = $("#firstRow");
	this.secondRow = $("#secondRow");
	this.thirdRow = $("#thirdRow");
	this.confirmButton = $("#confirmButton");
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
	var array = ["#first", "#second", "#third"];

	for (var i = 0; i<3; i++) {
		var a = $(array[i]);
		var b = $(array[i] + "Cost");
		if (dishes[i] == undefined) {
			a.html("Pending");
			b.html("0.00")
		} else {
			a.html(dishes[i].name);
			b.html(model.getDishPrice(dishes[i]) + ".00");
		}
	}

	$("#totalMenuCost").html(model.getTotalMenuPrice() + ".00");
}