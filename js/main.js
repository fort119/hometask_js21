class Hamburger {

  size;
  stuffing;
  toppings = [];

  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
  }

  static SIZE_SMALL = {
    price: 50,
    calorie: 20
  };
  static SIZE_BIG = {
    price: 100,
    calorie: 40
  };
  static STUFFING_CHEESE = {
    price: 10,
    calorie: 20
  };
  static STUFFING_SALAD = {
    price: 20,
    calorie: 5
  };
  static STUFFING_POTATO = {
    price: 15,
    calorie: 10
  };
  static TOPPING_SPICE = {
    price: 15,
    calorie: 0
  };
  static TOPPING_MAYO = {
    price: 20,
    calorie: 5
  };

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calcTotalPrice() {
    let priceOfToppings = this.toppings.reduce(function (total, topping) {
      return total + topping.price;
    }, 0);
    return (this.size.price + priceOfToppings + this.stuffing.price);
  }

  calcTotalCalories() {
    const toppingCalories = this.toppings.reduce(function (total, topping) {
      return total + topping.calorie;
    }, 0);
    return (this.size.calorie + this.stuffing.calorie + toppingCalories);
  }
}


let h1 = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_POTATO);

h1.addTopping(Hamburger.TOPPING_SPICE);
console.log(h1.calcTotalPrice());

h1.addTopping(Hamburger.TOPPING_MAYO);
console.log(h1.calcTotalCalories());
console.log(h1.calcTotalPrice());
