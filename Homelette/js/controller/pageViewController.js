var PageViewController = function (
	model,
	dinnerOverviewPreparationView,
	dinnerOverviewView,
	overviewHeaderView,
	filteringView,
	myDinnerView,
	dishesView,
	dishDetailView,
	loadingView
) {

	myDinnerView.confirmButton.click(function () {
		dishesView.container.hide();
		myDinnerView.container.hide();
		filteringView.container.hide();
		dishDetailView.container.hide();

		overviewHeaderView.container.show();
		dinnerOverviewView.container.show();
		dinnerOverviewView.load();
		overviewHeaderView.load();
	});

	overviewHeaderView.backAndEditDinnerButton.click(function () {
		overviewHeaderView.container.hide();
		dinnerOverviewView.container.hide();
		dinnerOverviewPreparationView.container.hide();

		dishesView.container.show();
		myDinnerView.container.show();
		filteringView.container.show();
	});

	dinnerOverviewView.printFullRecipeButton.click(function () {
		dinnerOverviewView.container.hide();

		dinnerOverviewPreparationView.container.show();
		dinnerOverviewPreparationView.load();
	});

	dishesView.container.on('click', '.side', function(e) {
		dishesView.container.hide();
		filteringView.container.hide();
		loadingView.container.show();
		const loadframe = $(`
				<img class="loadFrame"
						 src="images/spinner.gif"
						 style="width:150px;height:150px">
				</img>
		`);
		loadingView.container.append(loadframe);


		const target = e.currentTarget;
		model.setSelectedDish(target.id, function() {
			dishDetailView.container.show();
			loadingView.container.find(".loadFrame").remove();
		});
	});

	dishDetailView.back.click( function () {
		dishDetailView.container.hide();

		dishesView.container.show();
		myDinnerView.container.show();
		filteringView.container.show();
	});

	dishDetailView.confirmDishButton.click(function () {
		dishDetailView.container.hide();
		model.addDishToMenu(model.getSelectedDish());

		dishesView.container.show();
		myDinnerView.container.show();
		filteringView.container.show();
	});
}
