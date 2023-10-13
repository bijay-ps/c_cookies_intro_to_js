const restaurant = new Map();
restaurant.set("name", "A2B");
restaurant.set(1, "Chennai, TN");
restaurant.set(2, "Bangaore, KA");
restaurant.set(true, "Open");
restaurant.set(false, "Close");

// console.log(restaurant);
// console.log(restaurant.size);
// console.log(restaurant.get(1));
// console.log(restaurant.has(1));

// restaurant.clear();
// console.log(Array.from(restaurant));

restaurant.forEach(function (val, key) {
  console.log(key, val);
});
