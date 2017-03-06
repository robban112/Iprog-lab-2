var DishesView = function (container, model) {
	this.container = container;
	this.model = model;


	this.load = function(type, filter) {
		const baseURI = this.model.recipeImagesBaseURI;
		container.find(".dishSquare").remove();
		model.getAllDishes(type,filter,function(dishes) {
			for (var i = 0; i < dishes.length; i++) {
				const dishFrame = $(`
					<div class = "side dishSquare" style="margin-top: 10px; margin-left: 10px; padding:1" id=${dishes[i].id}>
						<img src=${baseURI}${dishes[i].image} style="margin-bottom: 5px;width: 160px;height:130px;">
						<div class = "w3-container w3-black" style="height:65px; width:160px;">
							<p style="text-align: center; vertical-align: middle">${dishes[i].title}</p>
						</div>
						<div class = "w3-container" style="padding:3;overflow:scroll;width:160px">
							<wbr style="display: inline-block;">
								Lorem ipsum dolor sit amet,
								consectetur adipiscing elit. Aenean et ultricies quam.
							</wbr>
						</div>
					</div>
				`)
				$("#dishesView").append(dishFrame);
			}
		});
	}

	this.load("main course", "");
}
