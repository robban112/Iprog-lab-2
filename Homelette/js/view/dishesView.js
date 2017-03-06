var DishesView = function (container, model) {
	this.container = container;
	this.model = model;


	this.load = function(type, filter) {
		const baseURI = this.model.recipeImagesBaseURI;
		container.find(".dishSquare").remove();

		const loadframe = $(`
				<img class="loadFrame" src="images/spinner.gif" style="width:150px;height:150px"></img>
		`);
		container.append(loadframe);

		model.getAllDishes(type,filter,function(dishes) {
			container.find(".loadFrame").remove();
			for (var i = 0; i < dishes.length; i++) {
				const dishFrame = $(`
					<div class = "side dishSquare" style="margin-top: 10px; margin-left: 10px; padding:1;cursor: hand" id=${dishes[i].id}>
						<img src=${baseURI}${dishes[i].image} style="margin-bottom: 5px;width: 160px;height:130px;">
						<div class = "w3-container w3-black" style="height:65px; width:160px;">
							<p style="text-align: center; vertical-align: middle;font-family:Palatino">${dishes[i].title}</p>
						</div>
						<div class = "w3-container" style="padding:3;overflow:scroll;width:160px">
							<wbr style="display: inline-block;">
								Lorem ipsum dolor sit amet,
								consectetur adipiscing elit. Aenean et ultricies quam.
							</wbr>
						</div>
					</div>
				`)
				container.append(dishFrame);
			}
		});
	}

	this.load("main course", "");
}
