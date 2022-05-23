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
/* solucion 1
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
  calendarOne.splice(0, 0, [null, dailyBoundsOne[0]]);
  calendarTwo.splice(0, 0, [null, dailyBoundsTwo[0]]);
  calendarOne.push([dailyBoundsOne[dailyBoundsOne.length - 1], null]);
  calendarTwo.push([dailyBoundsTwo[dailyBoundsTwo.length - 1], null]);
  calendarOne = possibleTimeForMeetings(calendarOne, meetingDuration);
  calendarTwo = possibleTimeForMeetings(calendarTwo, meetingDuration);
  console.log(
    findingTimeForMeetings(calendarOne, calendarTwo, meetingDuration)
  );
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
  if (perfectTime.length === 0) {
    return "there are not possible matches";
  } else return perfectTime;
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
*/
function calendarMatching(
  calendar1,
  dailyBounds1,
  calendar2,
  dailyBounds2,
  meetingDuration
) {
  const updatedCalendar1 = updateCalendar(calendar1, dailyBounds1);
  const updatedCalendar2 = updateCalendar(calendar2, dailyBounds2);
  const mergedCalendar = mergedCalendars(updatedCalendar1, updatedCalendar2);
  const flattenedCalendar = flattenedCalanedar(mergedCalendar);
  return getMatchingAvailabilities(flattenedCalendar, meetingDuration);
}

function updateCalendar(calendar, dailyBounds) {
  const updatedCalendar = [
    ["0:00", dailyBounds[0]],
    ...calendar,
    [dailyBounds[1], "23:59"],
  ];
  return updatedCalendar.map((meeting) => meeting.map(timeToMinutes));
}

function mergedCalendars(calendar1, calendar2) {
  const merged = [];
  let i = 0;
  let j = 0;
  while (i < calendar1.length && j < calendar2.length) {
    const meeting1 = calendar1[i];
    const meeting2 = calendar2[j];
    if (meeting1[0] < meeting2[0]) {
      merged.push(meeting1);
      i++;
    } else {
      merged.push(meeting2);
      j++;
    }
  }
  while (i < calendar1.length) merged.push(calendar1[i++]);
  while (j < calendar2.length) merged.push(calendar2[j++]);
  return merged;
}

function flattenedCalanedar(calendar) {
  const flattened = [calendar[0].slice()];
  for (let i = 1; i < calendar.length; i++) {
    const currentMeeting = calendar[i];
    const previousMeeting = flattened[flattened.length - 1];
    const [currentStart, currentEnd] = currentMeeting;
    const [previousStart, previousEnd] = previousMeeting;
    if (previousEnd >= currentStart) {
      const newPreviousMeeting = [
        previousStart,
        Math.max(previousEnd, currentEnd),
      ];
      flattened[flattened.length - 1] = newPreviousMeeting;
    } else {
      flattened.push(currentMeeting.slice());
    }
  }
  console.log(flattened);
  return flattened;
}

function getMatchingAvailabilities(calendar, meetingDuration) {
  const matchingAvailabilities = [];
  for (let i = 1; i < calendar.length; i++) {
    const start = calendar[i - 1][1];
    const end = calendar[i][0];
    const availabilityDuration = end - start;
    if (availabilityDuration >= meetingDuration) {
      matchingAvailabilities.push([start, end]);
    }
  }
  return matchingAvailabilities.map((meeting) => meeting.map(minutesToTime));
}

function timeToMinutes(time) {
  const [hours, minutes] = time.split(":").map((str) => parseInt(str));
  return hours * 60 + minutes;
}

function minutesToTime(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const hoursString = hours.toString();
  const minutesString = mins < 10 ? "0" + mins.toString() : mins.toString();
  return hoursString + ":" + minutesString;
}

calendarMatching(
  [
    ["9:00", "10:30"],
    ["12:00", "13:00"],
    ["16:00", "18:00"],
  ],
  ["9:00", "20:00"],
  [
    ["10:00", "11:30"],
    ["12:30", "14:30"],
    ["14:30", "15:00"],
    ["16:00", "17:00"],
  ],
  ["10:00", "18:30"],
  15
);
