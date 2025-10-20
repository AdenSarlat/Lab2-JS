const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");//finding the sliders by ids
const blueSlider = document.getElementById("blue");

//Get the body element
const pageBody = document.body;


//the current red green blue values
        function updateBackgroundColor() {
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;

    const rgbColor = `rgb(${red}, ${green}, ${blue})`;// Make an rgb color out of those values
// Set tht color as the background
    pageBody.style.backgroundColor = rgbColor;
}
redSlider.addEventListener("input", updateBackgroundColor);
greenSlider.addEventListener("input", updateBackgroundColor); //event listners for the slider input
blueSlider.addEventListener("input", updateBackgroundColor);
//calls update background when a value is changed