var climbStairs = function (n) {
  if (waysToClimb[n - 1] !== undefined) {
    return waysToClimb[n - 1];
  } else {
    let i = waysToClimb.length - 1;
    for (i; i < n; i++) {
      let theWays = waysToClimb[i] + waysToClimb[i - 1];
      waysToClimb.push(theWays);
    }
    return waysToClimb[i - 1];
  }
};

const waysToClimb = [1, 2];
