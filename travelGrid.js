function gridTraveler(m, n) {
  if (m === 0 || n === 0) {
    return 0;
  }
  if ([m, n] in waysToTravel) {
    return waysToTravel[[m, n]];
  } else {
    waysToTravel[[m, n]] = gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
  }
  console.log(waysToTravel[[m, n]]);
  return waysToTravel[[m, n]];
}
let waysToTravel = {
  "1,1": 1,
};

gridTraveler(18, 18);
gridTraveler(5, 6);
