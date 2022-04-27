/*Imagine that you're a teacher who's just graded the final exam in a class. 
you have a list of student scores on the final exam in a particular order (not necesarily sorted),
 and you want to reward your students. You decide to do so fairly by giving them arbitrary rewards following two rules:

1- All students must receive at least one reward
2- Any given student must receive strictly more rewards than an adjacent student
 (a student immediately to the left or to the right) with a lower score and must receive strictly fewer rewards than an adjacent 
 student with a higher score.

Write a function that takes in a list of scores and returns the minimum number of rewards that you must give out to students 
to satisfy the two rules.

you can assume that all students have different scores; in other words, the scores are all unique

Sample input:
scores= [8,4,2,1,3,6,7,9,5]
        [4,3,2,1,2,3,4,5,1]
Sample Output
25 // you would give out the following rewards: [4,3,2,1,2,3,4,5,1]*/

/*
function minRewards(scores) {
    let rewards = scores.map((x) => 1);
    let MinIdxs = findMinidx(scores);
    for (idx of MinIdxs) {
      givingRewards(scores, rewards, idx);
    }
    console.log(rewards.reduce((a, b) => a + b));
  }
  
  function findMinidx(array) {
    MinIdxs = [];
    for (let i = 0; i < array.length; i++) {
      if (i === 0 && array[i] < array[i] + 1) {
        MinIdxs.push(i);
        continue;
      }
      if (i === array.length - 1 && array[i] < array[i - 1]) {
        MinIdxs.push(i);
        continue;
      }
      if (array[i] < array[i - 1] && array[i] < array[i + 1]) {
        MinIdxs.push(i);
      }
    }
    return MinIdxs;
  }
  
  function givingRewards(scores, rewards, idx) {
    for (let idxLeft = idx - 1; idxLeft >= 0; idxLeft--) {
      if (scores[idxLeft] > scores[idxLeft + 1]) {
        rewards[idxLeft] = Math.max(rewards[idxLeft], rewards[idxLeft + 1] + 1);
      }
    }
    for (let idxRight = idx + 1; idxRight < scores.length - 1; idxRight++) {
      if (scores[idxRight] > scores[idxRight - 1]) {
        rewards[idxRight] = rewards[idxRight - 1] + 1;
      }
    }
    return rewards;
  }
  
  minRewards([8, 4, 2, 1, 3, 6, 7, 9, 5]);*/
/* 
function minRewards(scores) {
  const rewards = scores.map((x) => 1);
  const localMinIdxs = getLocalMinIdxs(scores);
  for (const localMinIdx of localMinIdxs) {
    expandFromLocalMinIdx(localMinIdx, scores, rewards);
  }
  return rewards.reduce((a, b) => a + b);
}

function getLocalMinIdxs(array) {
  if (array.length === 1) return [0];
  const localMinIdxs = [];
  for (let i = 0; i < array.length; i++) {
    if (i === 0 && array[i] < array[i + 1]) localMinIdxs.push(i);
    if (i === array.length - 1 && array[i] < array[i - 1]) localMinIdxs.push(i);
    if (i === 0 || i === array.length - 1) continue;
    if (array[i] < array[i + 1] && array[i] < array[i - 1])
      localMinIdxs.push(i);
  }
  return localMinIdxs;
}

function expandFromLocalMinIdx(localMinIdx, scores, rewards) {
  let leftIdx = localMinIdx - 1;
  while (leftIdx >= 0 && scores[leftIdx] > scores[leftIdx + 1]) {
    rewards[leftIdx] = Math.max(rewards[leftIdx], rewards[leftIdx + 1] + 1);
    leftIdx--;
  }
  let rightIdx = localMinIdx + 1;
  while (rightIdx < scores.length && scores[rightIdx] > scores[rightIdx - 1]) {
    rewards[rightIdx] = rewards[rightIdx - 1] + 1;
    rightIdx++;
  }
}

minRewards([8, 4, 2, 1, 3, 6, 7, 9, 5]);
*/

//second Solution

function minRewards(scores) {
  let rewards = scores.map((x) => 1);
  let idx = 0;
  for (idx; idx < scores.length; idx++) {
    if (scores[idx] < scores[idx + 1]) {
      let idxLeft = idx - 1;
      while (idxLeft >= 0 && scores[idxLeft] > scores[idxLeft + 1]) {
        rewards[idxLeft] = rewards[idxLeft + 1] + 1;
        idxLeft--;
      }
    }
  }
  for (idx; idx >= 0; idx--) {
    if (scores[idx] > scores[idx - 1]) {
      let idxRight = idx - 1;
      while (
        idxRight <= scores.length &&
        scores[idxRight] < scores[idxRight - 1]
      ) {
        rewards[idxRight] = rewards[idxRight - 1] + 1;
        idxRight;
      }
    }
  }
  let totalRewards = rewards.reduce((a, b) => a + b);
  console.log(rewards, totalRewards);
}

minRewards([8, 4, 2, 1, 3, 6, 7, 9, 5]);
