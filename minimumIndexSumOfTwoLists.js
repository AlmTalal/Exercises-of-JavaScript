var findRestaurant = function (list1, list2) {
  let list1Table = {};
  let commonRestaurants = [];
  let likelyRestaurants = Infinity;
  for (let i = 0; i < list1.length; i++) {
    list1Table[list1[i]] = i;
  }
  for (let i = 0; i < list2.length; i++) {
    if (list1Table[list2[i]] < Infinity) {
      let currentResValue = list1Table[list2[i]] + i;
      if (currentResValue < likelyRestaurants) {
        commonRestaurants = [list2[i]];
        likelyRestaurants = currentResValue;
      } else if (currentResValue === likelyRestaurants)
        commonRestaurants.push(list2[i]);
    }
  }
  return commonRestaurants;
};
