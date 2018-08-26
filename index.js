function takeANumber(deliLine, name) {
  deliLine.push(name);
  return "Welcome, " + name + ". You are number " + (deliLine.length) + " in line.";
}
function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return "Currently serving " + deliLine.shift() + ".";
  }
}
function currentLine(deliLine) {
  if (deliLine.length === 0) {
  return "The line is currently empty.";
  }
  var lineNumberAndName = [];
  for (let i = 0; i < deliLine.length; i++) {
<<<<<<< HEAD
    lineNumberAndName.push((i+1) + ". " + deliLine[i]);
  }
  return "The line is currently: " + lineNumberAndName.join(", ");
=======
    lineNumberAndName.push(i+1 + ". " + deliLine[i]);
    return "The line is currently: " + lineNumberAndName.join(", ");
  }
>>>>>>> e5d43e2be4a4768849884a693015e8ba6aee75fa
}