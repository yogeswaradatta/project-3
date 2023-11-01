const foodData = require('./food.json');

function listFood(foodCategory = '') {
  if (foodCategory.length > 0) {
    return foodData.filter((food) => food.category === foodCategory);
  } else {
    return foodData;
  }
}

const allFoods = listFood();
console.log(allFoods);

const veg = listFood('Vegetable');
console.log(veg);

const fruits = listFood('Fruit');
console.log(fruits);

const proteinFoods = listFood("Protein");
console.log(proteinFoods);

const nuts = listFood('Nuts');
console.log(nuts);

const grains = listFood('Grain');
console.log(grains);

const dairy = listFood('Dairy');
console.log(dairy);

function sortCalorie(condition){
  if(condition==='asec'){
    return foodData.filter((food) => food.calorie < 100);
  }
  else if(condition==="desc"){
    return foodData.filter((food) => food.calorie > 100)
  }
}


const ascendingCalorie = sortCalorie('desc');
console.log(ascendingCalorie);

const descendingCalorie = sortCalorie('asec');
console.log(descendingCalorie);

function sort(type) {
  if (type === "protiens") {
    return foodData.sort((a, b) => b.protiens - a.protiens);
  } else if (type === "cab") {
    return foodData.sort((a, b) => a.cab - b.cab);
  }
}

const sortedByProtein = sort('protiens');
console.log(sortedByProtein);

const sortedBycarbo = sort('cab');
console.log(sortedBycarbo);

