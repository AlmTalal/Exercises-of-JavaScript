var minCostClimbingStairs = function (cost) {
  let climbCost = new Array(cost.length).fill(0);
  climbCost[0] = cost[0];
  climbCost[1] = cost[1];
  let totalSteps = climbCost[0];
  totalSteps = Math.min(climbCost[0], climbCost[1]);
  for (let i = 2; i < cost.length; i++) {
    totalSteps = totalSteps + cost[i];
    climbCost[i] = totalSteps;
    totalSteps = Math.min(totalSteps, climbCost[i - 1]);
  }
  return totalSteps;
};

minCostClimbingStairs([1, 0, 0, 1]);
