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

function minReward (scores){
    let i = 0;
    let totalRewards = 0;
    let rewards = [];
    let gift = 1;
    while (i < scores.length){
        if (scores[i] < scores[i + 1] || scores[i] > scores[i - 1]){
            let j = i + 1;
            rewards.push(gift);
            totalRewards += gift;
            while (scores[j - 1] < scores[j]){
                gift++;
                rewards.push(gift);
                totalRewards = totalRewards + gift;
                j++;
            }
            i = j;
        }
        if (scores[i] > scores [i + 1] || scores[i] < scores[i - 1]){
            let j = i + 1;
            gift = 1;
            totalRewards += gift;
            while (scores[j - 1] > scores[j]){
                gift++;
                totalRewards = totalRewards + gift;
                j++
            }
            for (gift; gift > 0; gift--){
                rewards.push(gift);
            }
            i = j;
            gift = rewards[rewards.length - 1] + 1;
        }
    }
    console.log(rewards,totalRewards);
}

minReward([2,1,2]);
minReward([9,7,6,3,1,6,7,8,10,1])