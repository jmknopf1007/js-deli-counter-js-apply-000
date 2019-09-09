var katzDeliLine = []; /*At the beginning of the day,
the deli is empty and is represented by an empty array*/

var number = 1 + katzDeliLine.length; 

function takeANumber(katzDeliLine) {
  katzDeliLine.push(`${number}`);
  return(`Welcome you are number ${number}.`);
}

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine) {
  let i = 0;
  while (i < katzDeliLine.length) {
    i++;
  }
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeliLine.shift()}.`);
}

var currentLine = function (katzDeliLine) {
  if (katzDeliLine.length === 0) {
  return "The line is currently empty.";
}
   var customerAndNumber = [];
   for (var i = 0; i < katzDeliLine.length; i++) {
   customerAndNumber.push(i+1 + ". " + katzDeliLine[i])
}
  return "The line is currently: " + customerAndNumber.join(", ");
};