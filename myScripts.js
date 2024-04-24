function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

// Start the clock
startTime();

//POST-IT NOTE SAVE (JAVASCRIPT)
if (localStorage["note"]) {
    var note = localStorage["note"];
    document.getElementById("note").value = note;
 }
  
 function autoSave() {
    var note = document.getElementById("note").value;
    localStorage.setItem("note", note);
 }
 
 //POST-IT NOTE SHOW AND HIDE
 var show = false;
 function showNote(){
    if (show == false){
        document.getElementById("note").style.opacity = 1;
        show = true;
    }
    else if (show == true){
        document.getElementById("note").style.opacity = 0;
        show = false;
    }
 }
 
 You can achieve this by using JavaScript to show and hide the calculator when a button is clicked. Here's how you can do it:

html

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Calculator Toggle</title>
<style>
  #calculator-container {
    display: none; /* Hide the calculator initially */
  }
</style>
</head>
<body>

<button onclick="toggleCalculator()">Toggle Calculator</button>

<div id="calculator-container">
  <iframe id="calculator-frame" width="219" height="302" src="http://calculator-1.com/outdoor/?f=0274C8&r=666666" scrolling="no" frameborder="0"></iframe><br />
  <a href="https://calculator-1.com/">The Best Free Online Calculator - Calculator-1.com</a>
</div>

<script>
  function toggleCalculator() {
    var calculatorContainer = document.getElementById("calculator-container");
    if (calculatorContainer.style.display === "none") {
      calculatorContainer.style.display = "block"; // Show the calculator
    } else {
      calculatorContainer.style.display = "none"; // Hide the calculator
    }
  }
</script>

</body>
</html>
