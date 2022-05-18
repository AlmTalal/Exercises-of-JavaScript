/*magine that you want to schedule a meeting of a cerain duration with a co-worker.
You have access to your calendar and your co-worker's calendar (both of which contain your
respective meetings for the day, in the form of [startTime, endTime]), as well as both of your
daily bounds (i.e., the earliest and latest times at which you're available for meetings every day, 
in the form of [earliestTime, latestTime]).

Write a function that takes in your calendar, your daily bounds, your co-worker's calendar, your co-worker's
daily bounds, and the duration of the meeting that you want to schedule, and that returns a list of all the time
blocks (in the form of [startTime, endTime]) during which you could schedule the meting, ordered from earliest time 
block to latest.

Note that times will be given and should be returned in military time, for example: 8:30. 9:01 and 23:56.

Also note that the given calendar times will be sorted by start time in ascending order, as you would expect them
to appear in a calendar application like Google Calendar.

Sample input:
Calendar1= 
[
  ["9:00", "10:30"],
  ["12:00", "13:00"],
  ["16:00", "18:00"]
]
dailyBounds1= ["9:00", "20:00"]

Calendar2=
[
  ["10:00", "11:30"],
  ["12:30", "14:30"],
  ["14:30", "15:00"],
  ["16:00", "17:00"]
]

dailyBounds2= ["10:00", "18:30"]

Meeting Duration: 30

Sample Output:
[['11:30','12:00'],['15:00','16:00'],['18:00','18:30']]*/

function calendarMatching(
  calendarOne,
  dailyBoundsOne,
  calendarTwo,
  dailyBoundsTwo,
  meetingDuration
) {
  calendarOne = convertToNumber(calendarOne);
  calendarTwo = convertToNumber(calendarTwo);
  dailyBoundsOne = convertNumbersDailyBounds(dailyBoundsOne);
  dailyBoundsTwo = convertNumbersDailyBounds(dailyBoundsTwo);
  meetingDuration = meetingDuration / 60;
  console.log(meetingDuration);
  calendarOne.splice(0, 0, [null, dailyBoundsOne[0]]);
  calendarTwo.splice(0, 0, [null, dailyBoundsTwo[0]]);
  calendarOne.push([dailyBoundsOne[dailyBoundsOne.length - 1], null]);
  calendarTwo.push([dailyBoundsTwo[dailyBoundsTwo.length - 1], null]);
  calendarOne = possibleTimeForMeetings(calendarOne, meetingDuration);
  calendarTwo = possibleTimeForMeetings(calendarTwo, meetingDuration);
  return findingTimeForMeetings(calendarOne, calendarTwo, meetingDuration);
}

function findingTimeForMeetings(calendarOne, calendarTwo, meetingDuration) {
  perfectTime = [];
  for (let i = 0; i < calendarOne.length; i++) {
    let firstNumPointer = 0;
    let secondNumpointer = 1;
    let principalInicialHour = calendarOne[i][firstNumPointer];
    let principalFinalHour = calendarOne[i][secondNumpointer];
    for (let j = 0; j < calendarTwo.length; j++) {
      let currentInicialHour = calendarTwo[j][firstNumPointer];
      let currentFinalHour = calendarTwo[j][secondNumpointer];
      let inicialHour = Math.max(principalInicialHour, currentInicialHour);
      let finalHour = Math.min(principalFinalHour, currentFinalHour);
      if (inicialHour + meetingDuration <= finalHour) {
        inicialHour = convertToHour(inicialHour);
        finalHour = convertToHour(finalHour);
        perfectTime.push([inicialHour, finalHour]);
      }
    }
  }
  console.log(perfectTime);
}

function convertToHour(number) {
  let decimalPart = number - Math.trunc(number);
  decimalPart = decimalPart * 6;
  number = Math.trunc(number);
  number = String(number);
  decimalPart = String(decimalPart);
  number = number + ":" + decimalPart + 0;
  return number;
}

function possibleTimeForMeetings(array, meetingDuration) {
  const possibleTime = [];
  let down = 1;
  let downsPointer = 0;
  let upsPointer = 1;
  while (down < array.length) {
    let up = down - 1;
    let upNum = array[up][upsPointer];
    let downNum = array[down][downsPointer];
    if (upNum + meetingDuration <= downNum) {
      possibleTime.push([upNum, downNum]);
    }
    down++;
  }
  return possibleTime;
}

function convertToNumber(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      let number = array[i][j];
      number = number.replace(/:/, ".");
      let decimalPart = number - Math.trunc(number);
      number = Math.trunc(number);
      decimalPart = decimalPart / 0.6;
      number = decimalPart + number;
      number = number.toFixed(2);
      number = Number(number);
      decimalPart = Number(decimalPart);
      array[i][j] = number;
    }
  }
  return array;
}

function convertNumbersDailyBounds(array) {
  for (let j = 0; j < array.length; j++) {
    let number = array[j];
    number = number.replace(/:/, ".");
    let decimalPart = number - Math.trunc(number);
    number = Math.trunc(number);
    decimalPart = decimalPart / 0.6;
    number = decimalPart + number;
    number = number.toFixed(2);
    number = Number(number);
    decimalPart = Number(decimalPart);
    array[j] = number;
  }
  return array;
}

calendarMatching(
  [
    ["9:00", "10:30"],
    ["12:00", "13:00"],
    ["16:00", "18:00"],
  ],
  ["8:00", "20:00"],
  [
    ["10:00", "11:30"],
    ["12:30", "14:00"],
    ["14:30", "15:00"],
    ["16:00", "17:00"],
  ],
  ["8:00", "18:30"],
  30
);
