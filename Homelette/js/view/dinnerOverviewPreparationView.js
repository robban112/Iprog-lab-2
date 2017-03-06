var DinnerOverviewPreparationView = function (container, model) {
	this.container = container;
	this.model = model;
	container.hide();

	this.load = function () {

		var dishes = model.getFullMenu();

		container.find(".dishInfoFrame").remove();

		for(var i = 0; i<dishes.length; i++){
			const dishInfoFrame = $(`
					<div class="dishInfoFrame" style="margin-left: 40px;padding:0;margin-top:50px">
						<div class="row">
							<div class="col-lg-2 col-md-2 col-xs-2">
								<img src="${dishes[i].image}" style="margin-bottom: 5px;width: 140px;height:130px;">
							</div>
							<div class="col-lg-3 col-md-3 col-xs-3">
								<div class = "w3-container" style="padding:0; text-align: right">
									<h1 style="margin-top:0;">${dishes[i].title}</h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor neque egestas. </p>
								</div>
							</div>
							<div class="col-lg-2 col-md-2 col-xs-2" style="margin-left:200px">
								<h1 style="margin-top:0">Preparation</h1>
								<p style="width: 300px;">${dishes[i].instructions}</p>
							</div>
						</div>
					</div>
				`)
				$("#dinnerOverviewPreparationView").append(dishInfoFrame);
		}
	}
}
