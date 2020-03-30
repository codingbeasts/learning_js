//function by reference
function createMyCar(getCar){
  getCar.carName = "Koenigsegg";
}

car = {
  carName:"Audi",
  year:2020,
  model:"r8"
};

var oldCar,newCar;

oldCar = car.carName;

createMyCar(car);

newCar = car.carName;

console.log(oldCar);

console.log(newCar);
