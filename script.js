// Strings to pick random elements from
const lowerCase = "qwertyuiopasdfghjklzxcvbnm";
const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const num = "0123456789";
const specialChar = "!@#$%^&*()-_~+=[]{}?:;,.<>`";

// Fetch the length slider
const lenSlider = document.getElementById("lenRange");
const lenRangeVal = document.getElementById("lenRangeVal");

// Set the initial value and update the displayed value
lenRangeVal.textContent = lenSlider.value;

// Update the displayed value whenever the slider value changes
function updateSliderValue() {
    lenRangeVal.textContent = lenSlider.value;
}

// Fetch the checkboxes
const lowerCaseCheckbox = document.getElementById("lowerCaseBox");
const upperCaseCheckbox = document.getElementById("upperCaseBox");
const numCheckbox = document.getElementById("numBox");
const specialCharCheckbox = document.getElementById("specialCharBox");

// Pick random elements from strings
function getRandomElement(str) {
    return str.charAt(Math.floor(Math.random() * str.length));
}

let shuffledPass = "";

// Generate password
function generatePass() {
    let selectedChars = "";

    // Check the checkboxes for each character set and add the corresponding string to selectedChars
    if (lowerCaseCheckbox.checked) {
        selectedChars += lowerCase;
    }

    if (upperCaseCheckbox.checked) {
        selectedChars += upperCase;
    }

    if (numCheckbox.checked) {
        selectedChars += num;
    }

    if (specialCharCheckbox.checked) {
        selectedChars += specialChar;
    }

    // Validate number of selections
    if (selectedChars.length === 0) {
        alert("Please check at least one option.");
        return "";
    }

    const passLength = lenSlider.value;
    shuffledPass = "";

    for (let i = 0; i < passLength; i++) {
        shuffledPass += getRandomElement(selectedChars);
    }

    return shuffledPass;
}

const generateBtn = document.getElementById("generateBt");
const passwordOutput = document.getElementById("passwordOutput");
var box = document.getElementById("box");

generateBtn.addEventListener("click", function () {
    const sliderValue = lenSlider.value;

    // Check if at least one checkbox is checked
    if (
        !lowerCaseCheckbox.checked &&
        !upperCaseCheckbox.checked &&
        !numCheckbox.checked &&
        !specialCharCheckbox.checked
    ) {
        alert("Please check at least one option.");
        return;
    }

    if (sliderValue === "0") {
        box.style.display = "none";
    } else {
        box.style.display = "inline-block";
        box.textContent = generatePass();
        box.style.width = sliderValue * 11 + "px";
    }
});

lenSlider.addEventListener("input", function () {
    const sliderValue = lenSlider.value;
    lenRangeVal.textContent = sliderValue;
});

function copyPass() {
    if (shuffledPass.length === 0) {
        alert("No password generated yet.");
        return;
    }

    navigator.clipboard.writeText(shuffledPass)
        .then(() => {
            alert("Password copied successfully.");
        })
        .catch((error) => {
            console.error("Failed to copy password:", error);
        });
}

function hideDisclaimer() {
    var disclaimerBox = document.getElementById("disclaimerBox");
    disclaimerBox.classList.add("hidden");

    var disclaimerText = document.getElementById("disclaimerText");
    disclaimerText.classList.add("hidden");
}
