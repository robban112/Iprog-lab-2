$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	model.addDishToMenu(1);
	model.addDishToMenu(100);
	model.addDishToMenu(200);

	//And create the needed controllers and views
	var filteringView = new FilteringView($("#filteringView"), model);

	var overviewHeaderView = new OverviewHeaderView($("#overviewHeaderView"), model);

	var myDinnerView = new MyDinnerView($("#myDinnerView"), model);
	var myDinnerViewController = new MyDinnerViewController(myDinnerView, model);

	var dishesView = new DishesView($("#dishesView"), model);
	var dishesViewController = new DishesViewController(dishesView, model);

	var filteringView = new FilteringView($("#filteringView"), model);
	var filteringViewController = new FilteringViewController(filteringView, dishesView, model);

	var dishDetailView = new DishDetailView($("#dishDetailView"), model);
	var dinnerOverviewView = new DinnerOverviewView($("#dinnerOverviewView"), model);
	var dinnerOverviewPreparationView = new DinnerOverviewPreparationView($("#dinnerOverviewPreparationView"), model);

	var pageViewController = new PageViewController(dinnerOverviewPreparationView, dinnerOverviewView, overviewHeaderView, filteringView, myDinnerView, dishesView, dishDetailView);

});