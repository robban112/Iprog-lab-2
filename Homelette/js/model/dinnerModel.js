//DinnerModel Object constructor
var DinnerModel = function() {
  this.firstUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/"
  this.recipeImagesBaseURI = "https://spoonacular.com/recipeImages/"

  this.numberOfGuests = 0;
  var dishes = [];
  this.dishesInMenu = [];
  this.observers = [];
  this.selectedDish = null;

  this.addObserver = function(observer) {
    this.observers.push(observer);
  }

  this.notifyObservers = function(obj) {
    this.observers.forEach(o => o.update(obj));
  }

  this.setNumberOfGuests = function(num) {
    this.numberOfGuests = num;
    this.notifyObservers({updates: ["numberOfGuests"]});
  }

  this.getNumberOfGuests = function() {
    return this.numberOfGuests;
  }

  //function that returns a dish of specific ID
  this.getDish = function (id) {
    return dishes.find(dish => dish.id == id);
  }

  this.setSelectedDish = function(id) {
    this.getExtendedDish(id, (dish) => {
      this.selectedDish = dish;
      this.notifyObservers({updates: ["selectedDish"]});
    });
  }

  //Returns the dish that is on the menu for selected type
  this.getSelectedDish = function(type) {
    return this.selectedDish;
  }

  //Returns all the dishes on the menu.
  this.getFullMenu = function() {
    return this.dishesInMenu;
  }

  //Returns all ingredients for all the dishes on the menu.
  this.getAllIngredients = function() {
    return this.dishesInMenu
      .map(info => info.extendedIngredients)
      .reduce((a,b) => a.concat(b),[]);
  }

  this.getExtendedDish = function(id, cb) {
    $.ajax({
      url: `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/information`,
      headers: { 'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB' },
      success: (dish) => {
        cb.call(this,dish);
      },
      error: (data) => {
        alert("Error: Couldn't fetch the dish.");
      }
    });
  }

  //Returns the total price of the menu (all the ingredients multiplied by number of guests).
  this.getTotalMenuPrice = function() {
    return this.getPriceForIngredients(this.getAllIngredients());
  }

  //Returns the price for a given dish
  this.getDishPrice = function(dish) {
    return this.getPriceForIngredients(dish.extendedIngredients);
  }

  //Returns the price for a set of ingredients
  this.getPriceForIngredients = function(ingredients) {
    const priceOfIngredients = ingredients
      .map(ingr=>ingr.amount)
      .reduce((a,b)=>a+b, 0);
    return this.numberOfGuests * priceOfIngredients;
  }

  //Adds the passed dish to the menu. If the dish of that type already exists on the menu
  //it is removed from the menu and the new one added.
  this.addDishToMenu = function(dish) {
    //this.dishesInMenu = this.dishesInMenu.filter(d => d.type != dish.type);
    this.dishesInMenu.push(dish);
    this.notifyObservers({updates: ["newDish"]});
  }

  //Removes dish with the given id from menu
  this.removeDishFromMenu = function(id) {
    this.dishesInMenu = this.dishesInMenu.filter(dish => dish.id != id);
    this.notifyObservers({updates: ["removeDish"]});
  }

  //function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
  //you can use the filter argument to filter out the dish by name or ingredient (use for search)
  //if you don't pass any filter all the dishes will be returned
  this.getAllDishes = function (type,query,cb) {
    type = plusSeparatedString(type);
    $.ajax({
      url: `${this.firstUrl}search?query=${query}&type=${type}`,
      headers: { 'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB' },
      success: function(data) {
        dishes = data.results;
        cb(dishes);
      },
      error: function(data) {
        alert("Error: Couldn't fetch the food.");
      }
    });
  }
}

function plusSeparatedString(s) {
  if(s == undefined || s == "") { return ""; }
  return s.split(" ").reduce((w1,w2) => `${w1}+${w2}`);
}
