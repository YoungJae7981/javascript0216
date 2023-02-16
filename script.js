// Define an array of colors
const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

// Get a reference to the button element
const button = document.querySelector("button");

//Define a function to change the background
function changeBackground() {
  // Make a copy of the colors array so we can remove colors as we use them
  const colorsCopy = [...colors];

  // Generate a random index for color1 and remove it from colorsCopy
  const color1Index = Math.floor(Math.random() * colorsCopy.length);
  const color1 = colorsCopy.splice(color1Index, 1);

  // Generate a random index for color2 and remove it from colorsCopy
  const color2Index = Math.floor(Math.random() * colorsCopy.length);
  const color2 = colorsCopy[color2Index];

  // Set the background to a linear gradient using color1 and color2
  document.body.style.background =
    "linear-gradient(45deg, " + color1 + ", " + color2 + ")";
  console.log(color1, color2);
}

// Define a function to set the background to white

// Attach the changeBackground function to the click event of the button
button.addEventListener("click", changeBackground);
