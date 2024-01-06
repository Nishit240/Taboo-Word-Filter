function checkBadWord() {
    var userInput = document.getElementById("textInput").value.toLowerCase();
    var badWords = ["Bad","bad","badword","SCUM","Scum","scum","Shit","Fuck", "Fuckyou", "FUCKYOU", "fuck", "fuckyou" ]; // Add your bad words here
    // Check if any bad word is present in the user input
    for (var i = 0; i < badWords.length; i++) {
        if (userInput.includes(badWords[i])) {
            alert("Alert: Content that is not suitable has been identified. Please revise your input.");
            return;
        }
    }
    // If no bad words are found, proceed
    alert("Your input is appropriate and accepted!");
}