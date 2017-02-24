var PageViewController = function (dinnerOverviewPreparationView, dinnerOverviewView, overviewHeaderView, filteringView, myDinnerView, dishesView, dishDetailView) {

myDinnerView.confirmButton.click( function () {
	dishesView.container.hide();
	myDinnerView.container.hide();
	filteringView.container.hide();

	overviewHeaderView.container.show();
	dinnerOverviewView.container.show();
	dinnerOverviewView.loadDinnerOverviewView(dinnerOverviewView.container, dinnerOverviewView.model);
	overviewHeaderView.loadOverviewHeaderView(overviewHeaderView.container, overviewHeaderView.model);


});

overviewHeaderView.backAndEditDinnerButton.click( function () {

	overviewHeaderView.container.hide();
	dinnerOverviewView.container.hide();
	dinnerOverviewPreparationView.container.hide();

	dishesView.container.show();
	myDinnerView.container.show();
	filteringView.container.show();

	
});

dinnerOverviewView.printFullRecipeButton.click( function () {
	dinnerOverviewView.container.hide();

	dinnerOverviewPreparationView.container.show();
	dinnerOverviewPreparationView.loadDinnerOverviewPreparationView(dinnerOverviewPreparationView.container, dinnerOverviewPreparationView.model);
})
}