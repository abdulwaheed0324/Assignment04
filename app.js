// //Chapter Arrays
// // Task 1
// let studentNames = [];

// // Task 2
// let stringsArray = ["apple", "banana", "cherry"];

// // Task 3
// let numbersArray = [10, 20, 30, 40, 50];

// // Task 4
// let booleanArray = [true, false, true, false];

// // Task 5
// let mixedArray = ["John", 25, true, { hobby: "reading" }, [1, 2, 3]];

// // Task 6

// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write("<h1>Educational Qualifications in Pakistan:</h1>");
// document.write("<ol>");
// for (let i = 0; i < qualifications.length; i++) {
//   document.write("<li>" + qualifications[i] + "</li>");
// }
// document.write("</ol>");

// // Tak 7
// let studentNames = ["Ali", "Sara", "Ahmed"];
// let studentScores = [420, 450, 400];
// const totalMarks = 500;

// for (let i = 0; i < studentNames.length; i++) {
//   let percentage = (studentScores[i] / totalMarks) * 100;
//   document.write(
//     `<p>${studentNames[i]} scored ${studentScores[i]} marks out of ${totalMarks}. Percentage: ${percentage.toFixed(2)}%</p>`
//   );
// }

// // Task 8
// let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

// document.write(`<p>Initial Array: [${colors.join(", ")}]</p>`);

// let colorToAddAtBeginning = prompt("Enter a color to add to the beginning:");
// colors.unshift(colorToAddAtBeginning);
// document.write(`<p>After adding a color to the beginning: [${colors.join(", ")}]</p>`);

// let colorToAddAtEnd = prompt("Enter a color to add to the end:");
// colors.push(colorToAddAtEnd);
// document.write(`<p>After adding a color to the end: [${colors.join(", ")}]</p>`);

// colors.unshift("Black", "White");
// document.write(`<p>After adding two colors to the beginning: [${colors.join(", ")}]</p>`);

// colors.shift();
// document.write(`<p>After deleting the first color: [${colors.join(", ")}]</p>`);

// colors.pop();
// document.write(`<p>After deleting the last color: [${colors.join(", ")}]</p>`);

// let indexToAddColor = prompt("Enter the index where you want to add a color:");
// let colorToAddAtIndex = prompt("Enter the color to add at the specified index:");
// colors.splice(indexToAddColor, 0, colorToAddAtIndex);
// document.write(`<p>After adding a color at index ${indexToAddColor}: [${colors.join(", ")}]</p>`);

// let indexToDeleteColors = prompt("Enter the index from where you want to delete color(s):");
// let numberOfColorsToDelete = prompt("Enter the number of colors to delete:");
// colors.splice(indexToDeleteColors, numberOfColorsToDelete);
// document.write(`<p>After deleting ${numberOfColorsToDelete} color(s) from index ${indexToDeleteColors}: [${colors.join(", ")}]</p>`);

// //Task 9

// let studentScores = [320, 230, 480, 120];
// document.write("Original Scores: " + studentScores.join(", ") + "<br>");

// studentScores.sort((a, b) => a - b);
// document.write("Ordered Scores of Students: " + studentScores.join(", ") + "<br>");

// // Task 10 

// let cities =  [ "<br>" + "Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write("Cities List: " + cities.join(", ") + "<br> <br>");

// let selectedCities = cities.slice(2, 4);
// document.write("Selected Cities: " +"<br>" + selectedCities.join(", "));

// // Task 11
// var arr = ["This", " is", " my", " cat"];
// document.write("Array: " + "<br> "+ arr + "</br> <br>");


// var singleString = arr.join("");
// document.write( "String: " + "<br>" + singleString);

// // Task 12
// let queue = [];

// queue.push("Devices: <br>"+"Keyboard");
// queue.push("Mouse");
// queue.push("Printer");
// queue.push("Monitor");

// document.write(queue + "<br><br>");

// let firstElement = queue.shift();
// document.write("out: <br>"+firstElement + "<br><br>");

// let secondElement = queue.shift();
// document.write("out: <br>"+secondElement + "<br><br>");

// let thirdElement = queue.shift();
// document.write("out: <br>"+thirdElement + "<br><br>");

// let fourthElement = queue.shift();
// document.write("out: <br>"+fourthElement + "<br><br>");

// document.write(queue);


// //Task 13
// let queue = [];

// queue.push("Devices: <br>" + "Keyboard");
// queue.push("Mouse");
// queue.push("Printer");
// queue.push("Monitor");

// document.write(queue + "<br><br>");

// let firstElement = queue.pop();
// document.write("out: <br>" + firstElement + "<br><br>");

// let secondElement = queue.pop();
// document.write("out: <br>" + secondElement + "<br><br>");

// let thirdElement = queue.pop();
// document.write("out: <br>" + thirdElement + "<br><br>");

// let fourthElement = queue.pop();
// document.write("out: <br>" + fourthElement + "<br><br>");

// document.write(queue);

//Last Task
let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write('<select>');

for (let manufacturer of phoneManufacturers) {
    document.write(`<option value="${manufacturer}">${manufacturer}</option>`);
}

document.write('</select>');
