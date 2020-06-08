$( document ).ready(function() {
  let userInput = prompt("Enter a sentence");
  let userInputArray = userInput.split(" ");
  let seenAlready = [];
  let counter = 0;

  userInputArray.forEach(function(element) {
    let firstAppearance = userInputArray.indexOf(element);
    let lastAppearance = userInputArray.lastIndexOf(element);

    if (firstAppearance !== lastAppearance) {
      seenAlready.push(element);

    }
  });
  console.log(seenAlready);

});